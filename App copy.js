import React, { useState } from "react";
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
import Signin from "./components/SignIn.js";
import Signup from "./components/SignUp.js";
import Header from "./components/Categories.js";
import Beach from "./components/BeachList";
import FooterBar from "./navigation/FooterBar.js";
import { Map } from "./components/Map";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();

function MyStack({ user, setUser, url }) {
  const MapRoute = (props) => (
    <Map setUser={setUser} url={url} navigation={props}/>
  );
  const ProfileRoute = ({ navigation }) => (
    <Profile user={user} url={url} navigation={navigation} />
  );
  const CategoryRoute = ({ navigation }) => (
    <Header url={url} setUser={setUser} navigation={navigation} />
  );
  const SigninRoute = ({ navigation }) => (
    <Signin url={url} setUser={setUser} navigation={navigation} />
  );
  const SignupRoute = ({ navigation }) => (
    <Signup url={url} setUser={setUser} navigation={navigation} />
  );
  const BeachRoute = ({ navigation }) => (
    <Beach url={url} setUser={setUser} navigation={navigation} />
  );

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Splash} />
      <Stack.Screen name="Signin" component={SigninRoute} />
      <Stack.Screen name="Signup" component={SignupRoute} />
      <Stack.Screen name="Map" component={MapRoute} />
      <Stack.Screen name="Beach" component={BeachRoute} />
      <Stack.Screen name="Profile" component={ProfileRoute} />
      <Stack.Screen name="Header" component={CategoryRoute} />
    </Stack.Navigator>
  );
}

function App() {
  const hello = "hello";

  const [user, setUser] = useState(null);
  const url = "https://fc08081baf35.ngrok.io/";;
  return (
    <NavigationContainer>
      <MyStack user={user} setUser={setUser} url={url} />
    </NavigationContainer>
  );
}


export default App;
