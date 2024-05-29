"use client";
import CartItem from "@/components/product/cart/product-item";
import { CartContext } from "@/context/cart-context";
import { IProduct } from "@/types/global";
import { FC, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const CartPage: FC = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <motion.ul variants={variants} className="flex flex-col">
      {cartItems.length === 0 && <h1>Cart is empty</h1>}
      {cartItems.map((item: IProduct) => (
        <CartItem key={item.id} {...item} />
      ))}
    </motion.ul>
  );
};

export default CartPage;
