'use client';

import dynamic from 'next/dynamic';

const TravelMap = dynamic(() => import('./TravelMapComponent'), {
  ssr: false,
  loading: () => <p>Loading map...</p>
});

export default TravelMap;