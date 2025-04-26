import styles from "@styles/common/button.module.scss";
import classNames from "classnames";

interface ButtonProps {
  children: React.ReactNode;
  type?: string;
  onClick?: () => void;
  theme?: "primary" | "secondary" | "tertiary";
  isFull?: boolean;
  className?: string; // ✅ 추가
}

const Button = ({
  children,
  onClick,
  theme = "primary",
  isFull = false,
  className,
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        styles.button,
        styles[theme],
        {
          [styles.full]: isFull,
        },
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
