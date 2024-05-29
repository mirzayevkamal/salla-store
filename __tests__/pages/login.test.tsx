import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import LoginPage from "@/app/auth/signin/page";

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

describe("Login page", () => {
  it("renders a login page with login form", () => {
    render(<LoginPage />);

    const heading = screen.getByRole("heading", { level: 2 });
    const submitButton = screen.getByRole("button");
    const usernameInput = screen.getByPlaceholderText("Username");
    const passwordInput = screen.getByPlaceholderText("Password");

    expect(heading).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveTextContent("Login");
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });
});
