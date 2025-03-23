import Weather from "./_components/weather/page";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <Weather />
    </main>
  );
}
