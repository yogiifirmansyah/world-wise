/* eslint-disable react/prop-types */
function Button({ children, onClick, type, isLoading }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`max-w-max px-4 py-1.5 text-xs font-[700] cursor-pointer rounded-md uppercase transition-all duration-300 ${isLoading ? "opacity-50" : ""}
        ${type === "submit" ? "text-slate-950 bg-green-500 hover:bg-green-700" : ""}
        ${type === "back" ? "border-[1px] border-slate-100 text-slate-100 hover:bg-slate-700" : ""}
        ${type === "logout" ? "text-slate-100 bg-slate-800 hover:bg-slate-700" : ""}
        ${type === "position" ? "absolute z-[1000] bottom-16 left-[50%] translate-x-[-50%] text-slate-950 bg-green-500 hover:bg-green-700" : ""}
    `}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
}

export default Button;
