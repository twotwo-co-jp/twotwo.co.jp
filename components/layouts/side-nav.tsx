"use client";

import Link from "next/link";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navigationItemStyle = "block select-none rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('navigation');
  const pathname = usePathname();

  const links = [
    { href: "/about", label: t('about') },
    { href: "/services", label: t('services') },
    { href: "/contact", label: t('contact') }
  ];

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          className="md:hidden"
          aria-label={t('menu')}
          aria-expanded={isOpen}
          aria-controls="side-navigation"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </SheetTrigger>
      <SheetContent 
        side="left" 
        id="side-navigation" 
        aria-label={t('menu')}
      >
        <SheetHeader>
          <SheetTitle>{t('menu')}</SheetTitle>
        </SheetHeader>
        <nav className="grid gap-4 pt-8">
          {links.map(({ href, label }) => (
            <Link 
              key={href} 
              href={href} 
              onClick={() => setIsOpen(false)}
              className={cn(
                navigationItemStyle,
                pathname === href && "text-primary underline decoration-primary decoration-2 underline-offset-4 hover:bg-transparent focus:bg-transparent"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
