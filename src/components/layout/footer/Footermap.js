"use client";

import React, { useEffect, useState } from "react";

const position = [29.5521, -81.2161]; // Palm Coast location

export default function FooterMap() {
  const [leaflet, setLeaflet] = useState(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const L = (await import("leaflet")).default;
      const rl = await import("react-leaflet");
      await import("leaflet/dist/leaflet.css");

      if (!mounted) return;
      setLeaflet({
        L,
        MapContainer: rl.MapContainer,
        TileLayer: rl.TileLayer,
        Marker: rl.Marker,
        Popup: rl.Popup,
      });
    })();

    return () => {
      mounted = false;
    };
  }, []);

  if (!leaflet) {
    return (
      <div className="w-full h-80 rounded-xl overflow-hidden shadow-lg flex items-center justify-center bg-gray-50">
        <p>Loading map…</p>
      </div>
    );
  }

  const { L, MapContainer, TileLayer, Marker, Popup } = leaflet;

  // Custom pointed icon
  const customIcon = new L.DivIcon({
    html: `
      <div style="
        position: relative;
        width: 20px;
        height: 20px;
        background-color: #ff4d4d;
        border-radius: 50%;
        border: 2px solid white;
        box-shadow: 0 0 10px rgba(255, 77, 77, 0.7);
        animation: pulse 1.5s infinite;
      ">
      </div>
      <style>
        @keyframes pulse {
          0% { transform: scale(0.9); opacity: 1; }
          70% { transform: scale(1.3); opacity: 0.4; }
          100% { transform: scale(0.9); opacity: 1; }
        }
      </style>
    `,
    className: "",
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });

  return (
    <div className="w-full h-80 rounded-xl overflow-hidden shadow-lg">
      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={false}
        zoomControl={false} // hide + / - zoom buttons
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
            <b>Healthy Mind Counseling Center</b>
            <br />
            395 Palm Coast Parkway SW, Suite 4
            <br />
            Palm Coast, FL 32137
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
