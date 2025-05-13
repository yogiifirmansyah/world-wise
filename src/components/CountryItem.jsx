/* eslint-disable react/prop-types */
function CountryItem({ countryItem }) {
  const { country, emoji } = countryItem;

  return (
    <li className="flex bg-slate-800 rounded-sm p-2 justify-between text-slate-100 border-l-orange-500 border-l-4">
      <div className="flex flex-col gap-y-2 mx-auto text-center">
        <span>{emoji}</span>
        <span className="font-medium">{country}</span>
      </div>
    </li>
  );
}

export default CountryItem;
