export type weather = {
    description: string,
    icon: string,
    id: number,
    main: string
}

export type weatherData = {
    dt: number;
    temp: {
        min: number,
        max: number,
    },
    sunrise: number,
    sunset: number,
    weather: weather[],

}

export type CityType = {
    "slug"?: string | null | undefined;
    "id": number,
    "name": string,
    "state": string,
    "country": string,
    "coord": {
        "lon": number,
        "lat": number
    }
}

export type WeatherHourly = {
    dt: number,
    weather: {
        icon: any,
        description: string,
    }[],
    temp: number;
}