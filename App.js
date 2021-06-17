import React from "react";
import { StyleSheet, Text, View, Button,KeyboardAvoidingView ,TouchableWithoutFeedback,Keyboard} from "react-native";
import Splash from './components/Splash.js'
import Demo from './components/Demo.js'
import SignIn from './components/SignIn.js'
import SignUp from './components/SignUp.js'



const App = () => {
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.container}
  >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View >
      <SignIn />
    </View>
    </TouchableWithoutFeedback></KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around"
    // backgroundColor: '#4c69a5',
  
    // alignItems: 'center',
    // justifyContent: 'center',
  },
})

export default App;
