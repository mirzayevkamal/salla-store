import { useDebounce } from "@/lib/hooks/useDebounce";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";

const Search: FC = () => {
  const [query, setQuery] = useState("");
  const debouncedValue = useDebounce(query, 500);
  const router = useRouter();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (debouncedValue) {
      router.push(`/search/${debouncedValue}`);
    }
  }, [debouncedValue]);

  return (
    <div className="flex flex-col gap-1 flex-1">
      <label htmlFor="product_query" className="hidden">
        Search
      </label>
      <input
        onChange={handleSearch}
        value={query}
        type="text"
        className="w-full p-2 bg-white appearance-none rounded-md border text-md"
        placeholder="Search for a product..."
      />
    </div>
  );
};

export default Search;
