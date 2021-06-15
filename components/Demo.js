import React, { Component } from 'react';
import { View, TextInput, Image, Animated, Keyboard, KeyboardAvoidingView,TouchableWithoutFeedback,Button } from 'react-native';
import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from './styles';
import avataaars from "../assets/avataaars.png";
import { Input, Block } from "galio-framework";


class Demo extends Component {
  constructor(props) {
    super(props);

    this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
  }

  componentWillMount () {
    this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
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

  render() {
    return (
      <KeyboardAvoidingView
        
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
          <Animated.Image source={avataaars} style={[styles.logo, { height: this.imageHeight }]} />
          <TextInput placeholder="Username" style={styles.textInput} />
          <Input placeholder="password"  password viewPass style={styles.textInput} />
          <View style={styles.btnContainer}>
            <Button title="Submit" onPress={() => null} />
          </View></View></TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
};

export default Demo;