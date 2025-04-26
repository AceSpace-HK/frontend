import { ChevronLeft, ChevronRight } from "react-feather";
import styles from "@styles/main/MainBottomSection.module.scss";

interface PaginationProps {
  page: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
}

const Pagination = ({ page, totalPages, onPrev, onNext }: PaginationProps) => (
  <div className={styles.pagination}>
    <button onClick={onPrev} disabled={page === 1} className={styles.circleBtn}>
      <ChevronLeft size={18} />
    </button>
    <button
      onClick={onNext}
      disabled={page === totalPages}
      className={styles.circleBtn}
    >
      <ChevronRight size={18} />
    </button>
  </div>
);

export default Pagination;
