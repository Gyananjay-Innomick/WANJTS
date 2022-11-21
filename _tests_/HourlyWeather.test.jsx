import { render, screen } from '@testing-library/react'
import HourlyWeather from "../Components/HourlyWeather";
import '@testing-library/jest-dom'

const hourlyWeather = [{
    dt: 123,
    weather: [{
        icon: 'test',
        description: 'test description',
    }],
    temp: 20
},
{
    dt: 1234,
    weather: [{
        icon: 'test',
        description: 'test description',
    }],
    temp: 22
}
]
const timezone = "Europe/Paris"
test("render hourly weather card", () => {
    render(<HourlyWeather hourlyWeather={hourlyWeather} timezone={timezone} />);
    const hourlyWeatherCards = screen.getAllByTestId('hourlyWeather_card');
    // console.log(hourlyWeatherCards);
    hourlyWeatherCards.map((hourlyWeatherCard) => {
        // console.log(hourlyWeather.key);
        expect(hourlyWeatherCard).toBeInTheDocument();
    })
});