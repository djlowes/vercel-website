'use client'

import { useState, useEffect } from 'react'
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"
import { feature } from "topojson-client"
import world from "world-atlas/countries-110m.json"

const cities = [
  { name: "New York", coordinates: [-74.006, 40.7128] },
  { name: "London", coordinates: [-0.1276, 51.5074] },
  { name: "Tokyo", coordinates: [139.6917, 35.6895] },
  // Add more cities you've visited
]

export default function MapChart() {
  const [geographies, setGeographies] = useState([])

  useEffect(() => {
    setGeographies(feature(world, world.objects.countries).features)
  }, [])

  return (
    <ComposableMap
      projection="geoEqualEarth"
      projectionConfig={{
        scale: 140,
        center: [0, 0]
      }}
    >
      <Geographies geography={geographies}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#3c3c3c"
              stroke="#808080"
              strokeWidth={0.5}
            />
          ))
        }
      </Geographies>
      {cities.map((city) => (
        <Marker key={city.name} coordinates={city.coordinates}>
          <circle r={4} fill="#FFA500" />
        </Marker>
      ))}
    </ComposableMap>
  )
}