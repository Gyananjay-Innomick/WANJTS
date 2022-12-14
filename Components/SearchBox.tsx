import React from "react";
import cityJson from "../library/city.list.json";
import Link from "next/link";
import Router from "next/router";
import { CityType } from "../Helper/types"


export default function SearchBox({ placeholder }: { placeholder: string }) {
    const [query, setQuery] = React.useState("");
    const [results, setResults] = React.useState<CityType[]>();

    React.useEffect(() => {
        const clearQuery = () => setQuery("");
        Router.events.on("routeChangeComplete", clearQuery);
        return () => {
            Router.events.off("routeChangeComplete", clearQuery);
        };
    }, []);

    const onChange = (e: { target: { value: string; }; }) => {
        const { value } = e.target;
        setQuery(value);
        let matchingCities = [];
        if (value.length > 3) {
            const cities = cityJson as CityType[];
            for (let city of cities) {
                if (matchingCities.length >= 5) {
                    break;
                }
                const match = city.name.toLowerCase().startsWith(value.toLowerCase());
                if (match) {
                    const cityData = {
                        ...city,
                        slug: `${city.name.toLowerCase().replace(/ /g, "-")}-${city.id}`,
                    };
                    matchingCities.push(cityData);
                }
            }
        }
        setResults(matchingCities);
        return
    };

    return (
        <div className="search">
            <input value={query} onChange={onChange} type="text" placeholder={placeholder} data-testid='searchbox_input' />
            {
                query.length > 3 && (
                    <ul>
                        {results && results.length > 0 ? (
                            results.map((city) => (
                                <li key={city.slug}>
                                    <Link href={`/location/${city.slug}`}>
                                        {/* <a> */}
                                        {city.name}
                                        {city.state ? `, ${city.state}` : ""} <span>({city.country})</span>
                                        {/* </a> */}
                                    </Link>
                                </li>
                            ))
                        ) : (
                            <li className="search__no-results">NO results</li>
                        )}
                    </ul>
                )
            }
        </div>
    );
}