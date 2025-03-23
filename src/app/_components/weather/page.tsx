"use client";

import { useRef, useEffect, FC, useState } from "react";
import { CITIES as cities } from "./constants";
import styles from "./weather.module.css";

const Weather: FC = () => {
  /* https://react.dev/reference/react/useRef#referencing-a-value-with-a-ref */
  const intervalRef = useRef<NodeJS.Timeout>(undefined);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((t) => t + 1);
    }, 1000 * 60 * 10);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className={styles.weatherWrapper}>
      {cities.map(({ id, lat, lon }) => (
        <div key={id}>{lat} {lon} {timer}</div>
      ))}
    </div>
  );
};

export default Weather;
