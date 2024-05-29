import { CartContext } from "@/context/cart-context";
import { replicateAsync } from "@/lib/async-replicate";
import { FC, useContext, useState } from "react";

const CartAmountButton: FC<{ id: number; quantity?: number }> = ({
  id,
  quantity = 1,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { editCartItem } = useContext(CartContext);

  const handleDecreaseQuantity = async () => {
    if (quantity <= 1) return;
    setIsLoading(true);
    await replicateAsync(() => {
      editCartItem(id, quantity - 1);
    });
    setIsLoading(false);
  };

  const handleIncreaseQuantity = async () => {
    setIsLoading(true);
    await replicateAsync(() => {
      editCartItem(id, quantity + 1);
    });
    setIsLoading(false);
  };

  return (
    <div className="flex shrink-0 items-center justify-center p-2 border border-1 border-gray-200 rounded-lg">
      <button
        disabled={isLoading}
        onClick={handleIncreaseQuantity}
        className="shrink-0 px-2 text-md text-gray-500"
      >
        +
      </button>
      {isLoading ? (
        <div className="w-[50px] flex items-center justify-center">
          <i className="sicon-spinner animate-spin"></i>
        </div>
      ) : (
        <span className="w-[50px] flex-1 text-center appearance-none bg-transparent">
          {quantity}
        </span>
      )}
      <button
        disabled={isLoading}
        onClick={handleDecreaseQuantity}
        className="shrink-0 px-2 text-md text-gray-500"
      >
        -
      </button>
    </div>
  );
};

export default CartAmountButton;
