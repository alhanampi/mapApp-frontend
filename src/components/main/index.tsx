import { useState, FC } from "react";
import Map, {Marker} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MainDiv, MapContainer } from "./styles";

const MainContainer: FC = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.8,
    longitude: -122.4,
    zoom: 14
  });

  const mapApiKey = process.env.REACT_APP_MAPBOX_API_KEY;

  return (
    <MainDiv>
      <MapContainer>
      <Map
        {...viewport}
        onMove={(viewport: any) => setViewport(viewport)}
        mapboxAccessToken={mapApiKey}
        mapStyle="mapbox://styles/mapbox/streets-v9"

      >
         <Marker longitude={-122.4} latitude={37.8} color="red" />
      </Map> 
      </MapContainer>
    </MainDiv>
  );
};

export default MainContainer;
