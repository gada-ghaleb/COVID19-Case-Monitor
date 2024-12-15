import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../dataContext/DataContext";
import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import LoadingSpinner from "../common/LoadingSpinner";

const MapComponent: React.FC = () => {
  const dataContext = useContext(DataContext);
  const [geoJsonData, setGeoJsonData] = useState<any | null>(null);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  const geoJsonUrl =
    "https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson";

  useEffect(() => {
    const fetchGeoJson = async () => {
      try {
        const response = await fetch(geoJsonUrl);
        const data = await response.json();
        setGeoJsonData(data);
      } catch (error) {
        console.error("Error fetching GeoJSON data:", error);
      }
    };

    fetchGeoJson();
  }, []);

  if (!dataContext) {
    return <p>Error: Unable to load data context</p>;
  }

  const { countriesData, lastUpdate, loading, error } = dataContext;

  if (loading) return <LoadingSpinner />;

  if (error) {
    return <p>Error loading data: {error}</p>;
  }

  if (!countriesData || countriesData.length === 0) {
    return <p>No data available for countries.</p>;
  }

  const getCountryStyle = (countryName: string) => ({
    fillColor:
      hoveredCountry === countryName ? "rgb(192, 131, 252)" : "transparent",
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
      className="h-full w-full rounded-lg"
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
            });

            layer.bindTooltip(
              `
                <h3>${feature.properties.ADMIN}</h3>
                <p><strong>Confirmed:</strong> ${
                  countryData?.confirmed?.toLocaleString() || "N/A"
                }</p>
                <p><strong>Deaths:</strong> ${
                  countryData?.deaths?.toLocaleString() || "N/A"
                }</p>
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
