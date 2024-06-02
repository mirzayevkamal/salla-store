import { getProducts } from "@/actions/getProducts";
import { MetadataRoute } from "next";

type Route = {
  url: string;
  lastModified: string;
};

const baseUrl = process.env.NEXT_PUBLIC_WEBSITE_URL
  ? `https://${process.env.NEXT_PUBLIC_WEBSITE_URL}`
  : "http://localhost:3000";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const productsPromise = getProducts(100).then((products) =>
    products.map((product) => ({
      url: `${baseUrl}/product/${product.id}`,
      lastModified: new Date().toISOString(),
    }))
  );

  let fetchedRoutes: Route[] = [];

  try {
    fetchedRoutes = await productsPromise;
  } catch (error) {
    throw JSON.stringify(error, null, 2);
  }

  return fetchedRoutes;
}
