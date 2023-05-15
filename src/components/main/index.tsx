import { useState, FC } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MainDiv, MapContainer, PopupCard } from "./styles";
import { mapStyles } from "../../utils/constants";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const MainContainer: FC = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.8,
    longitude: -122.4,
    zoom: 6,
  });
  const [marker, setMarker] = useState({
    longitude: -122.4,
    latitude: 37.8,
    color: "red",
  });
  const [popup, setPopup] = useState(true);

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
          <Marker
            longitude={marker.longitude}
            latitude={marker.latitude}
            color={marker.color}
            onClick={() => setPopup(!popup)}
          />

          {popup && (
            <Popup
              longitude={marker.longitude + 0.1}
              latitude={marker.latitude + 0.1}
              closeButton={true}
              closeOnClick={false}
              onClose={() => setPopup(!false)}
              anchor="left"
            >
              <PopupCard>
                <label htmlFor="">Place</label>
                <h4 className="place">Lugar</h4>
                <label htmlFor="">Review</label>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis voluptatem minus autem dicta aperiam, illo iusto sunt. Enim totam eum vitae modi, ullam, earum aliquam, pariatur assumenda quasi minus eveniet!</p>
                <label htmlFor="">Rating</label>
                <div className="stars">
                  <AiFillStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </div>
                <label htmlFor="">Information</label> <br />
                <span className="username">
                  Created by <b>user </b>
                </span>
                <span className="date">some time ago</span>
              </PopupCard>
            </Popup>
          )}
        </Map>
      </MapContainer>
    </MainDiv>
  );
};

export default MainContainer;
