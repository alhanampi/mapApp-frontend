import { useState, FC } from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MainDiv, MapContainer } from "./styles";
import { mapStyles } from "../../utils/constants";

const MainContainer: FC = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.8,
    longitude: -122.4,
    zoom: 6,
  });
  const [marker, setMarker] = useState({
    longitude: -122.4,
    latitude: 37.8,
    color: "red"
  })

  const mapApiKey = process.env.REACT_APP_MAPBOX_API_KEY;

  return (
    <MainDiv>
      <MapContainer>
        <Map
          initialViewState={viewport}
          style={{ width: 1920, height: 1080 }}
          mapStyle={mapStyles.streets}
          mapboxAccessToken={mapApiKey}
        >
          <Marker longitude={marker.longitude} latitude={marker.latitude} color={marker.color} />
        </Map>
        </MapContainer>
    </MainDiv>
  );
};

export default MainContainer;
