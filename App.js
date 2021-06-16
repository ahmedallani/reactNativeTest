import React from "react";
<<<<<<< HEAD
import { StyleSheet, Text, View, Button ,SafeAreaView} from "react-native";
import Profile from './components/profile.js'
import tailwind from 'tailwind-rn';
import Demo from './components/Demo.js'
const App = () => {
  return (
<Demo/>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
   
  },
});
=======
import { StyleSheet, Text, View, Button } from "react-native";
import Splash from './components/Splash'


const App = () => {
  return (
    <View style={styles.container}>
      <Splash />
    </View>
  );
};

>>>>>>> d5b2c9102bcfa0eb129e528452ec2438957fab1e

export default App;
