"use server";

import { type TCoordinates, type TWeatherAPI, type TUnit } from "../../_types/weather";
import fetchData from "@/app/_utils/fetchData";

type TCityWeatherReturn<T> =
  | { status: "success"; data: T }
  | { status: "error"; errorMessage: string };

/* This function is needed for running code in the server, 
 * avoiding security issues like exposing OPEN_WEATHER_API_KEY 
*/
export const fetchCityWeather = async <T extends TWeatherAPI>({
  lat,
  lon,
  unit = 'metric'
}: TCoordinates & { unit: TUnit }): Promise<TCityWeatherReturn<T>> => {
  const url = `${process.env.BASE_URL}?lat=${lat}&lon=${lon}&units=${unit}&appid=${process.env.OPEN_WEATHER_API_KEY}`;

  const payload = await fetchData<T>(url);

  return payload;
};