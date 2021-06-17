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
} from "react-native";
import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from "./styles";
import avataaars from "../assets/avataaars.png";
import { Input, Block, Button } from "galio-framework";

class Demo extends Component {
  constructor(props) {
    super(props);

    this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
    this.state = {
      Username: "",
      Email: "",
      Current_Password: "",
      New_Password: "",
      Date_of_Birth: "",
      Phone_Number: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.keyboardWillShowSub = Keyboard.addListener(
      "keyboardWillShow",
      this.keyboardWillShow
    );
    this.keyboardWillHideSub = Keyboard.addListener(
      "keyboardWillHide",
      this.keyboardWillHide
    );
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT_SMALL,
    }).start();
  };

  keyboardWillHide = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT,
    }).start();
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e,
    });
  };
  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <Animated.Image
              source={avataaars}
              style={[styles.logo, { height: this.imageHeight }]}
            />

            <Input
              name="Username"
              placeholder="Username"
              onChangeText={(e) => this.setState({ Username: e })}
              style={styles.textInput}
              rounded
            />
            <Input
              name="Email"
              placeholder="Email"
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
                onPress={() => console.log(this.state)}
              >
                Save
              </Button>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

export default Demo;
