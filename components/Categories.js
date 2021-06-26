import React, { useState, useEffect } from "react";
import { ImageBackground, StyleSheet, Text, ScrollView } from "react-native";
import { useFonts } from "expo-font";
import {
  TapGestureHandler,
  RotationGestureHandler,
} from "react-native-gesture-handler";
import axios from "react-native-axios";
import CarouselCards from "./CarouselCards.js";

const Category = ({ setCategory, navigation, url }) => {
  const [loaded] = useFonts({
    Ubuntu: require("../assets/fonts/Ubuntu-Bold.ttf"),
  });
  const [categories, setCategories] = useState(null);
  useEffect(() => {
    getBeach();
  }, []);
  const getBeach = async () => {
    axios
      .get(`http://${url}:3001/categories`)
      .then(({ data }) => {
        // console.log(data);
        setCategories(data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  if (!loaded) {
    return null;
  }

  return (
    <TapGestureHandler>
      <RotationGestureHandler>
        <ScrollView style={styles.container}>
          {categories &&
            categories.map((category, key) => (
              <ImageBackground
                key={key}
                source={{ uri: category.picture }}
                style={styles.image}
              >
                <Text
                  style={styles.text}
                  onPress={() => {
                    {
                      navigation.navigate("CarouselCards");
                      setCategory(category)
                      
                      
                    }
                  }}
                >
                  {category.name}
                </Text>
              </ImageBackground>
            ))}
        </ScrollView>
      </RotationGestureHandler>
    </TapGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    opacity: 1.0,
    shadowOpacity: 100,
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: 390,
    height: 250,
    top: 0,
  },

  text: {
    height: 41,
    top: -10,
    fontFamily: "Ubuntu",
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Category;
