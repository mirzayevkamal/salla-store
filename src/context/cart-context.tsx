"use client";
import { IProduct } from "@/types/global";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import Notiflix from "notiflix";
import { FC, createContext, useEffect, useState } from "react";

interface ICartContext {
  cartItems: IProduct[];
  cartItemsCount: number;
  addToCart: (product: IProduct, quantity: number) => void;
  removeFromCart: (id: number) => void;
  editCartItem: (id: number, quantity: number) => void;
}

const defaultValues: ICartContext = {
  cartItems: [],
  addToCart: (product: IProduct, quantity: number) => {},
  removeFromCart: (id: number) => {},
  cartItemsCount: 0,
  editCartItem: (id: number, quantity: number) => {},
};

export const CartContext = createContext(defaultValues);

export const CartContextProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const translate = useTranslations();
  const session = useSession();
  const addToCart = (product: IProduct, quantity: number) => {
    //Check if item is already in cart
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const foundItem = cart.find((item: IProduct) => item.id === product.id);
    //Add item to cart
    if (foundItem) {
      foundItem.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartItems(cart);
    //Show notification
    Notiflix.Notify.success(translate("addToCartSuccess"), {
      position: "right-bottom",
      timeout: 800,
    });
  };

  const removeFromCart = (id: number) => {
    //Check if item is already in cart
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const newCart = cart.filter((item: IProduct) => item.id !== id);
    //Remove item from cart
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCartItemsCount(newCart.length);
    setCartItems(newCart);

    //Show notification
    Notiflix.Notify.success("Item removed from cart", {
      position: "right-bottom",
      timeout: 800,
    });
  };

  const editCartItem = (id: number, quantity: number) => {
    //Check if item is already in cart
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const foundItem = cart.find((item: IProduct) => item.id === id);
    //Add item to cart
    if (foundItem) {
      foundItem.quantity = quantity;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartItems(cart);
  };

  const calculateCartItemsCount = () => {
    //Calculate cart items count
    const totalCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);
    setCartItemsCount(totalCount);
  };

  useEffect(() => {
    calculateCartItemsCount();
  }, [cartItems]);

  useEffect(() => {
    //Check if user is authenticated
    //and Get cart items from localstorage
    if (session.status !== "authenticated") return;
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(cartItems);
    setCartItemsCount(cartItems.length);
  }, [session]);

  return (
    <CartContext.Provider
      value={{
        cartItems: cartItems,
        cartItemsCount: cartItemsCount,
        addToCart,
        removeFromCart,
        editCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
