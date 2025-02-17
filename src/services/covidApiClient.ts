import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

// Fetch data of all countries
export const fetchAllCountriesData = async () => {
  const response = await apiClient.get("/countries");
  return response.data;
};

// Fetch global data
export const fetchGlobalData = async () => {
  const response = await apiClient.get("/all");
  return response.data;
};

// Fetch data of states (e.g., USA)
export const fetchStatesData = async (iso: string = "USA") => {
  const response = await apiClient.get("/states");
  return response.data;
};

// Fetch vaccination data for a specific country
export const fetchCountryVaccineData = async (country: string) => {
  const response = await apiClient.get("/vaccine/coverage/countries");
  return response.data; 
};



