import { Link } from "react-router-dom";
import { useCities } from "../context/CitiesContext";
import { useState } from "react";

/* eslint-disable react/prop-types */
function CityItem({ city }) {
  const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(date));

  const flagemojiToPNG = (flag) => {
    var countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
      .map((char) => String.fromCharCode(char - 127397).toLowerCase())
      .join("");
    return <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />;
  };

  const { currentCity, deleteCity, isLoadingItem } = useCities();
  const { id, cityName, date, emoji, position } = city;

  const [newId, setNewId] = useState(null);

  async function handleDelete(e) {
    e.preventDefault();
    setNewId(id);

    await deleteCity(id);
  }

  return (
    <div className={`text-slate-100 border-l-green-500 border-l-4 rounded-sm cursor-pointer overflow-hidden ${isLoadingItem && newId === id ? "opacity-50" : ""}`}>
      <Link to={`${id}?lat=${position.lat}&lng=${position.lng}`} className={`flex bg-slate-800  p-2 justify-between  ${currentCity.id === id ? "current-city-active" : ""}`}>
        <div className="flex gap-x-2">
          <span>{flagemojiToPNG(emoji)}</span>
          <span className="font-medium">{cityName}</span>
        </div>
        <div className="flex gap-x-2">
          <span>({formatDate(date)})</span>
          <button onClick={handleDelete} className="w-6 h-6 bg-slate-950 rounded-full flex cursor-pointer hover:bg-red-500 transition-all duration-300">
            <span className="m-auto">&times;</span>
          </button>
        </div>
      </Link>
    </div>
  );
}

export default CityItem;
