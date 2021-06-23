import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon, Button, Container, Header, Content } from "native-base";

const SignOutScreen = () => {
    return (
      <Container>
        <Content
          contentContainerStyle={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Setting Screen</Text>
        </Content>
      </Container>
    );
}

export default SignOutScreen;
