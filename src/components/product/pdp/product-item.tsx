"use client";
import { IProduct } from "@/types/global";
import { FC, useState } from "react";
import Gallery from "./gallery";
import Price from "../price";
import AddToCart from "../add-to-cart";
import AmountButton from "../amount-button";
import { Rating, ThinStar } from "@smastrom/react-rating";

const ProductItemPDP: FC<IProduct> = ({
  title,
  price,
  description,
  category,
  image,
  rating,
  id,
}) => {
  const [quantity, setQuantity] = useState(1);
  const handleSetQuantity = (value: number) => setQuantity(value);
  return (
    <main className="w-full main flex-auto">
      <div className="container">
        <div className="p-2 sm:p-4 bg-white rounded-lg shadow-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-4">
            <Gallery src={image} alt={title} />
            <div className="flex flex-col gap-4 col-span-2">
              <article className="text-sm text-darker-300 leading-[1.8] ">
                <div className="flx flex-col mb-6 gap-2">
                  <h1 className="text-xl md:text-3xl">{title}</h1>
                  <small className="text-xs text-gray-500">
                    <b>Category:</b> {category}
                  </small>
                  <Rating
                    style={{ maxWidth: 130 }}
                    value={rating.rate}
                    transition="zoom"
                    readOnly
                    itemStyles={{
                      itemShapes: ThinStar,
                      activeFillColor: "#ffb700",
                      inactiveFillColor: "#fbf1a9",
                    }}
                  />
                </div>
                <div className="flex flex-col sm:flex-row w-full my-4 gap-0 sm:gap-2">
                  <Price
                    className="font-medium text-md"
                    currencyCode="SAR"
                    amount={price.toString()}
                  />
                </div>
                <p>{description}</p>
              </article>
              <div className="flex items-center justify-center gap-4">
                <AmountButton
                  handleSetQuantity={(e: number) => handleSetQuantity(e)}
                />
                <AddToCart
                  product={{
                    title,
                    price,
                    description,
                    category,
                    image,
                    id,
                    rating,
                    quantity,
                  }}
                  quantity={quantity}
                  className="w-full h-[42px] bg-primary text-white flex-1 p-2 text-md rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductItemPDP;
