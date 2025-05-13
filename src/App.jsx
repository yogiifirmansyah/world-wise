/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from "react";
import { Navigate, Route, BrowserRouter, Routes } from "react-router-dom";

import { CitiesProvider } from "./context/CitiesContext";
import { AuthProvider } from "./context/FakeAuthContext";
import ProtectingRoute from "./pages/ProtectingRoute";

const Homepage = lazy(() => import("./pages/Homepage"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Product = lazy(() => import("./pages/Product"));
const Login = lazy(() => import("./pages/Login"));
const AppPage = lazy(() => import("./pages/AppPage"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

import City from "./components/City";
import Country from "./components/Country";
import CityDetail from "./components/CityDetail";
import Form from "./components/Form";
import LoaderPage from "./components/LoaderPage";

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<LoaderPage />}>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="product" element={<Product />} />
              <Route path="login" element={<Login />} />

              <Route
                path="app"
                element={
                  <ProtectingRoute>
                    <AppPage />
                  </ProtectingRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<City />} />
                <Route path="countries" element={<Country />} />
                <Route path="form" element={<Form />} />
                <Route path="cities/:id" element={<CityDetail />} />
              </Route>

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
