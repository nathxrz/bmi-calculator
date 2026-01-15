import styles from "./Header.module.css";

import ThemeActions from "./ThemeActions";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <ThemeActions />
    </header>
  );
}
