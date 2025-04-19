"use client";

import { useEffect, useState } from "react";
// import { fetchAllCourts, Complex } from "@/api/complexApi";
import styles from "@styles/main/MainBottomSection.module.scss";
import { ChevronLeft, ChevronRight } from "react-feather";

interface Complex {
  _id: string;
  complex_name_EN: string;
  address_EN: string;
}

const mockCourts: Complex[] = [
  {
    _id: "1",
    complex_name_EN: "Ho Man Tin Sports Centre",
    address_EN: "1 Chung Yee Street, Ho Man Tin",
  },
  {
    _id: "2",
    complex_name_EN: "Victoria Park Tennis Court",
    address_EN: "1 Hing Fat Street, Causeway Bay",
  },
  {
    _id: "3",
    complex_name_EN: "Kowloon Tsai Sports Ground",
    address_EN: "13 Inverness Road, Kowloon City",
  },
  {
    _id: "4",
    complex_name_EN: "Southorn Playground",
    address_EN: "111 Johnston Road, Wan Chai",
  },
  {
    _id: "5",
    complex_name_EN: "Chai Wan Sports Centre",
    address_EN: "1 Yee Shing Street, Chai Wan",
  },
  {
    _id: "6",
    complex_name_EN: "Shatin Sports Ground",
    address_EN: "18 Yuen Wo Road, Sha Tin",
  },
  {
    _id: "7",
    complex_name_EN: "Mong Kok Stadium",
    address_EN: "37 Flower Market Road, Mong Kok",
  },
  {
    _id: "8",
    complex_name_EN: "Tsing Yi Sports Centre",
    address_EN: "51 Tsing King Road, Tsing Yi",
  },
];

const ITEMS_PER_PAGE = 4;

const MainBottomSection = () => {
  const [courts, setCourts] = useState<Complex[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(mockCourts.length / ITEMS_PER_PAGE);
  const start = (page - 1) * ITEMS_PER_PAGE;
  const currentItems = courts.slice(start, start + ITEMS_PER_PAGE);

  useEffect(() => {
    // 서버 통신 주석 처리
    // const getCourts = async () => {
    //   try {
    //     const data = await fetchAllCourts();
    //     setCourts(data);
    //   } catch (error) {
    //     console.error("Failed to fetch courts:", error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };

    // getCourts();

    // 대신 mock 데이터 사용
    setTimeout(() => {
      setCourts(mockCourts);
      setLoading(false);
    }, 500); // 로딩 시뮬레이션
  }, []);

  const handlePrev = () => setPage((p) => Math.max(p - 1, 1));
  const handleNext = () => setPage((p) => Math.min(p + 1, totalPages));

  if (loading) return <p>Loading courts...</p>;

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Top searched sport clubs. Book now!</h2>

      <div className={styles.gridWrapper}>
        {currentItems.map((court) => (
          <div key={court._id} className={styles.card}>
            <div className={styles.cardBody}>
              <h3>{court.complex_name_EN}</h3>
              <p>📍 {court.address_EN}</p>
              <button className={styles.button}>Book now</button>
            </div>
          </div>
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
