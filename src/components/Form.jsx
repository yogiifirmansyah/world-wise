/* eslint-disable react-refresh/only-export-components */
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { useEffect, useState } from "react";
import { useUrlPosition } from "../hooks/useUrlPosition";
import Loader from "./Loader";
import Message from "./Message";
import DatePicker from "react-datepicker";
import { useCities } from "../context/CitiesContext";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

const flagemojiToPNG = (flag) => {
  var countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
    .map((char) => String.fromCharCode(char - 127397).toLowerCase())
    .join("");
  return <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />;
};

function Form() {
  const BASE_URL = "https://us1.api-bdc.net/data/reverse-geocode-client";

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [cityName, setCityName] = useState("");
  const [countryName, setCountryName] = useState("");
  const [date, setDate] = useState(new Date());
  const [emoji, setEmoji] = useState("");
  const [notes, setNotes] = useState("");

  const navigate = useNavigate();
  const [lat, lng] = useUrlPosition();

  const { storeNewCity, isLoading: isLoadingStore } = useCities();

  useEffect(
    function () {
      async function fetchCityData() {
        try {
          setIsLoading(true);
          setError("");

          const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);
          const data = await res.json();

          if (!data.countryCode) throw new Error("That doesn't seem to be a city. Click somewhere else.");

          setCityName(data.city || data.locality || "");
          setCountryName(data.countryName);
          setEmoji(convertToEmoji(data.countryCode));
          setIsLoading(false);
        } catch (error) {
          setIsLoading(false);
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      }

      fetchCityData();
    },
    [lat, lng]
  );

  async function handleSubmit(e) {
    e.preventDefault();

    const newCity = {
      cityName,
      countryName,
      emoji,
      date,
      notes,
      position: {
        lat,
        lng,
      },
    };

    await storeNewCity(newCity);
    navigate("/app/cities", { replace: true });
  }

  if (isLoading) return <Loader />;

  if (error) return <Message>{error}</Message>;

  return (
    <form className="w-[90%] mx-auto p-4 bg-slate-800 rounded-sm flex flex-col gap-y-2" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-y-1 relative">
        <label htmlFor="city" className="text-slate-200 text-xs font-medium">
          City name
        </label>
        <input type="text" id="city" className="bg-white rounded-sm px-1 py-1" value={cityName} disabled />
        <span className="absolute right-2 top-7">{flagemojiToPNG(emoji)}</span>
      </div>
      <div className="flex flex-col gap-y-1">
        <label htmlFor="date" className="text-slate-200 text-xs font-medium">
          When did you go to {cityName}?
        </label>
        <DatePicker className="bg-white rounded-sm px-1 py-1 w-full" dateFormat="dd/MM/yyyy" id="date" selected={date} onChange={(date) => setDate(date)} />
      </div>
      <div className="flex flex-col gap-y-1">
        <label htmlFor="notes" className="text-slate-200 text-xs font-medium">
          Notes about your trip to
        </label>
        <textarea id="notes" className="bg-white rounded-sm px-1 py-1" value={notes} onChange={(e) => setNotes(e.target.value)}>
          {notes}
        </textarea>
      </div>
      <div className="flex justify-between">
        <Button type={"submit"} isLoading={isLoadingStore}>
          Add
        </Button>
        <Button
          onClick={(e) => {
            e.preventDefault();
            navigate("/app/cities");
          }}
          type={"back"}
        >
          Back
        </Button>
      </div>
    </form>
  );
}

export default Form;
