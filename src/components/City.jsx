import { useCities } from "../context/CitiesContext";
import CityItem from "./CityItem";
import Loader from "./Loader";

function City() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Loader />;

  return (
    <ul className="w-[90%] flex flex-col gap-y-2 mx-auto">
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default City;
