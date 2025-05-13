/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useCallback, useContext, useEffect, useReducer } from "react";

const CitiesContext = createContext();

const initialState = {
  cities: [],
  isLoading: false,
  isLoadingItem: false,
  currentCity: {},
};

const BASE_URL = "http://localhost:8000";

function CitiesProvider({ children }) {
  const [{ cities, isLoading, isLoadingItem, currentCity }, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case "isLoading":
        return { ...state, isLoading: true };
      case "isLoadingItem":
        return { ...state, isLoadingItem: true };
      case "fetchCities":
        return { ...state, cities: action.payload, isLoading: false };
      case "getCityDetail":
        return { ...state, currentCity: action.payload, isLoading: false };
      case "storeNewCity":
        return { ...state, cities: [...state.cities, action.payload], isLoading: false };
      case "deleteCity":
        return { ...state, cities: state.cities.filter((city) => city.id !== action.payload), isLoading: false };

      default:
        break;
    }
  }

  useEffect(() => {
    async function fetchCities() {
      dispatch({ type: "isLoading" });

      try {
        const res = await fetch("http://localhost:8000/cities");
        const data = await res.json();

        dispatch({ type: "fetchCities", payload: data });
      } catch (error) {
        console.log(error);
      }
    }

    fetchCities();
  }, []);

  const getCityDetail = useCallback(async function getCityDetail({ id }) {
    dispatch({ type: "isLoading" });

    try {
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();

      dispatch({ type: "getCityDetail", payload: data });
    } catch (error) {
      console.log(error);
    }
  }, []);

  async function storeNewCity(newCity) {
    dispatch({ type: "isLoading" });

    try {
      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      dispatch({ type: "storeNewCity", payload: data });
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteCity(id) {
    dispatch({ type: "isLoadingItem" });

    try {
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });

      dispatch({ type: "deleteCity", payload: id });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        isLoadingItem,
        getCityDetail,
        currentCity,
        storeNewCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined) throw new Error("CitiesContext was used outside the ContextProvider.");
  return context;
}

export { CitiesProvider, useCities };
