"use client";

export const dynamic = "force-dynamic";

import { FC, useEffect, useTransition, useState, useMemo } from "react";
import { fetchCityWeather } from "./fetchCityWeather";
import { type TCoordinates, type TWeatherAPI, type TUnit } from "../../_types/weather";
import { TEMP_UNITS, KEVIN_UNIT } from './constants'
import styles from "./city.module.css";

const City: FC<TCoordinates & { timerToUpdate: number; unit: TUnit }> = ({
  lat,
  lon,
  timerToUpdate,
  unit
}) => {
  const [isPending, startTransition] = useTransition();
  const [weatherInfo, setWeatherInfo] = useState<TWeatherAPI | null>(null);

  useEffect(() => {
    /* https://nextjs.org/docs/messages/no-async-client-component#client-side-data-fetching */
    async function fetchData({ lat, lon }: TCoordinates) {
      const payload = await fetchCityWeather({
        lat,
        lon,
        unit,
      });

      if (payload.status === "success") {
        setWeatherInfo(payload.data);
      }
    }

    startTransition(() => {
      fetchData({ lat, lon });
    });
  }, [lat, lon, timerToUpdate]);

  const tempSymbol = useMemo(() => {
    return TEMP_UNITS[unit as keyof typeof TEMP_UNITS] ?? KEVIN_UNIT
  }, [unit]);

  const tempClass = useMemo(() => {
    const temp = Math.floor(weatherInfo?.main?.temp ?? 0);
    if (temp <= 5) {
      return styles.blue;
    }
    if (temp <= 25) {
      return styles.orange;
    }
    return styles.red;
  }, [weatherInfo]);

  return (
    <div className={styles.cityWrapper}>
      <div className={styles.cityName}>
        {isPending ? "loading" : weatherInfo?.name}
      </div>
      <div className={styles.cityInfo}>
        <div className={`${styles.cityTemp} ${tempClass}`}>
          {Math.floor(weatherInfo?.main?.temp ?? 0)} {tempSymbol}
        </div>
        <div className={styles.cityExtraInfo}>
          <div className={styles.cityExtraInfoItem}>
            Humidity: {weatherInfo?.main?.humidity}%
          </div>
          <div className={styles.cityExtraInfoItem}>
            Pressure: {weatherInfo?.main?.pressure}
          </div>
        </div>
      </div>
    </div>
  );
};

export default City;
