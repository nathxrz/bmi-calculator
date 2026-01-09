import styles from "./InputField.module.css";

export default function InputField({
  inputValue,
  handleValueChange,
  text,
  htmlForLabel,
  error,
}: {
  inputValue: string;
  handleValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  text: string;
  htmlForLabel: string;
  error: boolean;
}) {
  return (
    <div>
      <label htmlFor={htmlForLabel}>{text}: </label>
      <input
        id={htmlForLabel}
        type="text"
        placeholder={text}
        value={inputValue}
        onChange={handleValueChange}
        className={error ? styles.inputError : ""}
      />
      {error && <span>Campo obrigatório</span>}
    </div>
  );
}
