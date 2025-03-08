import styles from "@styles/common/button.module.scss";
import classNames from "classnames";

interface ButtonProps {
  children: React.ReactNode;
  type?: string;
  onClick?: () => void;
  theme?: "primary" | "secondary" | "tertiary";
  isFull?: boolean;
}

const Button = ({
  children,
  onClick,
  theme = "primary",
  isFull = false,
}: ButtonProps) => {
  return (
    <button
      className={classNames(styles.button, styles[theme], {
        [styles.full]: isFull,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
