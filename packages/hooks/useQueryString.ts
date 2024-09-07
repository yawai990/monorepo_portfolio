import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

export const useQueryString = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = React.useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const updateQueryString = (key: string, value: string) => {
    router.push(pathname + "?" + createQueryString(key, value));
  };

  const removeQuery = () => router.replace(pathname);

  return {
    curpage: searchParams.get("page"),
    searchParams,
    updateQueryString,
    pathname,
    removeQuery,
  };
};

export const useGetQuery = (key: string) => {
  const { searchParams } = useQueryString();

  return searchParams.get(key);
};
