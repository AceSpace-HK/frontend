"use client";
import { fetchComplexesSearch, Complex } from "@/api/complexApi";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SearchResult = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("keyword") || "";
  // const sport = searchParams.get("sport") || "";
  // const date = searchParams.get("date") || "";
  // const time = searchParams.get("time") || "";

  const [results, setResults] = useState<Complex[]>([]);

  useEffect(() => {
    const fetchResults = async () => {
      const params = { search: search };
      const data = await fetchComplexesSearch(params);
      console.log(data, "data");
      setResults(data);
    };

    fetchResults();
  }, [search]);

  return (
    <div>
      <h1>Search Results</h1>
      {/* 여기에 결과 렌더링 */}
    </div>
  );
};

export default SearchResult;
