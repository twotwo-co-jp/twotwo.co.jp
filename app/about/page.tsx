import { Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "企業情報",
  description: "株式会社TWOTWOのホームページです。",
};
export default function About() {
  const t = useTranslations("about");

  return (
    <article className="max-w-2xl mx-auto">
      <section className="space-y-8">
        <h1 className="text-3xl font-semibold text-center">
          {t("companyInfo.title")}
        </h1>
        <div className="space-y-6">
          <div className="border-b pb-4">
            <h3 className="font-medium mb-2">{t("companyInfo.name.label")}</h3>
            <p className="text-muted-foreground">
              {t("companyInfo.name.value")}
            </p>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-medium mb-2">
              {t("companyInfo.founded.label")}
            </h3>
            <p className="text-muted-foreground">
              {t("companyInfo.founded.value")}
            </p>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-medium mb-2">
              {t("companyInfo.location.label")}
            </h3>
            <div className="text-muted-foreground space-y-1">
              <p>〒{t("companyInfo.location.value.postal")}</p>
              <p>{t("companyInfo.location.value.address")}</p>
            </div>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-medium mb-2">
              {t("companyInfo.business.label")}
            </h3>
            <p className="text-muted-foreground">
              {t("companyInfo.business.value")}
            </p>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-medium mb-2">
              {t("companyInfo.access.label")}
            </h3>
            <p className="text-muted-foreground">
              {t("companyInfo.access.value")}
            </p>
          </div>
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.8414793987704!2d139.76813317614133!3d35.73011692728636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d58bf71cf6d%3A0x87be0980e52211ae!2z5qCq5byP5Lya56S-VFdPVFdP!5e0!3m2!1sja!2sjp!4v1734423401010!5m2!1sja!2sjp"
          className="w-full h-80"
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
          </iframe> */}
        </div>
      </section>
    </article>
  );
}
