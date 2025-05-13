import { useCities } from "../context/CitiesContext";
import CountryItem from "./CountryItem";
import Loader from "./Loader";

function Country() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Loader />;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) return [...arr, { id: city.id, country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className="w-[90%] grid grid-cols-2 gap-2 mx-auto">
      {countries.map((country) => (
        <CountryItem key={country.id} countryItem={country} />
      ))}
    </ul>
  );
}

export default Country;
