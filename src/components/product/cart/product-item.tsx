import { IProduct } from "@/types/global";
import Image from "next/image";
import { FC } from "react";
import Price from "../price";
import CartAmountButton from "./amount-button";
import DeleteButton from "./delete-button";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@/navigation";

const CartItem: FC<IProduct> = ({ title, price, image, id, quantity }) => {
  return (
    <AnimatePresence>
      <motion.li
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{
          transition: { duration: 0.2 },
          type: "tween",
          opacity: 0,
          scale: 0,
          x: 100,
          y: 100,
        }}
        transition={{ ease: "linear", duration: 0.2 }}
        whileHover={{ scale: 1.03 }}
        className="flex items-start ms:items-center flex-col sm:flex-row justify-between gap-4 w-full p-4 rounded-md transition-all hover:bg-grayer-100"
      >
        <Link
          href={`/product/${id}`}
          className="flex items-start justify-center gap-2 flex-1"
        >
          <Image
            width={100}
            height={100}
            className="rounded-md w-[35px] object-cover shrink-0 overflow-hidden"
            src={image}
            alt={title}
          />
          <div className="flex flex-col flex-1 gap-1 mx-3">
            <h4>{title}</h4>
            <div className="flex items-center justify-start gap-2">
              <b className="ltr">x {quantity}</b>
              <Price currencyCode="SAR" amount={price.toString()} />
            </div>
          </div>
        </Link>
        <div className="flex items-center justify-center gap-4">
          <CartAmountButton id={id} quantity={quantity} />
          <DeleteButton id={id} />
        </div>
      </motion.li>
    </AnimatePresence>
  );
};

export default CartItem;
