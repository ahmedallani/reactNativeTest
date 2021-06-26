import React, { Component } from "react";
import { DrawerActions } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import { Icon, Button, Container, Header, Content, Left } from "native-base";
import { Map } from "../components/Map";

class HomeScreen extends React.Component {
  render() {
    return (
    
        <Map />
      
    );
  }
}

export default HomeScreen;
