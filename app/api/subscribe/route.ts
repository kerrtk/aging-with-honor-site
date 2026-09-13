import { NextResponse } from "next/server"

const BREVO_CONTACTS = "https://api.brevo.com/v3/contacts"
const FALLBACK = "kerr.systems@gmail.com"

export async function POST(request: Request) {
  const apiKey = process.env.BREVO_API_KEY
  const listId = process.env.BREVO_LIST_ID

  // Not configured yet. Say so plainly rather than reporting a success that
  // never happened, which is how the original forms lost every signup.
  if (!apiKey || !listId) {
    console.error("[subscribe] BREVO_API_KEY or BREVO_LIST_ID is not set")
    return NextResponse.json(
      {
        ok: false,
        error: `Sign-up is not switched on yet. Please email ${FALLBACK} and you will be added by hand.`,
      },
      { status: 503 },
    )
  }

  let payload: { email?: string; firstName?: string; source?: string }
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json(
      { ok: false, error: "We could not read that. Please try again." },
      { status: 400 },
    )
  }

  const email = String(payload.email ?? "").trim().toLowerCase()
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "That email address does not look quite right." },
      { status: 400 },
    )
  }

  const firstName = String(payload.firstName ?? "").trim().slice(0, 80)
  const source = String(payload.source ?? "").trim().slice(0, 40)

  try {
    const response = await fetch(BREVO_CONTACTS, {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        email,
        // Lets a returning address update its record instead of failing.
        updateEnabled: true,
        listIds: [Number(listId)],
        attributes: {
          ...(firstName ? { FIRSTNAME: firstName } : {}),
          ...(source ? { SIGNUP_SOURCE: source } : {}),
        },
      }),
      cache: "no-store",
    })

    // 201 on create, 204 when an existing contact is updated.
    if (response.status === 201 || response.status === 204) {
      return NextResponse.json({ ok: true })
    }

    const detail = await response.text()

    // Defensive: only reachable if updateEnabled is ever turned off.
    if (detail.includes("duplicate_parameter")) {
      return NextResponse.json({ ok: true, alreadySubscribed: true })
    }

    console.error(`[subscribe] Brevo responded ${response.status}: ${detail}`)
    return NextResponse.json(
      {
        ok: false,
        error: `We could not save that just now. Please try again, or email ${FALLBACK}.`,
      },
      { status: 502 },
    )
  } catch (error) {
    console.error("[subscribe] request to Brevo failed", error)
    return NextResponse.json(
      {
        ok: false,
        error: `We could not reach our email service. Please try again shortly, or email ${FALLBACK}.`,
      },
      { status: 502 },
    )
  }
}
