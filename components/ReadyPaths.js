import React from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  View,
} from "react-native";
import { useFonts } from "expo-font";
import { Card } from "galio-framework";

const Path = () => {
  const [loaded] = useFonts({
    Ubuntu: require("../assets/fonts/Ubuntu-Bold.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <ScrollView horizontal={true} contentContainerStyle={styles.contentContainer} >
      <Card borderless shadow={true} style={styles.card1}>
      <Image style={styles.image} source={require("../assets/path1.jpg")} />
      <Text style={styles.text}>our first trip</Text>
      <Text style={styles.text1}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</Text>
      </Card>
      <Card borderless shadow={true} style={styles.card2}>
      <Image style={styles.image} source={require("../assets/path2.jpg")} />
      <Text style={styles.text}>our second trip</Text>
      <Text style={styles.text1}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</Text>
      </Card>
      <Card borderless shadow={true} style={styles.card3}>
      <Image style={styles.image} source={require("../assets/path3.jpg")} />
      <Text style={styles.text}>our third trip</Text>
      <Text style={styles.text1}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</Text>
      </Card>
    </ScrollView>
  );

};

const styles = StyleSheet.create({
  // scrollView: {
  //   width: "100%",
  //   height: "100%",
  // },
  contentContainer: {
    paddingRight: 80

  },
  card1: {
    borderRadius: 20,
    resizeMode: "cover",
    justifyContent: "center",
    width: 300,
    height: 400,
     top: 100,
    left: 40,
  },
  card2: {
    
    resizeMode: "cover",
    justifyContent: "center",
    width: 300,
    height: 400,
   top:100,
   left: 50,

  },
  card3: {
    resizeMode: "cover",
    justifyContent: "center",
    width: 300,
    height: 400,
    top: 100,
    left: 60,
  },
  image: {
    opacity: 1.0,
    borderRadius: 20,
    shadowOpacity: 100,
    width: 300,
    height: 350,
  },
  text: {
    height: 50,
    top:45,
    fontFamily: 'Ubuntu',
    color: "#34494E",
    fontSize: 30,
    fontWeight: "bold",
    marginLeft:0,
    
  },
  text1: {
    height: 120,
    top:50,
    fontFamily: "Ubuntu",
    color: "#34494E",
    fontSize: 15,
    paddingRight:20
  },
});
export default Path;
