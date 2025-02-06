import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../dataContext/DataContext";
import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import LoadingSpinner from "../common/LoadingSpinner";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../common/ErrorMessage";

const MapComponent: React.FC = () => {
  const dataContext = useContext(DataContext);
  const [geoJsonData, setGeoJsonData] = useState<any | null>(null);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const navigate = useNavigate();

  const GEOJSON_URL =
    "https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson";

  useEffect(() => {
    const fetchGeoJson = async () => {
      try {
        const response = await fetch(GEOJSON_URL);
        const data = await response.json();
        setGeoJsonData(data);
      } catch (error) {
        console.error("Error fetching GeoJSON data:", error);
      }
    };

    if (!geoJsonData) fetchGeoJson();
  }, [geoJsonData]);

  if (!dataContext) {
    return <ErrorMessage message="Error: Unable to load data context" />;
  }

  const { countriesData, loading, error } = dataContext;

  if (loading) return <LoadingSpinner />;

  if (error) {
    return <ErrorMessage message="The global COVID-19 map is unavailable.  Please try again later." />
   }

  if (!countriesData || countriesData.length === 0)
    <ErrorMessage message="No data available for countries." />;

  const getCountryStyle = (countryName: string) => ({
    fillColor:
      hoveredCountry === countryName
        ? "rgb(192, 131, 252, 0.5)"
        : "transparent",
    weight: hoveredCountry === countryName ? 2 : 1,
    color:
      hoveredCountry === countryName
        ? "rgb(164, 179, 252)"
        : "rgb(157, 164, 176)",
    fillOpacity: hoveredCountry === countryName ? 0.6 : 0,
  });

  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      className="h-full w-full rounded-lg cursor-pointer"
      worldCopyJump={true}
    >
      <TileLayer
        url="https://api.mapbox.com/styles/v1/YOUR_USERNAME/YOUR_STYLE_ID/tiles/256/{z}/{x}/{y}@2x?access_token=YOUR_ACCESS_TOKEN"
        attribution='&copy; <a href="https://www.mapbox.com/">Mapbox</a>'
      />
      <div className="absolute inset-0 bg-gray-800 pointer-events-none z-10"></div>
      {geoJsonData && (
        <GeoJSON
          data={geoJsonData}
          style={(feature) => {
            if (!feature || !feature.properties) return {};
            return getCountryStyle(feature.properties.ADMIN);
          }}
          onEachFeature={(feature, layer) => {
            if (!feature || !feature.properties) return;
            const countryData = countriesData.find(
              (c) => c.country === feature.properties.ADMIN
            );

            layer.on({
              mouseover: () => setHoveredCountry(feature.properties.ADMIN),
              mouseout: () => setHoveredCountry(null),
              click: () => {
                const countryName = encodeURIComponent(
                  feature.properties.ADMIN
                ); 
                console.log(`Navigating to /country/${countryName}`);
                navigate(`/country/${countryName}`);
              },
            });

            layer.bindTooltip(
              `
              <div class="p-2 text-sm bg-gray-800 text-white rounded shadow-md border border-gray-700">
              <h3 class="font-bold">${feature.properties.ADMIN}</h3>
              <p><strong>Confirmed:</strong> ${
                countryData?.confirmed?.toLocaleString() || "N/A"
              }</p>
              <p><strong>Deaths:</strong> ${
                countryData?.deaths?.toLocaleString() || "N/A"
              }</p>
              </div>
              `,
              { permanent: false, className: "tooltip-custom" }
            );
          }}
        />
      )}
    </MapContainer>
  );
};

export default MapComponent;
