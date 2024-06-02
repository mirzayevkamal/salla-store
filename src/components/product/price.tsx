import { useLocale } from "next-intl";

const Price = ({
  amount,
  className,
  currencyCode = "USD",
}: {
  amount: string;
  className?: string;
  currencyCode: string;
  currencyCodeClassName?: string;
} & React.ComponentProps<"p">) => {
  const locale = useLocale();
  return (
    <p suppressHydrationWarning={true} className={className}>
      {`${new Intl.NumberFormat(locale === "en" ? "en-US" : "ar-SA", {
        style: "currency",
        currency: currencyCode,
        currencyDisplay: "narrowSymbol",
      }).format(parseFloat(amount))}`}
    </p>
  );
};

export default Price;
