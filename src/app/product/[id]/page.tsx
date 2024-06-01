import ProductItemPDP from "@/components/product/pdp/product-item";
import ProductItem from "@/components/product/pdp/product-item";
import { getProductData } from "@/lib/get-products";
import { IProduct } from "@/types/global";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const product = await getProductData(params.id);

  if (!product) return notFound();

  return {
    title: product.title,
    description: product.description || product.description,
    keywords: product.title,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: product
      ? {
          images: [
            {
              url: product.image,
            },
          ],
        }
      : null,
  };
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product: IProduct | null = await getProductData(params.id);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product?.title,
    description: product?.description,
    image: product?.image,
  };

  if (!product) {
    return null;
  }
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd),
        }}
      />
      <div className="mx-auto flex mb-8 md:w-[85%] flex-col items-center justify-center">
        <ProductItemPDP
          title={product.title}
          image={product.image}
          description={product.description}
          price={product.price}
          id={product.id}
          category={product.category}
          rating={product.rating}
          quantity={product.quantity}
        />
      </div>
    </>
  );
}
