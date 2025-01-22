import { 
  fetchAllCountriesData, 
  fetchGlobalData, 
  fetchStatesData,
  fetchCountryVaccineData,
} from "./covidApiClient";

export const fetchAllData = async (country: string  ) => {
  const [
    allCountriesData, 
    globalDataResponse, 
    statesDataResponse,
    countryVaccineData
  ] = await Promise.all([
    fetchAllCountriesData(),
    fetchGlobalData(),
    fetchStatesData(country),
    fetchCountryVaccineData(country),
  ]);

  return { 
    allCountriesData, 
    globalDataResponse, 
    statesDataResponse,
    countryVaccineData 
  };
};