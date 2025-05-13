import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCities } from "../context/CitiesContext";
import Loader from "./Loader";

function CityDetail() {
  const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(date));

  const id = useParams();

  const navigate = useNavigate();

  const { currentCity, getCityDetail, isLoading } = useCities();
  const { cityName, date, emoji, notes } = currentCity;

  useEffect(
    function () {
      getCityDetail(id);
    },
    [id, getCityDetail]
  );

  const flagemojiToPNG = (flag) => {
    var countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
      .map((char) => String.fromCharCode(char - 127397).toLowerCase())
      .join("");
    return <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />;
  };

  if (isLoading) return <Loader />;

  return (
    <div className="w-[90%] flex flex-col gap-y-4 mx-auto p-4 bg-slate-800 rounded-md">
      <div>
        <span className="uppercase text-slate-400 text-xs">City Name</span>
        <div className="flex gap-x-2 items-center">
          {emoji && <span>{flagemojiToPNG(emoji)}</span>}
          <h3 className="text-white font-semibold">{cityName}</h3>
        </div>
      </div>
      <div>
        <span className="uppercase text-slate-400 text-xs">You Went To Lisbon On</span>
        <h3 className="text-slate-200">{formatDate(date || null)}</h3>
      </div>
      <div>
        <span className="uppercase text-slate-400 text-xs">Your Notes</span>
        <h3 className="text-slate-200">{notes}</h3>
      </div>
      <div>
        <span className="uppercase text-slate-400 text-xs">Learn More</span> <br />
        <a href="#" className="text-yellow-500 underline">
          Checkout Lisbon on Wikipedia
        </a>
      </div>
      <button onClick={() => navigate(-1)} className="p-2 border-2 border-white font-semibold text-white cursor-pointer hover:bg-slate-700 transition-all duration-300">
        Back
      </button>
    </div>
  );
}

export default CityDetail;
