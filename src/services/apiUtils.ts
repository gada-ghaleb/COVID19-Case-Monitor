import { 
  fetchAllCountriesData, 
  fetchGlobalData, 
  fetchStatesData, 
  fetchGlobalVaccineData, 
  fetchCountryVaccineData 
} from "./covidApiClient";

export const fetchAllData = async (country: string ) => {
  const [
    allCountriesData, 
    globalDataResponse, 
    statesDataResponse, 
    globalVaccineData, 
    countryVaccineData
  ] = await Promise.all([
    fetchAllCountriesData(),
    fetchGlobalData(),
    fetchStatesData(country),
    fetchGlobalVaccineData(),
    fetchCountryVaccineData(country),
  ]);

  return { 
    allCountriesData, 
    globalDataResponse, 
    statesDataResponse, 
    globalVaccineData, 
    countryVaccineData 
  };
};