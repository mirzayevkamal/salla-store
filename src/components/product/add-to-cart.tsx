"use client";
import { IProduct } from "@/types/global";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { FC, useContext, useState } from "react";
import Notiflix from "notiflix";
import { CartContext } from "@/context/cart-context";
import { replicateAsync } from "@/lib/async-replicate";

const AddToCart: FC<{
  className?: string;
  product: IProduct;
  quantity: number;
}> = ({ className, product, quantity }) => {
  const session = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const { addToCart } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = async () => {
    //Check if user is logged in
    if (session.status === "unauthenticated") {
      Notiflix.Notify.info("Please login to add items to cart");
      setTimeout(() => {
        router.push(`/auth/signin?redirect=${pathname}`);
      }, 500);
      return;
    } else {
      const cartItem = {
        ...product,
        quantity,
      };
      setIsLoading(true);
      await replicateAsync(() => {
        addToCart(cartItem, quantity);
      }, 500);
      setIsLoading(false);
    }
  };
  return (
    <button
      disabled={isLoading}
      onClick={handleAddToCart}
      className={clsx(
        "btn-primary w-full text-lg uppercase rounded-[10px] bg-[#004955]",
        className
      )}
    >
      <div>
        {isLoading ? (
          <div className="flex gap-2 items-center justify-center">
            <i className="sicon-spinner animate-spin mb-[2px]"></i>
            <span>Adding...</span>
          </div>
        ) : (
          "Add to cart"
        )}
      </div>
    </button>
  );
};

export default AddToCart;
