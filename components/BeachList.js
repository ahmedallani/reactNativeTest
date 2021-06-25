// import React from "react";
// import { ImageBackground, StyleSheet, Text, View } from "react-native";
// import { useFonts } from "expo-font";

// const Header = ({changeView}) => {
//   const [loaded] = useFonts({
//     Ubuntu: require("../assets/fonts/Ubuntu-Bold.ttf"),
//   });

//   if (!loaded) {
//     return null;
//   }
//   return (
//     <View style={styles.container}>
//         <Text style={styles.text1} onPress={() =>changeView("profile")}>Profile</Text>
      
//       <ImageBackground
//         source={require("../assets/sea.jpg")}
//         style={styles.image1}
//       >
//         <Text style={styles.text} onPress={() =>alert("Welcome")}>Bizerte</Text>
//       </ImageBackground>
    
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "column",
    
//   },
//   image1: {
//     borderRadius:20,
//     flex: 1,
//     resizeMode: "cover",
//     justifyContent: "center",
//     width: 390,
//     height: 140,
//     top: 50,
//   },
//   image2: {
//     flex: 1,
//     resizeMode: "cover",
//     justifyContent: "center",
//     width: 375,
//     height: 140,
//     top: 200,
//   },
//   image3: {
//     flex: 1,
//     resizeMode: "cover",
//     justifyContent: "center",
//     width: 375,
//     height: 140,
//     top: 350,
//   },
//   image4: {
//     flex: 1,
//     resizeMode: "cover",
//     justifyContent: "center",
//     width: 375,
//     height: 140,
//     top: 500,
//   },
//   text: {
//     height: 41,
//     top: 65,
//     fontFamily: "Ubuntu",
//     color: "white",
//     fontSize: 40,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   text1: {
//     height: 41,
//     top: 45,
//     fontFamily: "Ubuntu",
//     color: "black",
//     fontSize: 40,
//     fontWeight: "bold",
//     // textAlign: "center",
//   },
// });

// export default Header;
