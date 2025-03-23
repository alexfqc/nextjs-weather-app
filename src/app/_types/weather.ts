export type TCoordinates = {
    lat: number;
    lon: number;
  };
  
  export type TWeather = {
    id: number;
    main: string;
    description: string;
    icon: string;
  };
  
  export type TMain = {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  
  export type TWind = {
    speed: number;
    deg: number;
  };
  
  export type TClouds = {
    all: number;
  };
  
  export type TSys = {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  
  export type TWeatherAPI = {
    coord: TCoordinates;
    weather: TWeather[];
    base: string;
    main: TMain;
    visibility: number;
    wind: TWind;
    clouds: TClouds;
    dt: number;
    sys: TSys;
    timezone: string;
    id: string;
    name: string;
    cod: string;
  };

  export type TUnit = "metric" | "imperial" | "default";
  