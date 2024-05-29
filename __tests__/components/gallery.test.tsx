import Gallery from "@/components/product/pdp/gallery";
import { render, screen } from "@testing-library/react";

describe("Gallery component", () => {
  it("should render Gallery component", () => {
    const src = "https://cdn.salla.network/images/logo/logo-square.png";
    const alt = "Salla logo";
    render(<Gallery src={src} alt={alt} />);
    const image = screen.getByAltText(alt);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("alt", alt);
  });
});
