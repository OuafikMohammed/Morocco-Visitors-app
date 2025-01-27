import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const monuments = [
  { name: "Hassan II Mosque", lat: 33.6087, lng: -7.6328 },
  { name: "Chefchaouen Medina", lat: 35.1714, lng: -5.2699 },
  { name: "Ait Benhaddou", lat: 31.0497, lng: -7.1313 },
  { name: "Fes El Bali", lat: 34.0638, lng: -4.9778 },
  { name: "Volubilis", lat: 34.0744, lng: -5.5553 },
  { name: "Jemaa el-Fnaa", lat: 31.6258, lng: -7.9891 },
  { name: "Kasbah of the Udayas", lat: 34.0269, lng: -6.8225 },
  { name: "Mausoleum of Mohammed V", lat: 34.0058, lng: -6.8322 },
];

export default function MoroccoMap() {
  useEffect(() => {
    // Initialize the map
    const map = L.map("map").setView([31.7917, -7.0926], 6); // Center on Morocco

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add markers for each monument
    monuments.forEach((monument) => {
      L.marker([monument.lat, monument.lng])
        .addTo(map)
        .bindPopup(monument.name);
    });

    // Cleanup on unmount
    return () => {
      map.remove();
    };
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Morocco Map</h1>
      </div>
      <div id="map" style={{ width: "100%", height: "100vh", zIndex: 10 }}></div>
    </>
  );
}