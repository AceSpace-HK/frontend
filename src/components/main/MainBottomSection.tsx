"use client";

import { useEffect, useState } from "react";
import { fetchAllComplexes, Complex } from "@/api/complexApi";
import styles from "@styles/main/MainBottomSection.module.scss";
import { ChevronLeft, ChevronRight } from "react-feather";
import CourtCard from "../common/CourtCard";

const ITEMS_PER_PAGE = 4;

const MainBottomSection = () => {
  const [courts, setCourts] = useState<Complex[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(courts.length / ITEMS_PER_PAGE);
  const start = (page - 1) * ITEMS_PER_PAGE;
  const currentItems = courts.slice(start, start + ITEMS_PER_PAGE);

  useEffect(() => {
    const getCourts = async () => {
      try {
        const data = await fetchAllComplexes();
        console.log(data);
        setCourts(data);
      } catch (error) {
        console.error("Failed to fetch courts:", error);
      } finally {
        setLoading(false);
      }
    };

    getCourts();
  }, []);

  const handlePrev = () => setPage((p) => Math.max(p - 1, 1));
  const handleNext = () => setPage((p) => Math.min(p + 1, totalPages));

  if (loading) return <p>Loading courts...</p>;

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Top Favorite sport clubs. Book now!</h2>

      <div className={styles.gridWrapper}>
        {currentItems.map((court) => (
          <CourtCard key={court._id} court={court} />
        ))}
      </div>

      <div className={styles.pagination}>
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className={styles.circleBtn}
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={handleNext}
          disabled={page === totalPages}
          className={styles.circleBtn}
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default MainBottomSection;
