import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from "./CarouselCardItem";

import IconAntDesign from "react-native-vector-icons/AntDesign";
import axios from "react-native-axios";

const CarouselCards = (props) => {
const [places, setPlaces] = useState([]);
useEffect(() => {
  //getPlaces();
 
}, []);
console.log(places);
const getPlaces = () => {
  axios
    .get(
      `http://${props.url}/places/onecategory?id_category=${props.categories._id}`
    )
    .then(({ data }) => {
      console.log(data);
      setPlaces(data);
    })
    .catch((err) => {
      console.log("err", err);
    });
};

  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      padding: 50,
    },
    icon: {
      position: "absolute",
      color: "#34494E",
      left: 19,
      top: 20,
    },
  });

  return (
    <View style={styles.container}>
      <IconAntDesign
        name="left"
        size={25}
        style={styles.icon}
        onPress={() => {
          props.navigation.goBack();
        }}
      />
      <Carousel
        layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={places}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />
      {/* <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.92)'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      /> */}
    </View>
  );
};

export default CarouselCards;
