import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon, Button, Container, Header, Content, Left } from "native-base";

const WhishListScreen = () => {
  return (
    <Container>
      <Content
        contentContainerStyle={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>WishList Screen</Text>
      </Content>
    </Container>
  );
};

export default WhishListScreen;
