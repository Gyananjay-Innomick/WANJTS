import moment from "moment-timezone";
import React from "react";
import Image from "next/image";
import { weatherData, CityType } from "../Helper/types";
import { useTranslation } from "next-i18next"

interface TodaysWeatherProps {
    city: CityType,
    weather: weatherData,
    timezone: string
}

export default function TodaysWeather({
    city, weather, timezone
}: TodaysWeatherProps) {

    const { t } = useTranslation('city');

    return (
        <div className="today">
            <div className="today__inner">
                <div className="today__left-content">
                    <h1 data-testid="city_name">
                        {city.name} ({city.country})
                    </h1>
                    <h2>
                        <span data-testid="today_max_temp">{weather.temp.max.toFixed(0)}&deg;C</span>
                        <span data-testid="today_min_temp">{weather.temp.min.toFixed(0)}&deg;C</span>
                    </h2>
                    <div className="today__sun-times">
                        <div>
                            <span>{t('sunrise')}</span>
                            <span>{moment.unix(weather.sunrise).tz(timezone).format("LT")}</span>
                        </div>

                        <div>
                            <span>{t('sunset')}</span>
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
