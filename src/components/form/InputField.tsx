import styles from "./InputField.module.css";

export default function InputField({
  inputValue,
  handleValueChange,
  text,
  placeholder,
  metric,
  htmlForLabel,
  error,
}: {
  inputValue: string;
  handleValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  text: string;
  placeholder: string;
  metric: string;
  htmlForLabel: string;
  error: boolean;
}) {
  return (
    <div className={styles.inputContains}>
      <label className={styles.inputLabel} htmlFor={htmlForLabel}>
        {text}:{"* "}
      </label>
      <div className={styles.inputContainer}>
        <input
          id={htmlForLabel}
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleValueChange}
          className={`${styles.inputElement} ${error ? styles.inputError : ""}`}
        />
        <span className={styles.inputMetric}>{metric}</span>
      </div>
      <p
        className={`${styles.errorText} ${
          error ? styles.visible : styles.hidden
        }`}
      >
        *Campo obrigatório
      </p>
    </div>
  );
}
