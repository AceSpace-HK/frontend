import styles from "@styles/common/error.module.scss";

const ErrorText = ({ message }: { message?: string }) => {
  if (!message) return null;
  return <p className={styles.error}>{message}</p>;
};

export default ErrorText;
