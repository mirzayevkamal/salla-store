import { IProduct } from "@/types/global";

export const getProductList = async (): Promise<IProduct[]> => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
};

export const getProductData = async (id: string): Promise<IProduct | null> => {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();

    return {
      ...data,
      quantity: 1,
    };
  } catch (err) {
    console.log("err", err);
    return null;
  }
};
