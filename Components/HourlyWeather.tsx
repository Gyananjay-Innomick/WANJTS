import React from "react";
import moment from "moment-timezone";
import Image from "next/image";

type Weather = {
    dt: number,
    weather: {
        icon: any,
        description: string,
    }[],
    temp: number;
}

export default function HourlyWeather({
    hourlyWeather, timezone
}: { hourlyWeather: Weather[], timezone: string }) {
    return (
        <div className="hourly">

            <div className="hourly__inner">
                {hourlyWeather.length > 0 &&
                    hourlyWeather.map((weather, index: number) => (
                        <div className="hourly__box-wrapper" key={weather.dt}>
                            <div className="hourly__box">
                                <span
                                    className={`hourly__time ${index == 0 ? "hourly__time-now" : ""}`}
                                >
                                    {index == 0
                                        ? "NOW"
                                        : moment.unix(weather.dt).tz(timezone).format("LT")}
                                </span>
                                <Image
                                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                    alt={weather.weather[0].description}
                                    width="100"
                                    height="100"
                                    style={{
                                        maxWidth: "100%",
                                        height: "auto"
                                    }} />
                                <span>{weather.temp.toFixed(0)}&deg;C</span>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}
