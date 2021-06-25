import React, { Component } from "react";
import {
  View,
  TextInput,
  Image,
  Animated,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ScrollView,
  StyleSheet,
  Dimensions,
  StatusBar,
  Text,
} from "react-native";
import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from "./styles";
import avataaars from "../assets/avataaars.png";
import IconAntDesign from "react-native-vector-icons/AntDesign";

import { Input, Block, Button } from "galio-framework";
import axios from "react-native-axios";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
    this.state = {
      Username: this.props.user.username,
      Email: this.props.user.email,
      Current_Password: "",
      Gender: this.props.user.gender,
      New_Password: "",
      Date_of_Birth: "",
      Phone_Number: "",
      url: "192.168.2.234",
    };
  }
  UNSAFE_componentWillMount() {
    this.keyboardWillShowSub = Keyboard.addListener(
      "keyboardWillShow",
      this.keyboardWillShow
    );
    this.keyboardWillHideSub = Keyboard.addListener(
      "keyboardWillHide",
      this.keyboardWillHide
    );
  }
  
  UNSAFE_componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }
  keyboardWillShow = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT_SMALL,
      useNativeDriver: false,
    }).start();
  };
  keyboardWillHide = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT,
      useNativeDriver: false,
    }).start();
  };
  
  
  updateUser() {
    if(this.props.user.newpassword !== ""){
    axios.patch(`http://${this.props.url}:3001/user/password/${this.props.user._id}`, {
      password:this.state.Current_Password,newpassword:this.state.New_Password
    });
    }
  
    axios.patch(`http://${this.props.url}:3001/user/${this.props.user._id}`, {
      username:this.state.Username,
      email:this.state.Email,
      password:this.state.Current_Password,
      gender: this.state.Gender,
      date_of_birth: this.state.Date_of_Birth,
      phone_number: this.state.Phone_Number,
    });
  }
    render() {
      return (
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <IconAntDesign name="left" size={25} style={styles.icon} onPress={() => {
           this.props.navigation.goBack()
          }}/>
            <View style={styles.inner}>
  
              <Animated.Image
                source={avataaars}
                style={[styles.logo, { height: this.imageHeight }]}
              />
  
              <Input
                name="Username"
                placeholder={this.props.user.username}
                onChangeText={(e) => this.setState({ Username: e })}
                style={styles.textInput}
                rounded
              />
              <Input
                name="Email"
                placeholder={this.props.user.email}
                type="email-address"
                onChangeText={(e) => this.setState({ Email: e })}
                style={styles.textInput}
                rounded
              />
              <Input
                name="Current Password"
                placeholder="Current Password"
                onChangeText={(e) => this.setState({ Current_Password: e })}
                Password
                viewPass
                rounded
                style={styles.textInput}
              />
              <Input
                name="New Password"
                placeholder="New Password"
                onChangeText={(e) => this.setState({ New_Password: e })}
                Password
                viewPass
                rounded
                style={styles.textInput}
              />
              <Input
                name="Date of Birth"
                placeholder="Date of Birth"
                onChangeText={(e) => this.setState({ Date_of_Birth: e })}
                style={styles.textInput}
                rounded
              />
              <Input
                name="Phone Number"
                placeholder="Phone Number"
                onChangeText={(e) => this.setState({ Phone_Number: e })}
                style={styles.textInput}
                rounded
                type="phone-pad"
              />
  
              <View style={styles.btnContainer}>
                {/* <Button title="Save" onPress={() => null} /> */}
                <Button
                  round
                  size={100}
                  color="#34494E"
                  style={{ marginLeft: 180 }}
                  onPress={() => this.updateUser()}
                >
                  Save
                </Button>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
     )
    } 
}

// }

export default Profile;
