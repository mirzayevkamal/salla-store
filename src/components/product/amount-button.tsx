"use client";
import { FC, useState } from "react";

const AmountButton: FC<{ handleSetQuantity: (value: number) => void }> = ({
  handleSetQuantity,
}) => {
  const [amount, setAmount] = useState(1);
  const increase = () => {
    setAmount((prev) => {
      handleSetQuantity(prev + 1);
      return prev + 1;
    });
  };
  const decrease = () => {
    if (amount <= 1) return;
    setAmount((prev) => {
      handleSetQuantity(prev - 1);
      return prev - 1;
    });
  };
  return (
    <div className="flex shrink-0 items-center justify-center p-2 border border-1 border-gray-200 rounded-lg">
      <button
        onClick={increase}
        className="shrink-0 px-2 text-md text-gray-500"
      >
        +
      </button>
      <span className="w-[50px] flex-1 text-center appearance-none bg-transparent">
        {amount}
      </span>
      <button
        onClick={decrease}
        className="shrink-0 px-2 text-md text-gray-500"
      >
        -
      </button>
    </div>
  );
};

export default AmountButton;
