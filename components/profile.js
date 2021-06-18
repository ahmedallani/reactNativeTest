import React, { useState, useEffect } from "react";

import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  Image,
  Animated,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import tailwind from "tailwind-rn";
import avataaars from "../assets/avataaars.png";
import { Input, Block } from "galio-framework";
const Profile = ({changeView}) => {
  const [imageHeight, setimageHeight] = useState(
    new Animated.Value(styles.image.height)
  );
  const [imageWidth, setimageWidth] = useState(
    new Animated.Value(styles.image.width)
  );
  const [imageTop, setimageTop] = useState(
    new Animated.Value(styles.image.top)
  );
  const [imageLeft, setimageLeft] = useState(
    new Animated.Value(styles.image.left)
  );
  let keyboardWillShowSub;
  let keyboardWillHideSub;
  useEffect(() => {
    keyboardWillShowSub = Keyboard.addListener(
      "keyboardWillShow",
      keyboardWillShow
    );
    keyboardWillHideSub = Keyboard.addListener(
      "keyboardWillHide",
      keyboardWillHide
    );
  }, []);
  useEffect(() => {
    keyboardWillShowSub.remove();
    keyboardWillHideSub.remove();
  }, []);
  const keyboardWillShow = (event) => {
    setimageHeight(115);
    setimageWidth(115);
    setimageTop(80);
    setimageLeft(100);
    Animated.timing(imageHeight, {
      duration: event.duration,
      toValue: styles.IMAGE_HEIGHT_SMALL.height,
    }).start();
  };
  const keyboardWillHide = (event) => {
    setimageHeight(234);
    setimageWidth(230);
    setimageTop(120);
    setimageLeft(60);
    Animated.timing(imageHeight, {
      duration: event.duration,
      toValue: styles.image.height,
    }).start();
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          {/* <Image source={avataaars}style={styles.image}/> */}
          <Animated.Image
            source={avataaars}
            style={[styles.image, { height: imageHeight, width: imageWidth }]}
          />

          <TextInput placeholder="Username" style={styles.textInput} />
          <Input placeholder="password" password viewPass />
          <View style={styles.btnContainer}>
            <Button title="Submit" onPress={() => console.log(imageHeight)} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  image: {
    width: 230,
    height: 234,
    left: 60,
    top: 120,
  },

  scrollView: {
    backgroundColor: "white",
    marginHorizontal: 20,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around",
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12,
  },
});

export default Profile;
