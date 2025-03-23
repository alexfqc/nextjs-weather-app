import Weather from "./_components/weather/page";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Weather />
    </div>
  );
}
