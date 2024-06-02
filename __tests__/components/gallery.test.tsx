import Gallery from "@/components/product/pdp/gallery";
import { render, screen } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";

describe("Gallery component", () => {
  it("should render Gallery component", () => {
    const src = "https://cdn.salla.network/images/logo/logo-square.png";
    const alt = "Salla logo";
    const messages = require(`../../messages/en.json`);

    render(
      <NextIntlClientProvider messages={messages} locale="en">
        <Gallery src={src} alt={alt} />
      </NextIntlClientProvider>
    );
    const image = screen.getByAltText(alt);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("alt", alt);
  });
});
