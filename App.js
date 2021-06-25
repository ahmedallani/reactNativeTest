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
import Signin from "./components/Signin.js";
import Signup from "./components/Signup.js";
import Header from "./components/Categories.js";
import Beach from "./components/BeachList";
import FooterBar from "./navigation/FooterBar.js";
import { Map } from "./components/Map";
import "react-native-gesture-handler";
import SideBar from "./Drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();

function MyStack({ user, setUser, url }) {
  const MapRoute = ({navigation}) => <Map setUser={setUser} url={url} navigation={navigation}/>;
  const ProfileRoute = ({navigation}) => <Profile user={user} url={url} navigation={navigation}/>;
  const CategoryRoute = ({navigation}) => <Header url={url} setUser={setUser} navigation={navigation}/>;
  const SigninRoute = ({navigation}) => <Signin url={url} setUser={setUser} navigation={navigation} />;
  const SignupRoute = ({navigation}) => <Signup url={url} setUser={setUser} navigation={navigation} />;
  const BeachRoute = ({navigation}) => <Beach url={url} setUser={setUser} navigation={navigation}/>;

  
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Splash} />
      <Stack.Screen
        name="Signin"
        component={SigninRoute}
       
       
      />
      <Stack.Screen
        name="Signup"
        component={SignupRoute}
       
      />
      <Stack.Screen
        name="Map"
        component={MapRoute}
        
      />
      <Stack.Screen
        name="Beach"
        component={BeachRoute}
     
      />
      <Stack.Screen
        name="Profile"
        component={ProfileRoute}
       
      />
      <Stack.Screen
        name="Header"
        component={CategoryRoute}
        
      />
    </Stack.Navigator>
  );
}

function App() {
  const hello = "hello";

  const [user, setUser] = useState(null);
  const url = "192.168.2.192";
  return (
    <NavigationContainer>
      <MyStack user={user} setUser={setUser} url={url} />
    </NavigationContainer>
  );
}
// const App = StackNavigator({
//   Home: {screen: Map},
//   Signup: {screen: Signup},
//   Signin: {screen: Signin}
// })

// const App = () => {

//   // const [view, setview] = useState("Splash");
//   // const [user, setUser] = useState(null);
//   // const url = "192.168.2.192";

//   // const changeView = (view) => {
//   //   setview(view);
//   // };
//   // const renderView = () => {
//   //   if (view === "") {
//   //     return <Map url={url} />;
//   //   }
//   //   if (view === "Splash") {
//   //     return <Splash changeView={changeView}/>;
//   //   }
//   //   if (view === "profile") {
//   //     return (
//   //       <View>

//   //         <Profile
//   //           changeView={(view) => changeView(view)}
//   //           user={user}
//   //           url={url}
//   //         />
//   //       </View>
//   //     );
//   //   }
//   //   if (view === "signup") {
//   //     return <Signup changeView={(view) => changeView(view)} url={url} />;
//   //   }
//   //   if (view === "signin") {
//   //     return (
//   //       <Signin
//   //         changeView={(view) => changeView(view)}
//   //         setUser={setUser}
//   //         url={url}
//   //       />
//   //     );
//   //   }
//   //   if (view === "beach") {
//   //     return <CarouselCards changeView={(view) => changeView(view)} setUser={setUser} url={url}/>;
//   //   }
//   //   if (view === "categories") {
//   //     return (
//   //       <View>

//   //         <Header
//   //           changeView={(view) => changeView(view)}
//   //           setUser={setUser}
//   //           url={url}
//   //         />
//   //       </View>
//   //     );
//   //   }
//   // };
//   return (
//     // <React.Fragment>
//     //   {renderView()}
//       <SideBar/>
//     // </React.Fragment>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     // justifyContent: "space-around"
//     // backgroundColor: '#4c69a5',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
// });

export default App;
