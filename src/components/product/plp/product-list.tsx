"use client";

import React, { FC, useEffect, useState, useTransition } from "react";
import { IProduct, SortOptions } from "@/types/global";
import { useInView } from "react-intersection-observer";
import { getProducts } from "@/actions/getProducts";
import ProductItemPLP from "./product-item";
import SortOrder from "./sort-order";
import Search from "./search";
import { usePathname } from "next/navigation";
import LoadingLogo from "@/components/loading";
import { useTranslations } from "next-intl";

const ProductList: FC<{ products?: IProduct[] }> = ({ products }) => {
  const translate = useTranslations();
  const { ref, inView } = useInView();
  const [limit, setLimit] = useState(5);
  const [allProducts, setAllProducts] = useState<IProduct[]>([]);
  const pathName = usePathname();
  const [hasError, setHasError] = useState(false);
  const [isPending, startTransition] = useTransition();

  const loadMoreProducts = (sort?: SortOptions) => {
    startTransition(async () => {
      try {
        const res = await getProducts(limit, sort);
        setAllProducts(res);
      } catch (err) {
        setHasError(true);
        console.log(err);
      }
    });
  };

  const handleSort = (value: SortOptions) => {
    switch (value) {
      case "asc":
      case "desc":
        loadMoreProducts(value);
        break;
      case "cheapest":
        setAllProducts([...allProducts].sort((a, b) => a.price - b.price));
        break;
      case "expensive":
        setAllProducts([...allProducts].sort((a, b) => b.price - a.price));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const canLoadMore = allProducts.length < 20;
    if (inView && canLoadMore && !hasError) {
      loadMoreProducts();
      setLimit((prev) => prev + 5);
    }
  }, [inView, hasError]);

  return (
    <>
      <div className="flex items-center justify-between gap-4 mb-4">
        <Search />
        {pathName.includes("search") ? null : (
          <div className="flex flex-col gap-1 shrink-0 sm:min-w-[180px]">
            <SortOrder handleSort={handleSort} />
          </div>
        )}
      </div>
      {hasError && (
        <div className="mt-4 flex flex-col items-center">
          <span className="text-sm text-red-500 mt-2">
            {translate("productGetError")}
          </span>
        </div>
      )}
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2 sm:gap-4">
        {(products || allProducts).map((product) => (
          <ProductItemPLP
            id={product.id}
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
            image={product.image}
            rating={product.rating}
            quantity={product.quantity}
          />
        ))}
      </div>
      {isPending && (
        <div className="mt-4 flex flex-col items-center">
          <LoadingLogo width={50} height={50} />
          <span className="text-sm text-gray-500 mt-2">
            {translate("loading")}...
          </span>
        </div>
      )}
      <div className="w-full h-[4px] mt-[150px]" ref={ref}></div>
    </>
  );
};

export default ProductList;
