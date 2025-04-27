"use client";
import { fetchComplexesSearch, Complex } from "@/api/complexApi";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import CourtCard from "../common/CourtCard";
import styles from "@styles/searchResult/searchResult.module.scss";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Map"), { ssr: false });

const SearchResult = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("keyword") || "";
  // const sport = searchParams.get("sport") || "";
  // const date = searchParams.get("date") || "";
  // const time = searchParams.get("time") || "";

  const [results, setResults] = useState<Complex[]>([]);
  const [showMap, setShowMap] = useState(true);

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

      <div>
        <label>
          Show Map
          <input
            type="checkbox"
            checked={showMap}
            onChange={() => setShowMap(!showMap)}
          />
        </label>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.gridWrapper}>
          {results.map((court) => (
            <CourtCard key={court._id} court={court} />
          ))}
        </div>

        {showMap && (
          <div className={styles.mapWrapper}>
            <Map courts={results} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResult;
