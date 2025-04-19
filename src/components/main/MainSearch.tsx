import { fetchComplexesSearch } from "@/api/complexApi";
import styles from "@styles/main/MainTopSection.module.scss";
import { useState } from "react";
import Input from "../common/Input";

const MainSearch = () => {
  const [keyword, setKeyword] = useState("");
  const [sport, setSport] = useState("tennis");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const params = {
        search: keyword,
      };
      const results = await fetchComplexesSearch(params);
      console.log("search results", results);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <form className={styles.searchBar} onSubmit={handleSearch}>
      <Input
        type="text"
        placeholder="Address, club name, city..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <select value={sport} onChange={(e) => setSport(e.target.value)}>
        <option value="tennis">Tennis</option>
        <option value="padel">Padel</option>
      </select>
      <Input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <Input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default MainSearch;
