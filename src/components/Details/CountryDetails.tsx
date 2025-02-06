import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../dataContext/DataContext";
import CovidCountryData from "./CovidCountryData";
import LoadingSpinner from "../common/LoadingSpinner";
import AnimatedDiv from "../common/AnimatedDiv";
import CountryTable from "./CountryTable";
import CountryStats from "./CountryStats";
import ErrorComponent from "../common/ErrorComponent";


const CountryDetails: React.FC = () => {
  const { countryName } = useParams(); 
  const dataContext = useContext(DataContext);

  if (!dataContext) {
    return <ErrorComponent message="Error: Unable to load data context" />;
  }

  const { countriesData, countryVaccineData, loading, error } = dataContext;

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorComponent message="There was an error loading the data. Please try again later." />;

  const countryData = countriesData.find(
    (country) => country.country === countryName
  );
  const vaccineData = countryVaccineData.find(
    (vaccine) => vaccine.country === countryName
  );
  if (!countryData) {
    return <ErrorComponent message={`No data available for ${decodeURIComponent(countryName || "")}.`} />
  };
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="space-y-8 mt-6">
          <AnimatedDiv>
          <h1 className="text-4xl font-bold mb-16 text-center">
            Details for {decodeURIComponent(countryName || "")}
          </h1>
          </AnimatedDiv>
          <AnimatedDiv className="bg-white p-6 shadow-md rounded-lg">
            <div className="rounded-lg">
             <CovidCountryData
              active={countryData.active}
              recovered={countryData.recovered}
              tests={countryData.tests}
              vaccinated={vaccineData?.total || 0} 
             />
            </div>
          </AnimatedDiv>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <AnimatedDiv className="lg:col-span-2 bg-white p-6 shadow-md rounded-lg">
              <div className="h-96">
              <CountryTable
                  confirmed={countryData.confirmed}
                  deaths={countryData.deaths}
                  recovered={countryData.recovered}
                  active={countryData.active}
                  population={countryData.population}
                  date={countryData.date}
                  vaccinated={vaccineData?.total || 0} 
              />
              </div>
            </AnimatedDiv>
            <AnimatedDiv className="bg-white p-6 shadow-md rounded-lg">
              <CountryStats
                confirmed={countryData.confirmed}
                deaths={countryData.deaths}
              />
            </AnimatedDiv>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
