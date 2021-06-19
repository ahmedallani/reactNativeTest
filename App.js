import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Splash from "./components/Splash.js";
import Demo from "./components/Demo.js";
import SignIn from "./components/SignIn.js";
import SignUp from "./components/SignUp.js";
import Header from "./components/Categories.js";
import Beach from "./components/BeachList";


const App = () => {
  const [view, setview] = useState("");
  const [user, setUser] = useState(null);
  var url ='192.168.2.192'


  const changeView = (view) => {
    setview(view);
  };
  const renderView = () => {
    if (view === "") {
      return <Splash changeView={(view) => changeView(view)} url={url}/>;
    }
    if (view === "profile") {
      return <Demo changeView={(view) => changeView(view)} user={user}  url={url}/>;
    }
    if (view === "signup") {
      return <SignUp changeView={(view) => changeView(view)} url={url} />;
    }
    if (view === "signin") {
      return <SignIn changeView={(view) => changeView(view)} setUser={setUser} url={url}/>;
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>{renderView()}</View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    // justifyContent: "space-around"
    // backgroundColor: '#4c69a5',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default App;
