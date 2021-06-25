import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import Splash from "./components/Splash.js";
import Profile from "./components/Profile.js";
import Signin from "./components/Signin.js";
import Signup from "./components/Signup.js";
// import Beach from "./components/BeachList";
import FooterBar from "./navigation/FooterBar.js";
import { Map } from "./components/Map";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import axios from "react-native-axios";
import Constants from "expo-constants";
import * as Location from "expo-location";
import SideBar from "./components/Drawer";
const Stack = createStackNavigator();

function MyStack({ place, lat, long, user, setUser, url }) {
  // const MapRoute = ({ navigation }) => (
  //   <Map
  //     setUser={setUser}
  //     url={url}
  //     navigation={navigation}
  //     place={place}
  //     lat={lat}
  //     long={long}
  //   />
  //   );
    // const ProfileRoute = ({ navigation }) => (
    //   <Profile user={user} url={url} navigation={navigation} />
    // );
    // const CategoryRoute = ({ navigation }) => (
    //   <Header url={url} setUser={setUser} navigation={navigation} />
    // );
    // const BeachRoute = ({ navigation }) => (
    //   <Beach url={url} setUser={setUser} navigation={navigation} />
    // );
  const SideBarRoute = () => (
    <SideBar
      user={user}
      url={url}
      setUser={setUser}
      url={url}
      place={place}
      lat={lat}
      long={long}
    />
  );
  const SigninRoute = ({ navigation }) => (
    <Signin url={url} setUser={setUser} navigation={navigation} />
  );
  const SignupRoute = ({ navigation }) => (
    <Signup url={url} setUser={setUser} navigation={navigation} />
  );
<<<<<<< HEAD
=======
  // const BeachRoute = ({ navigation }) => (
  //   <Beach url={url} setUser={setUser} navigation={navigation} />
  // );
>>>>>>> c16109ba2c4c07c02892a3f447853958d36e6909

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Splash} />
      <Stack.Screen name="Signin" component={SigninRoute} />
      <Stack.Screen name="Signup" component={SignupRoute} />
      {/* <Stack.Screen name="Map" component={MapRoute} /> */}
      {/* <Stack.Screen name="Beach" component={BeachRoute} />
      <Stack.Screen name="Profile" component={ProfileRoute} />
      <Stack.Screen name="Header" component={CategoryRoute} /> */}
      <Stack.Screen name="Sidebar" component={SideBarRoute} />
    </Stack.Navigator>
  );
}

function App() {
  const hello = "hello";
  const [marker, setMarker] = useState(null);

  const [user, setUser] = useState(null);
  const url = "192.168.2.192";
  const [lat, setlat] = useState(null);
  const [long, setlong] = useState(null);
  const [place, setplace] = useState([]);

  useEffect(() => {
    axios
      .get(`http://${url}:3001/places`)
      .then(({ data }) => {
        setMarker(data);
      })
      .catch((err) => console.error(err));
    getCurrentlocation();
  }, []);
  const getCurrentlocation = async () => {
    if (Platform.OS === "android" && !Constants.isDevice) {
      console.log(
        "Oops, this will not work on Snack in an Android emulator. Try it on your device!"
      );
      return;
    }
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    // console.log('local',location.coords);
    //  navigator.geolocation.getCurrentPosition(position => {

    const lat = location.coords.latitude;
    const long = location.coords.longitude;
    setlat(lat);
    setlong(long);
    getPlaces();
    // })
  };
  const getPlacesUrl = (lat, long, radius = 500, type = ``) => {
    const baseUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?`;
    const location = `location=${lat},${long}&radius=${radius}`;
    const typeData = `&types=${type}`;
    const api = `&key=AIzaSyDDiLn6ojJRYCCRV7ZruUhFvcMvYlpXva0`;
    return `${baseUrl}${location}${typeData}${api}`;
  };
  const getPlaces = () => {
    const markers = [];
    const url = getPlacesUrl(lat, long, 1000);
    axios.get(`${url}`).then((res) => {
      res.results.map((e, i) => {
        const marketObj = {};
        marketObj.id = e.id;
        marketObj.name = e.name;
        marketObj.photos = e.photos;
        marketObj.rating = e.rating;
        marketObj.vicinity = e.vicinity;
        marketObj.marker = {
          latitude: e.geometry.location.lat,
          longitude: e.geometry.location.lng,
        };
        markers.push(marketObj);
      });
      setplace(markers);
    });
  };
  return (
    <NavigationContainer>
      <MyStack
        user={user}
        setUser={setUser}
        url={url}
        place={place}
        lat={lat}
        long={long}
      />
    </NavigationContainer>
  );
}

export default App;
