import { useLocale } from "next-intl";
import { Link, usePathname } from "@/navigation";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div>
      <Link
        locale={locale === "en" ? "ar" : "en"}
        href={pathname}
        className="block w-full"
      >
        {locale === "en" ? "عربي" : "English"}
      </Link>
    </div>
  );
}
