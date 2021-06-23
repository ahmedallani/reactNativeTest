import React, { Component } from 'react';
import { DrawerActions } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, Button, Container, Header, Content, Left } from "native-base";


class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Content
          contentContainerStyle={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Home Screen</Text>
        </Content>
      </Container>
    );
  }
};

export default HomeScreen;