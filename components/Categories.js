import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

const Header = ({changeView}) => {
  const [loaded] = useFonts({
    Ubuntu: require("../assets/fonts/Ubuntu-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      
      <ImageBackground
        source={require("../assets/sea.jpg")}
        style={styles.image1}
      >
        <Text style={styles.text} onPress={() =>changeView("beach")}>Beach</Text>
      </ImageBackground>
      <ImageBackground
        source={require("../assets/nature.jpg")}
        style={styles.image2}
        
      >
        <Text style={styles.text} onPress={() =>alert("youssef")}>Nature</Text>
      </ImageBackground>
      <ImageBackground
        source={require("../assets/desert.jpg")}
        style={styles.image3}
      
      >
        <Text style={styles.text}  onPress={() =>alert("youssef")} >Desert</Text>
      </ImageBackground>
      <ImageBackground
        source={require("../assets/culture.jpg")}
        style={styles.image4}
      >
        <Text style={styles.text} onPress={() =>alert("youssef")}>Culture</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    
  },
  image1: {
    borderRadius:20,
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: 390,
    height: 140,
    top: 50,
  },
  image2: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: 375,
    height: 140,
    top: 200,
  },
  image3: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: 375,
    height: 140,
    top: 350,
  },
  image4: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: 375,
    height: 140,
    top: 500,
  },
  text: {
    height: 41,
    top: 65,
    fontFamily: "Ubuntu",
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Header;
