import styles from "@styles/common/input.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = ({
  type,
  placeholder,
  value,
  onChange,
  ...props
}: InputProps) => {
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

export default Input;
