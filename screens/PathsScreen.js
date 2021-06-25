import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon, Button, Container, Header, Content, Left } from "native-base";

const PathsScreen = ({navigation}) => {
  return (
   
      <View
        contentContainerStyle={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text  onPress={() =>navigation.navigate('WishList')}>Paths Screen</Text>
      </View>
    
  );
};

export default PathsScreen;
