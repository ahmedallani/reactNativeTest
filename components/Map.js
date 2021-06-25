import React, { useState, useEffect } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import axios from "react-native-axios";
export const Map = ({navigation}) => {
    console.log(navigation);
  const [marker, setMarker] = useState(null);
  const [lat, setlat] = useState(null);
  const [long, setlong] = useState(null);
  const [place, setplace] = useState([]);


  const url = "192.168.2.192";
  useEffect(() => {
    axios
      .get(`http://${url}:3001/places`)
      .then(({ data }) => {
        setMarker(data);
      })
      .catch((err) => console.error(err));
      getCurrentlocation()
  },[]);
  const getCurrentlocation=()=>{
navigator.geolocation.getCurrentPosition(position => {
    const lat = position.coords.latitude
    const long = position.coords.longitude
    setlat(lat)
    setlong(long)
    getPlaces()
})
  }
  const getPlacesUrl=(lat,long,radius,type=``)=>{
      const baseUrl=`https://maps.googleapis.com/maps/api/place/nearbysearch/json?`
      const location =`location=${lat},${long}&radius=${radius}`
      const typeData = `&types=${type}`
      const api =`&key=AIzaSyDDiLn6ojJRYCCRV7ZruUhFvcMvYlpXva0`
      return `${baseUrl}${location}${typeData}${api}`
  }
  const getPlaces =()=>{
      const markers=[]
      const url = getPlacesUrl(lat,long,500)
      axios.get(`${url}`).then((res)=>res.json()).then((res)=>{
          res.result.map((e,i)=>{
               const marketObj = {}
               marketObj.id = e.id;
               marketObj.name = e.name
               marketObj.photos = e.photos
               marketObj.rating = e.rating
               marketObj.vicinity = e.vicinity
               marketObj.marker ={
                   latitude:e.geometry.location.lat,
                   longitude:e.geometry.location.lng
               };
               markers.push(marketObj)
          })
          setplace(markers)
      })
  }
  return (
    <MapView
      style={{ flex: 1 }}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
    >
      {place && place.map((marker, index) => (
        <Marker
          key={index}
          coordinate={{
            latitude: marker.marker.latitude,
            longitude : marker.marker.longitude
          }}
          title={marker.name}
          description={marker.description}
          
        />
      ))}
    </MapView>
  );
};
