import moment from "moment-timezone";
import React from "react";
import Image from "next/image";
import { weatherData, CityType } from "../Helper/types";
import { useRouter } from "next/router";
import enUS from "../Translations/en.json";
import fr from "../Translations/fr.json";

interface TodaysWeatherProps {
    city: CityType,
    weather: weatherData,
    timezone: string
}

export default function TodaysWeather({
    city, weather, timezone
}: TodaysWeatherProps) {

    const router = useRouter();
    const { locale } = router;

    let t = enUS;
    switch (locale) {
        case "en-GB":
            t = enUS
            break;
        case "fr":
            t = fr
            break;
    }

    return (
        <div className="today">
            <div className="today__inner">
                <div className="today__left-content">
                    <h1>
                        {city.name} ({city.country})
                    </h1>
                    <h2>
                        <span>{weather.temp.max.toFixed(0)}&deg;C</span>
                        <span>{weather.temp.min.toFixed(0)}&deg;C</span>
                    </h2>
                    <div className="today__sun-times">
                        <div>
                            <span>{t.city.sunrise}</span>
                            <span>{moment.unix(weather.sunrise).tz(timezone).format("LT")}</span>
                        </div>

                        <div>
                            <span>{t.city.sunset}</span>
                            <span>{moment.unix(weather.sunset).tz(timezone).format("LT")}</span>
                        </div>
                    </div>
                </div>

                <div className="today__right-content">
                    <div className="today__icon-wrapper">
                        <div>
                            <Image
                                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                alt="Weather Icon"
                                fill
                                sizes="100vw" />
                        </div>
                    </div>
                    <h3>{weather.weather[0].description}</h3>
                </div>
            </div>
        </div>
    );
}
