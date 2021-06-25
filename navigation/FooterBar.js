import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import Splash from "../components/Splash";
import Profile from "../components/Profile.js";
import Signin from "../components/Signin.js";
import Signup from "../components/Signup.js";
import Header from "../components/Categories.js";
import Beach from "../components/BeachList";
import Map from "../components/Map";
var url = "192.168.2.192";
const MapRoute = () => <Map />;

const ProfileRoute = () => (
  <Profile user={user} url={url} />
);

const CategoryRoute = () => (
  <Header  url={url} />
);

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "Map", title: "Map" },
    { key: "Profile", title: "Profile" },
    { key: "categorie", title: "categorie" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Map: MapRoute,
    Profile: ProfileRoute,
    categorie: CategoryRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MyComponent;
