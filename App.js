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
  const changeView = (view) => {
    setview(view);
  };
  const renderView = () => {
    if (view === "") {
      //change the main view to render cotegories components
       return <Splash changeView={(view) => changeView(view)} />;
       // return <Header changeView={(view) => changeView(view)} />
        // return <Beach changeView={(view) => changeView(view)} />
    }
    if (view === "profile") {
      return <Demo changeView={(view) => changeView(view)} />;
    }
    if (view === "signup") {
      return <SignUp changeView={(view) => changeView(view)} />;
    }
    if (view === "signin") {
      return <SignIn changeView={(view) => changeView(view)} />;
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
