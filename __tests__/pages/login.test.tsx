import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import LoginPage from "@/app/[locale]/auth/signin/page";
import { NextIntlClientProvider, useTranslations } from "next-intl";

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

describe("Login page", () => {
  it("renders a login page with login form", () => {
    const messages = require(`../../messages/en.json`);

    render(
      <NextIntlClientProvider messages={messages} locale="en">
        <LoginPage />
      </NextIntlClientProvider>
    );

    const heading = screen.getByRole("heading", { level: 2 });
    const submitButton = screen.getByRole("button");

    expect(heading).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
