import { render, screen } from '@testing-library/react'
import TodayWeather from "../Components/TodaysWeather"
import '@testing-library/jest-dom'


const city = {
    "id": 1275339,
    "name": "Mumbai",
    "state": "",
    "country": "IN",
    "coord": {
        "lon": 72.847939,
        "lat": 19.01441
    }
}
const weatherData = {
    dt: 1669082400,
    sunrise: 1669065818,
    sunset: 1669102270,
    moonrise: 1669057620,
    moonset: 1669097820,
    moon_phase: 0.93,
    temp: {
        day: 17.88,
        min: 13.8,
        max: 19.4,
        night: 16.5,
        eve: 18.1,
        morn: 14
    },
    feels_like: { day: 17.03, night: 15.8, eve: 17.48, morn: 13.36 },
    pressure: 1019,
    humidity: 50,
    dew_point: 7.37,
    wind_speed: 5.01,
    wind_deg: 92,
    wind_gust: 6.96,
    weather: [[Object]],
    clouds: 99,
    pop: 0.43,
    rain: 0.29,
    uvi: 0
}
const timezone = "Europe/Paris"
describe('today weather component test', () => {
    test("city name with country", () => {
        render(<TodayWeather city={city} weather={weatherData} timezone={timezone} />)
        const cityName = screen.getByTestId("city_name");
        expect(cityName).toHaveTextContent("Mumbai (IN)");
    });
    test("render correct min and max temp", () => {
        render(<TodayWeather city={city} weather={weatherData} timezone={timezone} />);
        const maxTemp = screen.getByTestId("today_max_temp");
        const minTemp = screen.getByTestId("today_min_temp");
        expect(maxTemp).toHaveTextContent(weatherData.temp.max.toFixed(0));
        expect(minTemp).toHaveTextContent(weatherData.temp.min.toFixed(0));
    })
});

