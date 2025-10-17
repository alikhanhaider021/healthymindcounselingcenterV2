"use client";

import React, { useEffect, useState } from "react";

const position = [29.5521, -81.2161]; // Palm Coast location

export default function FooterMap() {
  const [leaflet, setLeaflet] = useState(null);

  useEffect(() => {
    // dynamic client-only import
    let mounted = true;
    (async () => {
      const L = (await import("leaflet")).default;
      const rl = await import("react-leaflet");
      // import CSS only on client
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

  // Make sure this image exists: public/images/marker-icon.png
  const customIcon = new L.Icon({
    iconUrl: "/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  return (
    <div className="w-full h-80 rounded-xl overflow-hidden shadow-lg">
      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }} // match wrapper size
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
