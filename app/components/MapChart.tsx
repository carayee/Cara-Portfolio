"use client";
import Countries from "./countries-110m.json";
import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  createCoordinates,
} from "@vnedyalk0v/react19-simple-maps";

const highlightedCountries = [
  "Canada",
  "United States of America",
  "Mexico",
  "United Kingdom",
  "Italy",
  "Netherlands",
  "Belgium",
  "Germany",
  "Spain",
  "Portugal",
  "Switzerland",
  "France",
  "Czechia",
  "Austria",
  "Tanzania",
  "Kenya",
  "China",
  "South Korea",
  "Japan",
  "Taiwan",
  "Australia",
  "Malaysia",
];

const countryImages: Record<string, string> = {
  Canada: "/visited/canada.jpg",
  "United States of America": "/visited/USA.jpg",
  Mexico: "/visited/mexico.jpg",
  "United Kingdom": "/visited/UK.jpg",
  Italy: "/visited/italy.jpg",
  Netherlands: "/visited/netherlands.jpg",
  Belgium: "/visited/belgium.jpg",
  Germany: "/visited/germany.jpg",
  Spain: "/visited/spain.jpg",
  Portugal: "/visited/portugal.jpg",
  Switzerland: "/visited/switzerland.jpg",
  France: "/visited/france.jpg",
  Czechia: "/visited/czechia.jpg",
  Austria: "/visited/austria.jpg",
  Tanzania: "/visited/tanzania.jpg",
  Kenya: "/visited/kenya.jpg",
  China: "/visited/china.jpg",
  "South Korea": "/visited/southkorea.jpg",
  Japan: "/visited/japan.jpg",
  Taiwan: "/visited/taiwan.jpg",
  Australia: "/visited/australia.jpg",
  Malaysia: "/visited/malaysia.jpg",
};

const MapChart = () => {
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(
    null
  );
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  return (
    <>
      <ComposableMap
        projection="geoEqualEarth"
        projectionConfig={{
          scale: 180,
          center: createCoordinates(15, 0),
        }}
        width={800}
        height={500}
      >
        <Geographies geography={Countries}>
          {({ geographies }) =>
            geographies.map((geo, i) => {
              const isHighlighted = highlightedCountries.includes(
                geo.properties?.name
              );
              const isHovered = hoveredCountry === geo.properties?.name;

              return (
                <Geography
                  key={i}
                  geography={geo}
                  onMouseEnter={(e) => {
                    if (isHighlighted) {
                      setHoveredCountry(geo.properties?.name ?? null);
                      setMousePos({ x: e.clientX, y: e.clientY });
                    }
                  }}
                  onMouseLeave={() => {
                    setHoveredCountry(null);
                    setMousePos(null);
                  }}
                  style={{
                    default: {
                      fill: isHovered
                        ? "#B42"
                        : isHighlighted
                        ? "#E53"
                        : "#D6D6DA",
                      outline: "none",
                    },
                    hover: {
                      fill: isHovered
                        ? "#B42"
                        : isHighlighted
                        ? "#F53"
                        : "#B6B6AA",
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      {hoveredCountry != null &&
        mousePos != null &&
        countryImages[hoveredCountry] != null && (
          <img
            src={countryImages[hoveredCountry] as string}
            alt={hoveredCountry}
            style={{
              position: "fixed" as const,
              top: mousePos.y + 10,
              left: mousePos.x + 10,
              height: 250,
              borderRadius: 8,
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
              pointerEvents: "none" as const,
              zIndex: 1000,
            }}
          />
        )}
    </>
  );
};

export default MapChart;
