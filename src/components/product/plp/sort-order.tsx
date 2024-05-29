import { SortOptions } from "@/types/global";
import { FC } from "react";

const SortOrder: FC<{ handleSort: (value: SortOptions) => void }> = ({
  handleSort,
}) => {
  return (
    <select
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
        handleSort(e.target.value as SortOptions);
      }}
      className="bg-white border text-md rounded-md focus:ring-secondary-50 focus:border-secondary-50 block w-full px-2 py-1"
    >
      <option disabled>Select order</option>
      <option value="asc">Ascending</option>
      <option value="desc">Descending</option>
      <option value="cheapest">Cheapest</option>
      <option value="expensive">Expensive</option>
    </select>
  );
};

export default SortOrder;
