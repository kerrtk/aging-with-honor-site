import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources for Family Caregivers | Aging With Honor",
  description:
    "Plan Today. Honor Tomorrow. Four trusted national resources every family caregiver should know, explained in plain language.",
};

const resources = [
  {
    num: "1",
    title: "Family Caregiver Alliance",
    whatFor: "For you — the caregiver.",
    detail:
      "This one exists to support the person doing the caring, not just the person receiving care. For more than 40 years, the Family Caregiver Alliance has served people caring for adults with conditions like Parkinson's, stroke, Alzheimer's, and other dementias. You'll find help with care planning, hands-on care skills, finding respite, looking after your own health, and consultations on legal and financial questions. Their free CareNav tool walks you through your situation and points you to services matched to it.",
    tags: [
      "Care planning",
      "Direct care skills",
      "Respite",
      "Caregiver wellness",
      "Legal & financial consultations",
      "CareNav tool",
    ],
    linkLabel: "caregiver.org",
    linkHref: "https://www.caregiver.org",
    linkNote: "Start with CareNav for guidance matched to your situation.",
  },
  {
    num: "2",
    title: "Eldercare Locator",
    whatFor: "The free national starting point.",
    detail:
      "One call or one ZIP code search connects you to local help you can trust. Run by the U.S. Administration for Community Living, the Eldercare Locator links you to services in your loved one's own community — the everyday, practical things that make caregiving possible. If you're not sure where to begin, begin here.",
    tags: ["Meals", "Home care", "Transportation", "Caregiver training", "Respite care"],
    linkLabel: "eldercare.acl.gov",
    linkHref: "https://eldercare.acl.gov",
    linkNote: "1-800-677-1116 · Mon–Fri, 8 AM – 9 PM ET",
  },
  {
    num: "3",
    title: "Area Agencies on Aging",
    whatFor: "Your local office for aging help.",
    detail:
      "Nearly every county or region in the country has one — about 622 nationwide. Area Agencies on Aging coordinate services close to home, so support comes from people who know your community. They are often the front door to meal programs, rides, in-home help, caregiver support and respite, and honest guidance on benefits and insurance. The easiest way to find yours is through the Eldercare Locator — use the ZIP code of the person receiving care.",
    tags: [
      "Meals",
      "Transportation",
      "In-home services",
      "Caregiver support",
      "Respite",
      "Benefits & insurance guidance",
    ],
    linkLabel: "Find yours at eldercare.acl.gov",
    linkHref: "https://eldercare.acl.gov",
    linkNote: "Search by the ZIP code of the person receiving care.",
  },
  {
    num: "4",
    title: "Medicaid Home & Community-Based Services (HCBS)",
    whatFor: "Help paying for care at home.",
    detail:
      "For an eligible loved one, Medicaid may help them receive care at home or in the community instead of a nursing facility. Every state runs its own Home and Community-Based Services through Medicaid waivers and state-plan options (you may see them listed as 1915(c), 1915(i), or 1915(k)). Depending on the state, that can include home health aides, personal care, respite for you, and case management. Rules, eligibility, and waitlists vary a great deal by state — your local Area Agency on Aging or your state Medicaid office can tell you what applies to your family and how to apply.",
    tags: ["Home health aides", "Personal care", "Respite", "Case management"],
    linkLabel: "Start with your Area Agency on Aging",
    linkHref: "https://eldercare.acl.gov",
    linkNote: "Or contact your state Medicaid office and ask about HCBS waivers.",
  },
];

const steps = [
  {
    title: "Call the Eldercare Locator",
    body: "Call 1-800-677-1116 with your loved one's ZIP code handy, and write down the local offices they give you.",
  },
  {
    title: "Call your Area Agency on Aging",
    body: "Simply say, “I'm caring for a family member and I need to know what's available.” Ask about respite — a break is not a luxury; it's how you keep going.",
  },
  {
    title: "Visit caregiver.org and try CareNav",
    body: "Let it ask the questions, and take notes on the services it suggests for your situation.",
  },
  {
    title: "Ask about Medicaid HCBS",
    body: "While you have the Area Agency on the line, ask whether your loved one might qualify for home-based services, and what the waitlist looks like in your state.",
  },
];

export default function ResourcesPage() {
  return (
    <div className="bg-cream min-h-screen">
      <div className="bg-gradient-to-br from-teal to-teal-dark py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-terracotta-light text-sm font-lato font-semibold uppercase tracking-widest block mb-4">
            Aging With Honor
          </span>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Plan Today. Honor Tomorrow.
          </h1>
          <p className="text-white/80 font-lato text-lg max-w-2xl mx-auto mb-4">
            If you are caring for a parent, a spouse, or someone you love, you are doing
            holy, hard work — often on very little sleep. You don&apos;t have to figure it
            all out alone, and you don&apos;t have to figure it out all at once.
          </p>
          <p className="text-white font-lato text-lg max-w-2xl mx-auto">
            Start with these four trusted national resources. Each one is free to contact,
            each one exists for families exactly like yours, and together they can be
            reached in a single sitting.
          </p>
        </div>
      </div>

      <div className="py-16 px-4">
        <div className="max-w-3xl mx-auto bg-teal-dark text-white rounded-2xl p-8 sm:p-10 mb-14">
          <h2 className="font-playfair text-2xl font-bold mb-3">Only have ten minutes? Make one call.</h2>
          <p className="font-lato text-white/80 leading-relaxed mb-5">
            The Eldercare Locator is the free national starting point — tell them your
            loved one&apos;s ZIP code, and they will connect you to trusted help close to home.
          </p>
          <p className="font-lato">
            <a href="tel:+18006771116" className="font-playfair text-3xl font-bold text-white underline decoration-terracotta-light underline-offset-4">
              1-800-677-1116
            </a>
            <span className="block text-white/70 mt-2">Mon–Fri, 8 AM – 9 PM ET · eldercare.acl.gov</span>
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-14">
          <h2 className="font-playfair text-3xl font-bold text-charcoal mb-2">Four places to turn</h2>
          <p className="font-lato text-charcoal/70 leading-relaxed mb-8">
            No hype and no sales pitch — just the organizations caregivers across the
            country lean on every day, and what each one is actually for.
          </p>
          <div className="grid gap-6">
            {resources.map((r) => (
              <article key={r.title} className="bg-white rounded-2xl border border-cream-dark p-8 sm:p-10">
                <p className="font-playfair italic text-terracotta font-semibold mb-2">{r.num}</p>
                <h3 className="font-playfair text-2xl font-bold text-charcoal mb-2">{r.title}</h3>
                <p className="font-lato text-lg text-charcoal mb-3">
                  <strong className="text-teal">{r.whatFor}</strong>
                </p>
                <p className="font-lato text-charcoal/70 leading-relaxed mb-5">{r.detail}</p>
                <ul className="flex flex-wrap gap-2 mb-5">
                  {r.tags.map((tag) => (
                    <li key={tag} className="bg-teal/10 text-charcoal text-sm font-lato font-semibold px-3 py-1.5 rounded-full">
                      {tag}
                    </li>
                  ))}
                </ul>
                <p className="font-lato border-t border-cream-dark pt-4">
                  <a href={r.linkHref} target="_blank" rel="noopener noreferrer" className="font-bold text-teal underline decoration-terracotta underline-offset-4">
                    {r.linkLabel}
                  </a>
                  <span className="text-charcoal/60 text-sm block mt-1">{r.linkNote}</span>
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-cream-dark p-8 sm:p-10 mb-14">
          <h2 className="font-playfair text-2xl font-bold text-charcoal mb-2">One sitting, four small steps</h2>
          <p className="font-lato text-charcoal/70 leading-relaxed mb-6">
            You don&apos;t need a whole plan today. You just need a next step — here is a
            gentle order to take them in.
          </p>
          <ol className="space-y-5">
            {steps.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-teal text-white font-playfair font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <div>
                  <p className="font-lato font-bold text-charcoal">{step.title}</p>
                  <p className="font-lato text-charcoal/70 leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-14">
          <blockquote className="font-playfair italic text-2xl leading-relaxed text-charcoal mb-3">
            “Let us not become weary in doing good, for at the proper time we will reap a
            harvest if we do not give up.”
          </blockquote>
          <p className="text-terracotta text-sm font-lato font-bold tracking-widest uppercase mb-5">Galatians 6:9</p>
          <p className="font-lato text-charcoal/70 leading-relaxed max-w-2xl mx-auto">
            Caring for someone you love is love with its sleeves rolled up. Some days will
            feel small and unseen — but they are seen, and they matter more than you know.
            Take the next step, then rest. Tomorrow&apos;s step will be there tomorrow.
          </p>
        </div>

        <div className="max-w-3xl mx-auto border border-terracotta bg-terracotta/10 rounded-2xl p-8">
          <h2 className="font-playfair text-xl font-bold text-charcoal mb-2">A note about medical questions</h2>
          <p className="font-lato text-charcoal leading-relaxed">
            This page offers general information and encouragement for caregivers — it is
            not medical advice, and it can&apos;t speak to any one person&apos;s health. For
            medical questions about your loved one, talk with their doctor. And before
            starting anything new for your own health — a supplement, an exercise routine,
            a new medication — please consult your doctor first.
          </p>
        </div>

        <p className="max-w-3xl mx-auto text-center font-lato text-sm text-charcoal/60 mt-10">
          Resources listed: Family Caregiver Alliance (caregiver.org) · Eldercare Locator
          (eldercare.acl.gov · 1-800-677-1116) · Area Agencies on Aging · Medicaid Home
          and Community-Based Services. Availability and eligibility vary by location —
          your local Area Agency on Aging can confirm what applies where you live.
        </p>
      </div>
    </div>
  );
}
