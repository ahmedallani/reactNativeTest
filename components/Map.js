import React, { useState, useEffect } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import axios from "react-native-axios";
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import MapViewDirections from "react-native-maps-directions"
export const Map = ({place, lat, long, user, setUser, url } ) => {
    // console.log(navigation);
//   const [marker, setMarker] = useState(null);
//   const [lat, setlat] = useState(null);
//   const [long, setlong] = useState(null);
//   const [place, setplace] = useState([]);


//   const url = "https://fc08081baf35.ngrok.io/";;
//   useEffect(() => {
//     axios
//       .get(`http://${url}/places`)
//       .then(({ data }) => {
//         setMarker(data);
//       })
//       .catch((err) => console.error(err));
//       getCurrentlocation()
//   },[]);
//   const  getCurrentlocation=async()=>{
    
//         if (Platform.OS === 'android' && !Constants.isDevice) {
//             console.log(
//             'Oops, this will not work on Snack in an Android emulator. Try it on your device!'
//           );
//           return;
//         }
//         let { status } = await Location.requestForegroundPermissionsAsync();
//         if (status !== 'granted') {
//             console.log('Permission to access location was denied');
//           return;
//         }
  
//         let location = await Location.getCurrentPositionAsync({});
       
// //  navigator.geolocation.getCurrentPosition(position => {
//     console.log(location);
//     const lat = location.coords.latitude
//     const long = location.coords.longitude
//     setlat(lat)
//     setlong(long)
//     getPlaces()
// // })
//   }
//   const getPlacesUrl=(lat,long,radius=500,type=``)=>{
//       const baseUrl=`https://maps.googleapis.com/maps/api/place/nearbysearch/json?`
//       const location =`location=${lat},${long}&radius=${radius}`
//       const typeData = `&types=${type}`
//       const api =`&key=AIzaSyDDiLn6ojJRYCCRV7ZruUhFvcMvYlpXva0`
//       return `${baseUrl}${location}${typeData}${api}`
//   }
//   const getPlaces =()=>{
//       const markers=[]
//       const url = getPlacesUrl(lat,long,500)
//       axios.get(`${url}`).then((res)=>{
//           console.log(res);
//           res.results.map((e,i)=>{
//                const marketObj = {}
//                marketObj.id = e.id;
//                marketObj.name = e.name
//                marketObj.photos = e.photos
//                marketObj.rating = e.rating
//                marketObj.vicinity = e.vicinity
//                marketObj.marker ={
//                    latitude:e.geometry.location.lat,
//                    longitude:e.geometry.location.lng
//                };
//                markers.push(marketObj)
//           })
//           setplace(markers)
//       })
//   }
  return (
    <MapView
      style={{ flex: 1 }}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{ latitude:lat,longitude:long,latitudeDelta:0.0922,longitudeDelta:0.0421}}
      followUserLocation={true}
      zoomEnabled={true}
      pitchEnabled={true}
      showsCompass={true}
      showsBuildings={true}
      showsTraffic={true}
      showsIndoors={true}
    
    >
      {place.map((mark, index) => (
        
        <Marker
          key={index}
          coordinate={{
            latitude: 36.909721,
            longitude : 10.286667
          }}
          title={mark.name}
          image={mark.icon}
          onPress={() =>console.log('hello there')}
          
        />
      ))}
    </MapView>
  );
};
