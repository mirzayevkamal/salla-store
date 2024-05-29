import ProductList from "@/components/product/plp/product-list";
import Slider from "@/components/slider";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main className="w-full main flex-auto">
      <div className="container">
        <div className="p-2 sm:p-4 bg-white rounded-lg shadow-4xl">
          <Slider />
          <ProductList />
        </div>
      </div>
    </main>
  );
}
