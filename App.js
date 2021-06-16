import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Splash from './components/Splash'


const App = () => {
  return (
    <View style={styles.container}>
      <Splash />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
  },
});

export default App;
