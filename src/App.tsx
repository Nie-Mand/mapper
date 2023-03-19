import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import ReactLeafletGoogleLayer from "react-leaflet-google-layer";
import "leaflet/dist/leaflet.css";

const data = [
  {
    id: 1,
    metadata: "hey",
    position: [36.391783, 10.55166],
  },
];

const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

function App() {
  // IF JS: const position = [36.3759586, 10.5428839]
  const position: any = [36.3759586, 10.5428839];

  function handleMarkerClick(id, metadata) {
    return (e) => {
      console.log(e.latlng);
      const { lat, lng } = e.latlng;
      console.log({
        id,
        metadata,
        lat,
        lng,
      });
    };
  }

  return (
    <div>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <ReactLeafletGoogleLayer apiKey={googleMapsApiKey} type={"satellite"} />

        {data.map((v) => (
          <Marker
            key={v.id}
            position={position}
            eventHandlers={{
              click: handleMarkerClick(v.id, v.metadata),
            }}
          />
        ))}
      </MapContainer>
    </div>
  );
}

export default App;
