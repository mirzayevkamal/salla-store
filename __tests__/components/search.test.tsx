import Search from "@/components/product/plp/search";
import { render, screen } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";

jest.mock("next/navigation", () => ({ useRouter: jest.fn() }));

describe("Search input", () => {
  it("should render search input", () => {
    const messages = require(`../../messages/en.json`);
    render(
      <NextIntlClientProvider messages={messages} locale="en">
        <Search />
      </NextIntlClientProvider>
    );
    const input = screen.getByTestId("search");
    const label = screen.getByTestId("search-label");
    expect(input).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });
});
