"use server";

import { type TCoordinates, type TWeatherAPI } from "../../_types/weather";
import fetchData from "@/app/_utils/fetchData";

const KEVIN_UNIT = "°K";

const TEMP_UNITS = {
  metric: "°C",
  imperial: "°F",
  standard: KEVIN_UNIT,
} as const;

type TCityWeatherReturn<T> =
  | { status: "success"; data: T }
  | { status: "error"; errorMessage: string };

export const fetchCityWeather = async <T extends TWeatherAPI>({
  lat,
  lon,
}: TCoordinates): Promise<TCityWeatherReturn<T>> => {
  const url = `${process.env.BASE_URL}?lat=${lat}&lon=${lon}&units=${process.env.OPEN_WEATHER_UNIT}&appid=${process.env.OPEN_WEATHER_API_KEY}`;

  const extraData = {
    temp_unit:
      TEMP_UNITS[process.env.OPEN_WEATHER_UNIT as keyof typeof TEMP_UNITS] ??
      KEVIN_UNIT,
  } as const;

  const payload = await fetchData<T>(url);

  if (payload.status === "success") {
    return {
      ...payload,
      data: {
        ...payload.data,
        ...extraData,
      },
    };
  }

  return payload;
};