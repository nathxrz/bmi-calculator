import styles from "./tipBox.module.css";

export default function TipBox() {
  return (
    <div className={styles.tipCard}>
      <span className={`material-symbols-outlined ${styles.tipIcon}`}>
        emoji_objects
      </span>
      <div>
        <h4 className={styles.tipTitle}>Dica de Saúde</h4>
        <p className={styles.tipInfo}>
          Beber 2 litros de água por dia ajuda na manutenção do seu metabolismo
          basal.
        </p>
      </div>
    </div>
  );
}
