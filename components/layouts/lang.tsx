"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslations } from "next-intl";
import ReactCountryFlag from "react-country-flag";
import { ChevronDown } from "lucide-react";
import { setLanguage } from "@/app/actions";
import { useRouter } from "next/navigation";

export function ChangeLanguage({ locale }: { locale: string }) {
  const t = useTranslations("i18n");
  const router = useRouter();
  const countryCode = locale === "zh" ? "CN" : locale === "en" ? "US" : "JP";
  const localeName =
    locale === "zh" ? "简体中文" : locale === "en" ? "English" : "日本語";

  const handleLanguageChange = async (newLocale: string) => {
    await setLanguage(newLocale);
    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 w-36">
          <ReactCountryFlag
            countryCode={countryCode}
            svg
            alt={`${localeName} language flag`}
          />
          {localeName}
          <ChevronDown className="w-4 h-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{t("selectLanguage")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild onClick={() => handleLanguageChange("ja")}>
          <div className="flex items-center gap-2">
            <ReactCountryFlag countryCode="JP" svg alt="日本国旗" />
            <span>日本語</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange("zh")}>
          <div className="flex items-center gap-2">
            <ReactCountryFlag countryCode="CN" svg alt="中国国旗" />
            <span>简体中文</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange("en")}>
          <div className="flex items-center gap-2">
            <ReactCountryFlag
              countryCode="US"
              svg
              alt="English language flag"
            />
            <span>English</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
