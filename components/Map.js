import * as React from 'react';
import MapView from 'react-native-maps';
import SideBar from "../Drawer";
import { StyleSheet, Text, View, Dimensions } from "react-native";

export default function Map() {
  return (
    <View style={styles.container}>
      {/* <SideBar /> */}
      <MapView style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:-10
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});