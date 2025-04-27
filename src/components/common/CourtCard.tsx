import { Complex } from "@/api/complexApi";
import styles from "@styles/common/courtCard.module.scss";

interface CourtCardProps {
  court: Complex;
}

const CourtCard = ({ court }: CourtCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardBody}>
        <h3>{court.complex_name_EN}</h3>
        <p>📍 {court.address_EN}</p>
        <button className={styles.button}>Book now</button>
      </div>
    </div>
  );
};

export default CourtCard;
