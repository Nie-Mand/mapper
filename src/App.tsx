import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import ReactLeafletGoogleLayer from "react-leaflet-google-layer";

const data = [
  {
    id: 1,
    metadata: "hey",
    position: [36.3759586, 10.5428839],
  },
];

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
        <ReactLeafletGoogleLayer
          apiKey="AIzaSyDi4EE5gzhlkVgdkTefE-irT7AivylpaGo"
          type={"satellite"}
        />

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
