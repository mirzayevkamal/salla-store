import Search from "@/components/product/plp/search";
import { render, screen } from "@testing-library/react";

jest.mock("next/navigation", () => ({ useRouter: jest.fn() }));

describe("Search input", () => {
  it("should render search input", () => {
    render(<Search />);
    const input = screen.getByPlaceholderText("Search for a product...");
    const label = screen.getByText("Search");
    expect(input).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });
});
