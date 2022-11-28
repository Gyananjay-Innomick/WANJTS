import React from "react";
import Image from "next/image";
import moment from "moment-timezone";
import { weatherData } from "../Helper/types";
import { useTranslation } from "next-i18next"

interface weeklyWeatherProps {
    weeklyWeather: weatherData[],
    timezone: string
}
export default function WeeklyWeather({ weeklyWeather, timezone }: weeklyWeatherProps) {

    const { t } = useTranslation('city');

    return (
        <div className="weekly">
            <h3 className="weekly_title">Weekly <span>Weather</span></h3>
            {
                weeklyWeather.length > 0 && weeklyWeather.map((weather, index) => {
                    if (index === 0) {
                        return;
                    }
                    return (
                        <div className="weekly_card" key={index} data-testid="weeklyCard">
                            <div className="weekly_inner">
                                <div className="weekly_left-content">
                                    <div>
                                        <h3 data-testid="weekly_days">{t(`${moment.unix(weather.dt).tz(timezone).format('dddd')}`)}</h3>
                                        <h4>
                                            <span>{weather.temp.max.toFixed(0)}&deg;C</span>
                                            <span>{weather.temp.min.toFixed(0)}&deg;C</span>
                                        </h4>
                                    </div>
                                    <div className="weekly_sun-times">
                                        <div>
                                            <span>{t("sunrise")}</span>
                                            <span>{moment.unix(weather.sunrise).tz(timezone).format("LT")}</span>
                                        </div>
                                        <div>
                                            <span>{t("sunset")}</span>
                                            <span>{moment.unix(weather.sunset).tz(timezone).format("LT")}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="weekly_right-content">
                                    <div className="weekly_icon-wrapper">
                                        <div>
                                            <Image
                                                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                                alt="Weather Icon"
                                                width="75"
                                                height="75"
                                                style={{
                                                    maxWidth: "100%",
                                                    height: "auto"
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <h5>{weather.weather[0].description}</h5>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}