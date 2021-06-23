import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import Splash from "./components/Splash.js";
import Profile from "./components/Profile.js";
import SignIn from "./components/SignIn.js";
import SignUp from "./components/SignUp.js";
import Category from "./components/Categories.js";
import Beach from "./components/BeachList";
import FooterBar from "./navigation/FooterBar.js";
import Map from "./components/Map";
import CarouselCards from "./components/CarouselCards.js"
import "react-native-gesture-handler";
import Categories from "./components/Categories.js";

const App = () => {
  const [view, setview] = useState("Splash");
  const [user, setUser] = useState(null);
  var url ='192.168.2.234'


  const changeView = (view) => {
    setview(view);
  };
  const renderView = () => {
    if (view === "map") {
      return <Map  />;
    }
    if (view === "Splash") {
      return <Category changeView={(view) => changeView(view)}
      user={user}
      url={url} />;
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
    // if (view === "beach" ) {
    //   return <CarouselCards changeView={(view) => changeView(view)} setUser={setUser} url={url}/>;
    // }
    if (view === "categories") {
      return (
        <View>
         
          <Category
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
