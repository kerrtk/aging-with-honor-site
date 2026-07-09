import { NextResponse } from "next/server"
import { z } from "zod"

const tipSchema = z.object({
  message: z.string().min(20),
  name: z.string().optional(),
  email: z.string().email().optional().or(z.literal("")),
})

// NOTE: this is a stub. Wire this up to the newsroom's tip-management system
// (e.g. a secure inbox or case-management tool) before launch.
export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  const parsed = tipSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json({ error: "A tip message of at least 20 characters is required." }, { status: 400 })
  }

  return NextResponse.json({ ok: true })
}
