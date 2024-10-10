import React from 'react';
import { MapContainer, TileLayer, CircleMarker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const travels = [
  // Cities lived in
  { name: "Melbourne", position: [-37.8136, 144.9631], size: "large" },
  { name: "London", position: [51.5074, -0.1278], size: "large" },
  { name: "Geelong", position: [-38.1499, 144.3617], size: "large" },
  { name: "Bangkok", position: [13.7563, 100.5018], size: "large" },
  { name: "Chiang Mai", position: [18.7883, 98.9853], size: "large" },
  { name: "Austin", position: [30.2672, -97.7431], size: "large" },

  // Cities visited 2 times or more
  { name: "Tokyo", position: [35.6762, 139.6503], size: "medium" },
  { name: "New York", position: [40.7128, -74.0060], size: "medium" },
  { name: "Seattle", position: [47.6062, -122.3321], size: "medium" },
  { name: "Orlando", position: [28.5383, -81.3792], size: "medium" },
  { name: "Dallas", position: [32.7767, -96.7970], size: "medium" },
  { name: "San Diego", position: [32.7157, -117.1611], size: "medium" },
  { name: "Barcelona", position: [41.3851, 2.1734], size: "medium" },
  { name: "Cancun", position: [21.1619, -86.8515], size: "medium" },
  { name: "Playa del Carmen", position: [20.6296, -87.0739], size: "medium" },
  { name: "Tulum", position: [20.2114, -87.4654], size: "medium" },
  { name: "Sydney", position: [-33.8688, 151.2093], size: "medium" },
  { name: "Singapore", position: [1.3521, 103.8198], size: "medium" },
  { name: "Phoenix", position: [33.4484, -112.0740], size: "medium" },
  { name: "Salt Lake City", position: [40.7608, -111.8910], size: "medium" }, // Assuming this for Utah

  // Cities visited once
  { name: "Vientiane", position: [17.9757, 102.6331], size: "small" },
  { name: "Luang Prabang", position: [19.8867, 102.1350], size: "small" },
  { name: "Pakse", position: [15.1208, 105.8185], size: "small" },
  { name: "Phnom Penh", position: [11.5564, 104.9282], size: "small" },
  { name: "Siem Reap", position: [13.3633, 103.8564], size: "small" },
  { name: "Battambang", position: [13.1035, 103.1994], size: "small" },
  { name: "Denpasar", position: [-8.6705, 115.2126], size: "small" },
  { name: "Ho Chi Minh City", position: [10.8231, 106.6297], size: "small" },
  { name: "Hanoi", position: [21.0285, 105.8542], size: "small" },
  { name: "Da Nang", position: [16.0545, 108.2022], size: "small" },
  { name: "Tachilek", position: [20.4475, 99.8808], size: "small" },
  { name: "Copenhagen", position: [55.6761, 12.5683], size: "small" },
  { name: "Paris", position: [48.8566, 2.3522], size: "small" },
  { name: "Rome", position: [41.9028, 12.4964], size: "small" },
  { name: "Madrid", position: [40.4168, -3.7038], size: "small" },
  { name: "San Sebastian", position: [43.3183, -1.9812], size: "small" },
  { name: "Valencia", position: [39.4699, -0.3763], size: "small" },
  { name: "Istanbul", position: [41.0082, 28.9784], size: "small" },
  { name: "Sao Paulo", position: [-23.5505, -46.6333], size: "small" },
  { name: "Kauai", position: [22.0964, -159.5261], size: "small" },
  { name: "Honolulu", position: [21.3069, -157.8583], size: "small" },
  { name: "Yasawa Islands", position: [-16.9167, 177.3667], size: "small" },
  { name: "Berlin", position: [52.5200, 13.4050], size: "small" },
  { name: "El Nido", position: [11.1814, 119.4120], size: "small" },
  { name: "Koh Tao", position: [10.0956, 99.8404], size: "small" },
  { name: "Koh Phi Phi", position: [7.7407, 98.7784], size: "small" },
  { name: "Koh Samui", position: [9.5120, 100.0136], size: "small" },
  { name: "Koh Phangan", position: [9.7348, 100.0208], size: "small" },
  { name: "Adelaide", position: [-34.9285, 138.6007], size: "small" },
  { name: "Brisbane", position: [-27.4698, 153.0251], size: "small" },
  { name: "Gold Coast", position: [-28.0167, 153.4000], size: "small" },
  { name: "Mumbai", position: [19.0760, 72.8777], size: "small" },
  { name: "Manila", position: [14.5995, 120.9842], size: "small" },
  { name: "Kuala Lumpur", position: [3.1390, 101.6869], size: "small" },
  { name: "Vancouver", position: [49.2827, -123.1207], size: "small" },
  { name: "Munich", position: [48.1351, 11.5820], size: "small" }, // Oktoberfest city
  { name: "Nassau", position: [25.0480, -77.3554], size: "small" }, // Bahamas capital
  { name: "Brussels", position: [50.8503, 4.3517], size: "small" },
  { name: "Prague", position: [50.0755, 14.4378], size: "small" }, // Czech Republic
  { name: "Brno", position: [49.1951, 16.6068], size: "small" }, // Czech Republic
  { name: "Ostrava", position: [49.8209, 18.2625], size: "small" }, // Czech Republic
  { name: "Amsterdam", position: [52.3676, 4.9041], size: "small" },
  { name: "Gallipoli", position: [40.4092, 26.6708], size: "small" },
  { name: "Hamburg", position: [53.5511, 9.9937], size: "small" },
  { name: "Chon Buri", position: [13.3611, 100.9847], size: "small" },
  { name: "Mae Sai", position: [20.4335, 99.8762], size: "small" },
  { name: "Chiang Rai", position: [19.9105, 99.8406], size: "small" },
];

const TravelMapComponent = () => {
  const getMarkerSize = (size) => {
    switch(size) {
      case "large": return 10;
      case "medium": return 6;
      case "small": return 3;
      default: return 3;
    }
  };

  return (
    <MapContainer 
      center={[20, 0]} 
      zoom={2} 
      style={{ height: '600px', width: '100%', backgroundColor: '#1a202c' }}
      zoomControl={false}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />
      {travels.map(city => (
        <CircleMarker
          key={city.name}
          center={city.position}
          radius={getMarkerSize(city.size)}
          fillColor="#FFA500"
          color="#FFFFFF"
          weight={1}
          opacity={1}
          fillOpacity={0.8}
        />
      ))}
    </MapContainer>
  );
}

export default TravelMapComponent;