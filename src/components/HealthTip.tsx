import styles from "./HealthTip.module.css";
import { HealthTips } from "../data/healthTips";
import { useEffect, useState } from "react";

export default function HealthTip() {
  const [tip, setTip] = useState("");

  useEffect(() => {
    const updateTip = () => {
      const randomIndex = Math.floor(Math.random() * HealthTips.length);
      setTip(HealthTips[randomIndex].tip);
    };

    updateTip();

    const interval = setInterval(updateTip, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.tipCard}>
      <span className={`material-symbols-outlined ${styles.tipIcon}`}>
        emoji_objects
      </span>
      <div>
        <h4 className={styles.tipTitle}>Dica de Saúde</h4>
        <p className={styles.tipInfo}>{tip}</p>
      </div>
    </div>
  );
}
