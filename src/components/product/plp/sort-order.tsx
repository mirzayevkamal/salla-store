import { SortOptions } from "@/types/global";
import { useTranslations } from "next-intl";
import { FC } from "react";

const SortOrder: FC<{ handleSort: (value: SortOptions) => void }> = ({
  handleSort,
}) => {
  const translate = useTranslations();
  return (
    <select
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
        handleSort(e.target.value as SortOptions);
      }}
      className="bg-white border text-md rounded-md focus:ring-secondary-50 focus:border-secondary-50 block w-full px-2 py-1"
    >
      <option disabled>{translate("selectOrder")}</option>
      <option value="asc">{translate("ascending")}</option>
      <option value="desc">{translate("descending")}</option>
      <option value="cheapest">{translate("cheapest")}</option>
      <option value="expensive">{translate("expensive")}</option>
    </select>
  );
};

export default SortOrder;
