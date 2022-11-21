import React from "react";
import cityJson from "../../library/city.list.json";
import moment from "moment-timezone";
import Link from "next/link";
import Head from "next/head";
import SearchBox from "../../Components/SearchBox";
import TodaysWeather from "../../Components/TodaysWeather";
import HourlyWeather from "../../Components/HourlyWeather";
import WeeklyWeather from "../../Components/WeeklyWeather";
import { weatherData, CityType, WeatherHourly } from "../../Helper/types";
import enUS from "../../Translations/en.json";
import fr from "../../Translations/fr.json";
import { useRouter } from "next/router";

interface CityProps {
    city: CityType,
    timezone: string,
    currentWeather: object,
    hourlyWeather: WeatherHourly[],
    weeklyWeather: weatherData[],
}

export default function City({ city, weeklyWeather, hourlyWeather, timezone }: CityProps) {

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
        <div>
            <Head>
                <title>{city.name} Weather - Next Weather App</title>
            </Head>

            <div className="page-wrapper">
                <div className="container">
                    <Link href="/" legacyBehavior>
                        <a className="back-link">&larr; {t.city.home}</a>
                    </Link>
                    <SearchBox placeholder="Search for a location" />
                    <TodaysWeather
                        city={city}
                        weather={weeklyWeather[0]}
                        timezone={timezone}
                    />
                    <HourlyWeather hourlyWeather={hourlyWeather} timezone={timezone} />
                    <WeeklyWeather weeklyWeather={weeklyWeather} timezone={timezone} />
                </div>
            </div>
        </div>
    );
}

export async function getServerSideProps(context: { params: { city: string; }; }) {
    const city = getCityId(context.params.city);

    if (!city) {
        return {
            notFound: true,
        };
    }

    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${city.coord.lat}&lon=${city.coord.lon}&appid=${process.env.NEXT_PUBLIC_API_KEY}&exclude=minutely&units=metric`
    );

    const data = await res.json();

    if (!data) {
        return {
            notFound: true,
        };
    }

    const hourlyWeather = getHourlyWeather(data.hourly, data.timezone);
    const weeklyWeather = data.daily;

    return {
        props: {
            city: city,
            timezone: data.timezone,
            currentWeather: data.current,
            hourlyWeather: hourlyWeather,
            weeklyWeather: weeklyWeather,
        }, // will be passed to the page component as props
    };
}

const getCityId = (param: string) => {
    const cityParam = param.trim();
    // get the id of the city
    const splitCity = cityParam.split("-");
    const id = splitCity[splitCity.length - 1];
    if (!id) {
        return null;
    }

    const cities = cityJson as CityType[];

    const city = cities.find((city: CityType) => city.id.toString() == id);
    if (city) {
        return city;
    } else {
        return null;
    }
};

const getHourlyWeather = (hourlyData: any[], timezone: string) => {
    const endOfDay = moment().tz(timezone).endOf("day").valueOf();
    const eodTimeStamp = Math.floor(endOfDay / 1000);
    const todaysData = hourlyData.filter((data) => data.dt < eodTimeStamp);

    return todaysData;
};