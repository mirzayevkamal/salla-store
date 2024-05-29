"use server";

import { IProduct } from "@/types/global";

export const getProducts = async (limit?: number, sort?: string) => {
  try {
    const sortQuery = sort?.length ? `&sort=${sort}` : "";
    const limitQuery = limit ? `?limit=${limit}` : "";

    console.log("sortQuery", typeof sort);
    console.log("limitQuery", typeof limit);

    const res = await fetch(
      `https://fakestoreapi.com/products${limitQuery}${sortQuery}`,
      {
        cache: "no-store",
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
