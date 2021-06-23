import React, { useState, useEffect } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import axios from "react-native-axios";
export const Map = ({ url }) => {
  const [marker, setMarker] = useState(null);
  useEffect(() => {
    axios
      .get(`http://${url}:3001/places`)
      .then(({ data }) => {
        setMarker(data);
      })
      .catch((err) => console.error(err));
  },[]);
  return (
    <MapView
      style={{ flex: 1 }}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
    >
      {marker && marker.map((marker, index) => (
        <Marker
          key={index}
          coordinate={{
            latitude: marker.lang,
            longitude : marker.long
          }}
          title={marker.name}
          description={marker.description}
          image={marker.picture}
        />
      ))}
    </MapView>
  );
};
