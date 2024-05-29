import ProfilePage from "@/app/profile/page";
import { render, screen } from "@testing-library/react";

describe("Profile page", () => {
  it("should render profile page", () => {
    render(<ProfilePage />);

    const headline = screen.getByRole("heading", { level: 1 });
    const logout = screen.getByRole("button");
    expect(headline).toBeInTheDocument();
    expect(logout).toBeInTheDocument();
    expect(headline).toHaveTextContent("Profile");
    expect(logout).toHaveTextContent("Log out");
  });
});
