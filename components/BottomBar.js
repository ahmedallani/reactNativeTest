import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Image, Text, View } from "react-native";
import Tabs from "../navigation/Tabs";


const BottomBar = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
});

export default BottomBar;
