// src/pages/Chennai.js

import React, { useEffect, useRef } from 'react';

const Chennai = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const loadMap = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 13.0827, lng: 80.2707 }, // Coordinates for Chennai
        zoom: 13,
      });

      const locations = [
        { lat: 13.0878, lng: 80.2785, name: 'PG 1' },
        { lat: 13.0825, lng: 80.2785, name: 'PG 2' },
        { lat: 13.0710, lng: 80.2830, name: 'PG 3' },
      ];

      locations.forEach((location) => {
        const marker = new window.google.maps.Marker({
          position: { lat: location.lat, lng: location.lng },
          map,
          title: location.name,
        });

        const infoWindow = new window.google.maps.InfoWindow({
          content: `<div><strong>${location.name}</strong><br>Click for details!</div>`,
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });
      });
    };

    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA7bUUMSsk6FFCAedwXN1PHWmxvpv64UaU&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = loadMap;
      document.head.appendChild(script);
    } else {
      loadMap();
    }
  }, []);

  return (
    <div>
      <h1>Chennai PG Locations</h1>
      <div
        ref={mapRef}
        style={{ width: '100%', height: '500px', margin: '20px auto', borderRadius: '10px' }}
      ></div>
    </div>
  );
};

export default Chennai;
