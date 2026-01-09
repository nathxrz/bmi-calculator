import styles from "./Intro.module.css";
export default function Intro() {
  return (
    <div className={styles.imcHeader}>
      <h1 className={styles.title}>Calculadora IMC</h1>
      <p className={styles.subtitle}>
        Acompanhe sua saúde de forma simplificada com nossa calculadora modular
        de indice de massa corporal.
      </p>
    </div>
  );
}
