import ProductItemPDP from "@/components/product/pdp/product-item";
import { getProductData } from "@/lib/get-products";
import { IProduct } from "@/types/global";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const product = await getProductData(params.id);
  if (!product) return {};

  return {
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_WEBSITE_URL || "http://localhost:3000",
      process.env.NEXT_PUBLIC_WEBSITE_URL || "http://localhost:3000"
    ),
    title: product.title || "",
    description: product.description || product.description || "",
    keywords:
      "online store, cheapest online store, buy cheap stuff, cheap stuff",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    alternates: {
      canonical: `/product/${product.id}`,
      languages: {
        "en-US": `/en/product/${product.id}`,
        "ar-SA": `/ar/product/${product.id}`,
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
  if (!product) return notFound();

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product?.title,
    description: product?.description,
    image: product?.image,
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
}
