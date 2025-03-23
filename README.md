## Technologies
* Nextjs (React)
* Typescript
* Postcss
* Playwright

## Getting Started

First, create your account at [Open Weather](https://openweathermap.org/).

After you have created your account, you will receive an email with the api url that you can use in your free plan.

## Development Steps

Create a file named `.env` at the root folder of the project and copy the data from `.sample-env` file:

```
BASE_URL=https://api.openweathermap.org/data/2.5/weather
OPEN_WEATHER_API_KEY=
```

`BASE_URL` already has the correct value (url which came from Open Weather email).

You'll need to copy your api key which you received at same email from Open Weather and paste as value of `OPEN_WEATHER_API_KEY`.

```
OPEN_WEATHER_API_KEY=you_api_key_here
```

If your machine has linux or macos, you can `nvm use` before installing and running your node packages. Othewise use a newer version of Node LTS, which is `22.14` when this project was created. 

Open your terminal, go to the project folder and run:

```
npm i
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## E2E Tests Steps

Make sure that your application is running, open a new tab in your teminal and run the command:

```bash
npm run test:e2e
```

Tests will run and you could see the tests on a local server by running the command after tests finished:

```bash
npx playwright show-report
```
