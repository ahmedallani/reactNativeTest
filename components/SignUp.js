import React, { useState, useEffect} from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { useFonts } from "expo-font";
import { Input, Button, Switch } from "galio-framework";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import axios from 'react-native-axios'

const SignUp = ({changeView}) => {
  // const [toggleSwitch, setToggleSwitch] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("male");
  const [data, setData] = useState("");

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);


  const [password, setPassword] = useState("");
  const [loaded] = useFonts({
    Ubuntu: require("../assets/fonts/Ubuntu-Bold.ttf"),
  });
  var url ='192.168.2.192'
 if (!loaded) {
    return null;
  }
  
  // useEffect(() => {
  //   checkUser()
  // }, []);
 const checkUser =()=>{
 if(isEnabled === false){
      setGender('male')
    }
if(isEnabled === true){
      setGender('female')
    }
  }
  

  const addUser = () => {
    axios.post(`http://${url}:3001/user/signup`,{username,email,password,gender}).then(({data})=>{
        console.log(data)
        changeView('signin')
  
    }).catch((err)=>{
        console.log('err', err)
        setError(err.message)
    })
   };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.view}>
          <Image
            style={styles.img}
            source={require("../assets/Vector-Sign.png")}
          />
          <IconAntDesign name="left" size={25} style={styles.icon} onPress={() => {
          changeView('');
        }}/>
          <Text style={styles.title1}>Create</Text>
          <Text style={styles.title2}>Account</Text>
          <Input style={styles.input1} placeholder="Enter your Username"
            onChangeText={setUsername}
            />
          <Input
            style={styles.input2}
            type="email-address"
            placeholder="Enter your E-mail"
            onChangeText={setEmail}

          />
          <Input
            style={styles.input}
            placeholder="Enter your Password"
            password
            viewPass
            onChangeText={setPassword}
          />
          <Switch
            style={styles.switch}
            onChange={()=>{toggleSwitch()
              console.log(gender)
              checkUser()}}
            value={isEnabled}

            // onChange={() => {
            //   checkUser(gender)
            //   console.log(gender)
            // }}
          />
          <Text style={styles.male}>Male</Text>
          <Text style={styles.female}>Female</Text>
          <Button style={styles.btn1} round uppercase color="#AAAA3A" onPress={() =>addUser()}>
            Sign-Up
          </Button>
          <Button
            style={styles.btn2}
            round
            uppercase
            color="#AAAA3A"
            onPress={() => {
              changeView('signin');
            }}
          >
            Sign-In
          </Button>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  view: {
    
  },
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
  male: {
    position: "absolute",
    height: 19,
    fontFamily: "Ubuntu",
    fontSize: 14,
    lineHeight: 19,
    color: "#525F7F",
    top: 475,
    left: 100,
  },
  female: {
    position: "absolute",
    height: 19,
    fontFamily: "Ubuntu",
    fontSize: 14,
    lineHeight: 19,
    color: "#525F7F",
    top: 475,
    left: 240,
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
    fontSize: 35,
    lineHeight: 50,
  },
  input1: {
    position: "absolute",
    width: 325,
    height: 45,
    left: 25,
    top: 290,
    borderColor: "#34494E",
  },
  input2: {
    position: "absolute",
    width: 325,
    height: 45,
    left: 25,
    top: 330,
    borderColor: "#34494E",
  },
  input: {
    position: "absolute",
    width: 325,
    height: 45,
    left: 25,
    top: 370,
    borderColor: "#34494E",
  },
  switch: {
    position: "absolute",
    width: 50,
    height: 29.01,
    left: 163,
    top: 470,
  },
  btn1: {
    fontWeight: "bold",
    fontFamily: "Ubuntu",
    position: "absolute",
    width: 326,
    height: 46,
    left: 24,
    top: 510,
  },
  btn2: {
    fontWeight: "bold",
    fontFamily: "Ubuntu",
    position: "absolute",
    width: 326,
    height: 46,
    left: 24,
    top: 570,
  },
});

export default SignUp;
