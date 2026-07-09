"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"

import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav({ navItems }: { navItems: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2.5 text-base font-semibold text-foreground hover:bg-accent"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/tips"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-md px-3 py-2.5 text-base font-semibold text-[var(--color-crimson)] hover:bg-accent"
          >
            Submit a Tip
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
