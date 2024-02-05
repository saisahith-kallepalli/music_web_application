"use client";
import useDebounce from "@/hooks/useDebounce";
import { useRouter } from "next/navigation";
import queryString from "query-string";
import { useEffect, useState } from "react";
import Input from "./Input";

interface Props {}

const SearchInput = (props: Props) => {
  const router = useRouter();
  const [value, setValue] = useState("");
    const debounce = useDebounce<string>(value, 500);
    useEffect(() => {
      const query = {
        title: debounce,
      };
      const url = queryString.stringifyUrl({
        url: "/search",
        query: query,
      });
      router.push(url);
    }, [debounce, router]);
  return (
    <Input
      placeholder="What you Wanna listen to?"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default SearchInput;
