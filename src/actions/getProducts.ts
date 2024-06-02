"use server";

import { IProduct } from "@/types/global";

export const getProducts = async (limit?: number, sort?: string) => {
  try {
    const sortQuery = `&sort=${sort || "asc"}`;
    const limitQuery = `?limit=${limit || 5}`;

    const res = await fetch(
      `https://fakestoreapi.com/products${limitQuery}${sortQuery}`,
      {
        method: "GET",
      }
    );
    const data = (await res.json()) as IProduct[];
    return data;
  } catch (err) {
    console.log("err", err);
    throw new Error("No Products Found");
  }
};
