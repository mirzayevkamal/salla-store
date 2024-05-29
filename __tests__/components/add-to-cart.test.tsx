import AddToCart from "@/components/product/add-to-cart";
import { IProduct } from "@/types/global";
import { render, screen } from "@testing-library/react";
import { usePathname } from "next/navigation";

jest.mock("next-auth/react");

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
  usePathname: () => "/",
}));
describe("Add to cart component", () => {
  it("should render Add to cart component", () => {
    const product: IProduct = {
      id: 1,
      title: "test product",
      description: "test description",
      price: 10,
      category: "test category",
      image: "test image",
      rating: {
        rate: 1,
        count: 1,
      },
      quantity: 1,
    };
    render(<AddToCart product={product} quantity={1} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
