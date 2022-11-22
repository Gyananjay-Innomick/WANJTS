import { render, screen } from '@testing-library/react'
import WeeklyWeather from "../Components/WeeklyWeather"
import '@testing-library/jest-dom'

const weeklyData = [
    {
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
    },
    {
        dt: 1669168800,
        sunrise: 1669152277,
        sunset: 1669188643,
        moonrise: 1669148220,
        moonset: 1669186320,
        moon_phase: 0.97,
        temp: {
            day: 11.76,
            min: 11.38,
            max: 16.2,
            night: 12.5,
            eve: 12.92,
            morn: 13.77
        },
        feels_like: { day: 11.29, night: 12.02, eve: 12.7, morn: 13.13 },
        pressure: 1017,
        humidity: 88,
        dew_point: 9.87,
        wind_speed: 10.18,
        wind_deg: 327,
        wind_gust: 14.64,
        weather: [[Object]],
        clouds: 100,
        pop: 1,
        rain: 53.5,
        uvi: 0
    },
    {
        dt: 1669255200,
        sunrise: 1669238736,
        sunset: 1669275018,
        moonrise: 1669239000,
        moonset: 1669275180,
        moon_phase: 0,
        temp: {
            day: 17.13,
            min: 12.83,
            max: 18.73,
            night: 15.05,
            eve: 17.54,
            morn: 13.2
        },
        feels_like: { day: 16.13, night: 14.02, eve: 16.39, morn: 12.25 },
        pressure: 1011,
        humidity: 47,
        dew_point: 5.79,
        wind_speed: 10.38,
        wind_deg: 330,
        wind_gust: 15.83,
        weather: [[Object]],
        clouds: 6,
        pop: 1,
        rain: 1.15,
        uvi: 0
    }
]
const timezone = "Europe/Paris"
describe('weeekly weather component test', () => {
    test("render weekly weather days", () => {
        render(<WeeklyWeather weeklyWeather={weeklyData} timezone={timezone} />);
        const weeklyDays = screen.getAllByTestId("weekly_days");
        weeklyDays.map((weekday) => {
            expect(weekday).toHaveTextContent(/^(Sun|Mon|(T(ues|hurs))|Fri)(day|\.)?$|Wed(\.|nesday)?$|Sat(\.|urday)?$|T((ue?)|(hu?r?))\.?$/);
        })
    })
    test("render all data passed to weeklyWeather component", () => {
        render(<WeeklyWeather weeklyWeather={weeklyData} timezone={timezone} />);
        const weatherCards = screen.getAllByTestId("weeklyCard");
        expect(weatherCards.length).toEqual(weeklyData.length - 1);
    })
})