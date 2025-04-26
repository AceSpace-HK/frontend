import { useState } from "react";
import styles from "@styles/main/MainTopSection.module.scss";
import Input from "../common/Input";
import { useRouter } from "next/navigation";

const MainSearch = () => {
  const [keyword, setKeyword] = useState("");
  const [sport, setSport] = useState("tennis");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams({
      keyword,
      sport,
      date,
      time,
    });

    router.push(`/search-result?${params.toString()}`);
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
