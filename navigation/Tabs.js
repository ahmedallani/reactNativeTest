import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HomeScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import PathsScreen from "../screens/PathsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { StyleSheet, Text, View } from "react-native";


const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator
      style={styles.shadow}
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#F5F3EB",
          borderRadius: 15,
          height: 90,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.view}>
              <FontAwesome5
                name="home"
                size={25}
                color={focused ? "#C2C272" : "#34494E"}
              />
              <Text>Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.view}>
              <FontAwesome5
                name="map-signs"
                size={25}
                color={focused ? "#C2C272" : "#34494E"}
              />
              <Text>Categories</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Paths"
        component={PathsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.view}>
              <FontAwesome5
                name="map-marked"
                size={25}
                color={focused ? "#C2C272" : "#34494E"}
              />
              <Text>Paths</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.view}>
              <FontAwesome5
                name="user-alt"
                size={25}
                color={focused ? "#C2C272" : "#34494E"}
              />
              <Text>Profile</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  },
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 10,
  }
})

export default Tabs;