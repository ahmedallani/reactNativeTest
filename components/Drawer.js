import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import WishListScreen from "../screens/WishListScreen";
import PathsScreen from "../screens/PathsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SignOutScreen from "../screens/SignOutScreen";
import { Container, Content, Header, Body, Icon } from "native-base";
import Category from "./Categories.js";
import Beach from "./BeachList";

import { Map } from "./Map";
import Profile from "./Profile.js";

const Drawer = createDrawerNavigator();

const SideBar = ({ place, lat, long, user, setUser, url }) => {
   const MapRoute = ({ navigation }) => (
    <Map
      setUser={setUser}
      url={url}
      navigation={navigation}
      place={place}
      lat={lat}
      long={long}
    />
    );
    const ProfileRoute = ({ navigation }) => (
      <Profile user={user} url={url} navigation={navigation} />
    );
    const CategoryRoute = ({ navigation }) => (
      <Category url={url} setUser={setUser} navigation={navigation} />
    );
    const BeachRoute = ({ navigation }) => (
      <Beach url={url} setUser={setUser} navigation={navigation} />
    );
  return (
    
      <Drawer.Navigator
        drawerStyle={{ backgroundColor: "#F5F3EB" }}

        initialRouteName="Home"
        hideStatusBar={true}
        screenOptions={{
          headerShown: true,
          headerTitleAlign: "left",
          headerTintColor: "#34494E",
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: "bold",
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          component={MapRoute}
          options={{
            title: "Home",
            drawerIcon: ({ focused }) => {
              return (
                <FontAwesome5
                  name="home"
                  size={focused ? 18 : 20}
                  color={focused ? "#C2C272" : "#34494E"}
                />
              );
            },
          }}
        />
        <Drawer.Screen
          name="Categories"
          component={CategoryRoute}
          options={{
            title: "Categories",
            drawerIcon: ({ focused }) => {
              return (
                <FontAwesome5
                  name="map-signs"
                  size={focused ? 18 : 20}
                  color={focused ? "#C2C272" : "#34494E"}
                />
              );
            },
          }}
        />
        <Drawer.Screen
          name="WishList"
          component={WishListScreen}
          options={{
            title: "WishList",
            drawerIcon: ({ focused }) => {
              return (
                <FontAwesome5
                  name="map-marker"
                  size={focused ? 18 : 20}
                  color={focused ? "#C2C272" : "#34494E"}
                />
              );
            },
          }}
        />
        <Drawer.Screen
          name="Paths"
          component={PathsScreen}
          options={{
            title: "Paths",
            drawerIcon: ({ focused }) => {
              return (
                <FontAwesome5
                  name="map-marked"
                  size={focused ? 18 : 20}
                  color={focused ? "#C2C272" : "#34494E"}
                />
              );
            },
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={ProfileRoute}
          options={{
            title: "Profile",
            drawerIcon: ({ focused }) => {
              return (
                <FontAwesome5
                  name="user-alt"
                  size={focused ? 18 : 20}
                  color={focused ? "#C2C272" : "#34494E"}
                />
              );
            },
          }}
        />
        <Drawer.Screen
          name="SignOut"
          component={SignOutScreen}
          options={{
            title: "Sign Out",
            drawerIcon: ({ focused }) => {
              return (
                <FontAwesome5
                  name="lock"
                  size={focused ? 18 : 20}
                  color={focused ? "#C2C272" : "#34494E"}
                />
              );
            },
          }}
        />
      </Drawer.Navigator>
   
  );
};

const styles = StyleSheet.create({
  img: {
    position: "absolute",
    width: 62,
    height: 62,
    left: 30,
    top: 36,
  },
  text: {
    position: "absolute",
    width: 150,
    height: 54,
    left: 100,
    top: 50,
    fontWeight: "bold",
    fontSize: 25,
    color: "#C2C272",
  },
});

export default SideBar;
