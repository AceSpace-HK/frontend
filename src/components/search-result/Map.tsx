import { Complex } from "@/api/complexApi";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

interface MapProps {
  courts: Complex[];
}

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 22.2977,
  lng: 114.1723,
};

const Map = ({ courts }: MapProps) => {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        {courts.map((court) => (
          <Marker
            key={court._id}
            position={{ lat: court.latitude, lng: court.longitude }}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
