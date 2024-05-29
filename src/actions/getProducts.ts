"use server";

import { IProduct } from "@/types/global";

export const getProducts = async (limit?: number, sort?: string) => {
  try {
    const res = await fetch(
      `https://fakestoreapi.com/products?limit=${limit}&sort=${sort}`
    );
    const data = (await res.json()) as IProduct[];
    return data;
  } catch (err) {
    console.log("err", err);
    throw new Error("No Products Found");
  }
};
