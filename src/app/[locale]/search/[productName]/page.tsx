import { getProducts } from "@/actions/getProducts";
import ProductList from "@/components/product/plp/product-list";

export const metadata = {
  title: "Search",
  description: "Search for products in the store.",
};

export default async function SearchPage({
  params,
}: {
  params?: { productName: string };
}) {
  const { productName: searchValue } = params as {
    [key: string]: string;
  };
  const handleReplicateSearch = async () => {
    const products = await getProducts();

    if (searchValue) {
      return products.filter((product) =>
        product.title.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
    return [];
  };

  const products = await handleReplicateSearch();
  const resultsText = products.length > 1 ? "results" : "result";

  return (
    <main className="w-full main flex-auto">
      <div className="container">
        <div className="p-2 sm:p-4 bg-white rounded-lg shadow-4xl">
          {searchValue ? (
            <p className="mb-4">
              {products.length === 0
                ? "There are no products that match "
                : `Showing ${products.length} ${resultsText} for `}
              <span className="font-bold">&quot;{searchValue}&quot;</span>
            </p>
          ) : null}
          <div className="p-2 sm:p-4 bg-white rounded-lg shadow-4xl">
            <ProductList products={products} />
          </div>
        </div>
      </div>
    </main>
  );
}
