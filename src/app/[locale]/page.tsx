import ProductList from "@/components/product/plp/product-list";
import Slider from "@/components/slider";

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
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
