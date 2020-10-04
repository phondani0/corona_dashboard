import React from "react";
import { Map as LeafletMap, TileLayer, Circle, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import "./Map.css";

function Map({ countries, casesType, center, zoom }) {

  const numberFormat = (value) => {
    return new Intl.NumberFormat().format(value);
  }

  return (
    <div className="map">
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {countries.map((country, i) => (
          <Circle
            key={i}
            center={[country.countryInfo.lat, country.countryInfo.long]}
            // color={casesTypeColors[casesType].hex}
            color="#ff0000"
            fillColor="#ff0000"
            fillOpacity={0.4}
            radius={
              Math.sqrt(country['cases']) * 800
            }
          >
            <Popup>
              <div className="info-container">
                <div
                  className="info-flag"
                  style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
                ></div>
                <div className="info-name">{country.country}</div>
                <div className="info-confirmed">
                  {/* Cases: {numeral(country.cases).format("0,0")}
                   */}
                  Cases: {numberFormat(country.cases)}
                </div>
                <div className="info-recovered">
                  Recovered: {numberFormat(country.recovered)}
                </div>
                <div className="info-deaths">
                  Deaths: {numberFormat(country.deaths)}
                </div>
              </div>
            </Popup>
          </Circle>
        ))}
      </LeafletMap>
    </div>
  );
}

export default Map;





