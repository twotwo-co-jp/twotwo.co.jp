"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {useTranslations} from 'next-intl';
import { usePathname } from "next/navigation";

const navigationItemStyle = "block select-none rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"

export function Navigation() {
  const t = useTranslations('navigation');
  const pathname = usePathname();

  const links = [
    { href: "/about", label: t('about') },
    { href: "/services", label: t('services') },
    { href: "/contact", label: t('contact') }
  ];

  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {links.map(({ href, label }) => (
          <NavigationMenuItem key={href}>
            <Link href={href} legacyBehavior passHref>
              <NavigationMenuLink 
                className={cn(
                  navigationItemStyle,
                  pathname === href && "text-primary underline decoration-primary decoration-2 underline-offset-4 hover:bg-transparent focus:bg-transparent"
                )}
              >
                {label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
