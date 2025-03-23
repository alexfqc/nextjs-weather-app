## Getting Started

First, create your account at [Open Weather](https://openweathermap.org/).

After you have created your account, you will receive an email with the api url that you can use at your free plan.

## Development Steps

If your machine has linux or macos, you can `nvm use` before installing you node packages. Othewise use a newer version of Node LTS, which is `22.14` when this project was created. 

Create a file name `.env` at your root folder and copy data from `.sample-env` file:

```
BASE_URL=https://api.openweathermap.org/data/2.5/weather
OPEN_WEATHER_API_KEY=
```

`BASE_URL` already has the correct value (url which came from Open Weather email).

You'll need to copy your api key which you received at same email from Open Weather and paste as value of `OPEN_WEATHER_API_KEY`.

```
OPEN_WEATHER_API_KEY=you_api_key_here
```

Open your terminal, go to the project folder and run:

```
npm i
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

