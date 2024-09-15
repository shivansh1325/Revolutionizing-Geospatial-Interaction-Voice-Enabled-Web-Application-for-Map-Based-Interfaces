import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { useMapEvents } from "react-leaflet";

export default function MapComponent() {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      className="w-full h-full rounded-lg" // Tailwind styling for map container
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
}
