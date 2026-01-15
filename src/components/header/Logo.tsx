import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <span className={`material-symbols-outlined ${styles.logoIcon}`}>
        health_metrics
      </span>
      <h1 className={styles.logoText}>
        Calcula<span>IMC</span>
      </h1>
    </div>
  );
}
