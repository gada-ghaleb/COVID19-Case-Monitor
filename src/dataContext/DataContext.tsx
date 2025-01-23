import React, { createContext, useState, useEffect, ReactNode } from "react";
import {
  fetchAllCountriesData,
  fetchGlobalData,
  fetchStatesData,
  fetchCountryVaccineData,
} from "../services/covidApiClient";

interface CountriesData {
  country: string;
  confirmed: number;
  population: number;
  tests: number;
  active: number,
  deaths: number;
  recovered: number;
  lat: number;
  long: number;
  date: string;
}

interface GlobalData {
  confirmed: number;
  deaths: number;
  recovered: number;
  date: string;
  active: number;
}

interface StateData {
  province: string;
  confirmed: number;
  deaths: number;
  recovered: number;
}

interface VaccineData {
  date: number;
  country: string;
  state: string;
  total: number;
}
interface DataContextProps {
  globalData: GlobalData | null;
  statesData: StateData[];
  countriesData: CountriesData[];
  countryVaccineData: VaccineData[];
  lastUpdate: string;
  loading: boolean;
  error: string | null;
  setGlobalData: React.Dispatch<React.SetStateAction<GlobalData | null>>;
  updateStatesData: (data: StateData[]) => void;
}

export const DataContext = createContext<DataContextProps | undefined>(
  undefined
);

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [globalData, setGlobalData] = useState<GlobalData | null>(null);
  const [countriesData, setCountriesData] = useState<CountriesData[]>([]);
  const [statesData, setStatesData] = useState<StateData[]>([]);
  const [countryVaccineData, setCountryVaccineData] = useState<VaccineData[]>([]);
  const [lastUpdate, setLastUpdate] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
   
  useEffect(() => {
    const fetchData = async () => {
      try {
        const allCountriesData = await fetchAllCountriesData();
        const countriesData = allCountriesData.map((data: any) => ({
          country: data.country || "Unknown",
          confirmed: data.cases || 0,
          deaths: data.deaths || 0,
          active: data.active || 0,                   
          recovered: data.recovered || 0,
          population: data.population || 0,
          tests: data.tests || 0, 
          lat: data.countryInfo?.lat || 0,
          long: data.countryInfo?.long || 0,
          date: data.updated ? new Date(data.updated).toLocaleString() : "No date available",
        }));
        setCountriesData(countriesData);
        
        const globalDataResponse = await fetchGlobalData();
        const updatedDate = new Date(globalDataResponse.updated);
        setGlobalData({
          confirmed: globalDataResponse.cases,
          deaths: globalDataResponse.deaths,
          recovered: globalDataResponse.recovered,
          date: updatedDate.toLocaleString(),
          active: globalDataResponse.active,
        });

        setLastUpdate(updatedDate.toLocaleString());

        const statesDataResponse = await fetchStatesData("USA");
        const statesData = statesDataResponse.map((item: any) => ({
          province: item.state || "Unknown",
          confirmed: item.cases || 0,
          deaths: item.deaths || 0,
          recovered: item.recovered || 0,
        }));
      
        setStatesData(statesData);
        
        const countryVaccineResponse = await fetchCountryVaccineData("USA");
        const countryVaccineData = countryVaccineResponse.map((data: any) => ({
          country: data.country || "Unknown",
          total: Number(Object.values(data.timeline).pop() || 0),
        }));
        setCountryVaccineData(countryVaccineData);
      
      } catch (error) {
        setError(error instanceof Error ? error.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);

  const updateStatesData = (data: StateData[]) => {
    setStatesData(data);
    if (globalData) {
      const updatedDate = new Date(globalData.date);
      setLastUpdate(updatedDate.toLocaleString());
    }
  };

  return (
    <DataContext.Provider
      value={{
        globalData,
        statesData,
        countriesData,
        countryVaccineData,
        lastUpdate,
        loading,
        error,
        setGlobalData,
        updateStatesData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
