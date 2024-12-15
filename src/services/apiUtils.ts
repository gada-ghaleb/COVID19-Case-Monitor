import { fetchAllCountriesData, fetchGlobalData, fetchStatesData } from "./covidApiClient";

export const fetchAllData = async () => {
  const [allCountriesData, globalDataResponse, statesDataResponse] = await Promise.all([
    fetchAllCountriesData(),
    fetchGlobalData(),
    fetchStatesData("USA"),
  ]);

  return { allCountriesData, globalDataResponse, statesDataResponse };
};
