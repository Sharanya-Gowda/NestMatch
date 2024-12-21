import React, { useEffect, useRef } from 'react';

const Bangalore = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const loadMap = () => {
      // Check if the map container element exists before initializing the map
      if (mapRef.current) {
        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat: 12.9716, lng: 77.5946 }, // Coordinates for Bangalore
          zoom: 13,
        });

        const locations = [
          { lat: 12.9752, lng: 77.5920, name: 'PG 1' },
          { lat: 12.9718, lng: 77.6410, name: 'PG 2' },
          { lat: 12.9634, lng: 77.5852, name: 'PG 3' },
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
      }
    };

    // Check if Google Maps script is already loaded
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA7bUUMSsk6FFCAedwXN1PHWmxvpv64UaU&libraries=places`; // Replace with your actual API key
      script.async = true;
      script.defer = true;
      script.onload = loadMap;
      document.head.appendChild(script);
    } else {
      loadMap(); // If Google Maps is already loaded, initialize the map
    }
  }, []);

  return (
    <div>
      <h1>Bangalore PG Locations</h1>
      <div
        ref={mapRef}
        style={{ width: '100%', height: '500px', margin: '20px auto', borderRadius: '10px' }}
      ></div>
    </div>
  );
};

export default Bangalore;
