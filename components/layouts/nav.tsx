"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { navigationItemStyle } from "@/components/layouts/nav-styles";
import { NAV_LINKS } from "@/components/layouts/nav-config";

export function Navigation() {
  const t = useTranslations("navigation");
  const pathname = usePathname();

  const links = NAV_LINKS.map(({ href, key }) => ({ href, label: t(key) }));

  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {links.map(({ href, label }) => (
          <NavigationMenuItem key={href}>
            <NavigationMenuLink asChild>
              <Link
                href={href}
                className={cn(
                  navigationItemStyle,
                  pathname === href && "text-primary underline decoration-primary decoration-2 underline-offset-4 hover:bg-transparent focus:bg-transparent"
                )}
              >
                {label}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
