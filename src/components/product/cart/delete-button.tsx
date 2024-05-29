import { CartContext } from "@/context/cart-context";
import { replicateAsync } from "@/lib/async-replicate";
import { FC, useContext, useState } from "react";

const DeleteButton: FC<{ id: number }> = ({ id }) => {
  const [loading, isLoading] = useState(false);
  const { removeFromCart } = useContext(CartContext);
  const handleDelete = async () => {
    isLoading(true);
    await replicateAsync(() => {
      removeFromCart(id);
    }, 500);
    isLoading(false);
  };
  return (
    <button
      disabled={loading}
      onClick={handleDelete}
      type="button"
      className="w-[28px] h-[28px] shrink-0 flex items-center justify-center text-xs border border-red-500 text-red-500 rounded-full p-1"
    >
      {loading ? (
        <i className="sicon-trash animate-pulse"></i>
      ) : (
        <i className="sicon-trash"></i>
      )}
    </button>
  );
};

export default DeleteButton;
