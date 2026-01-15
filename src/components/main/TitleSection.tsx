import styles from "./TitleSection.module.css";

type TitleSectionProps = {
  text: string;
  icon: string;
};
export default function TitleSection({ text, icon }: TitleSectionProps) {
  return (
    <h2 className={styles.sectionTitle}>
      <span className="material-symbols-outlined">{icon}</span>
      {text}
    </h2>
  );
}
