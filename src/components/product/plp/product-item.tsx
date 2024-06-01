import { IProduct } from "@/types/global";
import Image from "next/image";
import { FC, Suspense } from "react";
import Price from "../price";
import { nameShorten } from "@/lib/name-shorten";
import AddToCart from "../add-to-cart";
import Link from "next/link";
import ZoomInOut from "@/components/zoom-in-out";
import { Rating, ThinStar } from "@smastrom/react-rating";

const ProductItemPLP: FC<IProduct> = ({
  title,
  price,
  description,
  category,
  image,
  id,
  rating,
  quantity,
}) => {
  return (
    <ZoomInOut>
      <div className="rounded-lg border-2 border-gray-50 flex flex-col items-start justify-start md:p-3 p-2 relative">
        <Link href={`/product/${id}`} className="block w-full relative mb-4">
          <Suspense
            fallback={
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-50"></div>
            }
          >
            <Image
              className="w-full aspect-4/3 object-contain rounded-lg"
              src={image}
              alt={title}
              width={200}
              height={200}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            />
          </Suspense>
        </Link>
        <div className="w-full flex flex-col flex-1 items-start justify-start gap-4">
          <div className="flex items-center justify-center flex-col w-full gap-1">
            <Link
              href={`/product/${id}`}
              className="block w-full h-[45px] text-primary text-center flex justify-center"
            >
              <h2 className="text-sm">{nameShorten(title, 30)}</h2>
            </Link>
            <small className="hidden md-block text-xs w-full text-center">
              {category}
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
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center w-full my-4 gap-0 sm:gap-2">
          <Price
            className="font-medium text-md"
            currencyCode="SAR"
            amount={price.toString()}
          />
        </div>
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
          quantity={1}
          className="w-full bg-primary text-white p-2 text-md rounded-md"
        />
      </div>
    </ZoomInOut>
  );
};

export default ProductItemPLP;
