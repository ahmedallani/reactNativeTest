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
import Profile from "./components/Profile.js";
import SignIn from "./components/SignIn.js";
import SignUp from "./components/SignUp.js";
import Header from "./components/Categories.js";
import Beach from "./components/BeachList";
import FooterBar from "./navigation/FooterBar.js";
import {Map} from "./components/Map";
import "react-native-gesture-handler";

const App = () => {
  const [view, setview] = useState("");
  const [user, setUser] = useState(null);
  const url = "192.168.2.192";

  const changeView = (view) => {
    setview(view);
  };
  const renderView = () => {
    if (view === "") {
      return <Map url={url} />;
    }
    if (view === "Splash") {
      return <Splash/>;
    }
    if (view === "profile") {
      return (
        <View>
         
          <Profile
            changeView={(view) => changeView(view)}
            user={user}
            url={url}
          />
        </View>
      );
    }
    if (view === "signup") {
      return <SignUp changeView={(view) => changeView(view)} url={url} />;
    }
    if (view === "signin") {
      return (
        <SignIn
          changeView={(view) => changeView(view)}
          setUser={setUser}
          url={url}
        />
      );
    }
    if (view === "beach") {
      return (
        <View>
         
          <Beach
            changeView={(view) => changeView(view)}
            setUser={setUser}
            url={url}
          />
        </View>
      );
    }
    if (view === "categories") {
      return (
        <View>
         
          <Header
            changeView={(view) => changeView(view)}
            setUser={setUser}
            url={url}
          />
        </View>
      );
    }
  };
  return (
    <React.Fragment>
      {renderView()}
      
    </React.Fragment>
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
