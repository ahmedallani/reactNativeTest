import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
  TextInput,
} from "react-native";
import { useFonts } from "expo-font";
import { Input, Button } from "galio-framework";
import IconAntDesign from 'react-native-vector-icons/AntDesign';

const SignIn = ({changeView}) => {
  const [loaded] = useFonts({
    Ubuntu: require("../assets/fonts/Ubuntu-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View>
      <Image style={styles.img} source={require("../assets/Vector-Sign.png")} />
      <IconAntDesign name="left" size={25} style={styles.icon} onPress={() => {
    changeView('');
  }} />
      <Text style={styles.title1}>Welcome</Text>
      <Text style={styles.title2}>Back</Text>
      <Input style={styles.input1} placeholder="Enter your Username" />
      <Input
        style={styles.input}
        placeholder="Enter your Password"
        password
        viewPass
      />
      <Text style={styles.forgetpass}>Forget Password ?</Text>
      <Button style={styles.btn1} round uppercase color="#C2C272"  onPress={() => {
          changeView('profile');
        }}>
        Sign-In
      </Button>
      <Button
        style={styles.btn2}
        round
        uppercase
        color="#C2C272"
        onPress={() => {
          changeView('signup');
        }}
      >
        Sign-Up
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    position: "absolute",
    width: 375,
    height: 164,
    left: 0,
    top: 0,
  },
  icon: {
    position: "absolute",
    color: "white",
    left: 19,
    top: 45,
  },
  title1: {
    position: "absolute",
    color: "#34494E",
    fontFamily: "Ubuntu",
    fontWeight: "bold",
    fontStyle: "normal",
    width: 250,
    height: 43,
    left: 19,
    top: 171,
    fontSize: 50,
    lineHeight: 50,
  },
  title2: {
    position: "absolute",
    color: "#34494E",
    fontFamily: "Ubuntu",
    fontWeight: "bold",
    fontStyle: "normal",
    width: 250,
    height: 43,
    left: 19,
    top: 218,
    fontSize: 45,
    lineHeight: 50,
  },
  input1: {
    position: "absolute",
    width: 325,
    height: 45,
    left: 25,
    top: 299,
    borderColor: "#34494E",
  },
  input: {
    position: "absolute",
    width: 325,
    height: 45,
    left: 25,
    top: 350,
    borderColor: "#34494E",
  },
  forgetpass: {
    position: "absolute",
    width: 250,
    height: 43,
    left: 181,
    top: 430,
    fontFamily: "Ubuntu",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 21,
    color: "#34494E",
  },
  btn1: {
    fontWeight: "bold",
    fontFamily: "Ubuntu",
    position: "absolute",
    width: 326,
    height: 46,
    left: 24,
    top: 490,
  },
  btn2: {
    fontWeight: "bold",
    fontFamily: "Ubuntu",
    position: "absolute",
    width: 326,
    height: 46,
    left: 24,
    top: 550,
  },
});

export default SignIn;
