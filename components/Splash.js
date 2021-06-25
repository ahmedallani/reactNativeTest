import React from 'react';
import { View, Image, StyleSheet,Text } from 'react-native';
import {  Button } from "galio-framework";
import { useFonts } from 'expo-font';

const styles = StyleSheet.create({
  
  vector: {
    position:'absolute',
    top:0,
    left:0,
    width:380,
    height: 290,
  },
  icon: {
    position:'absolute',
    top:0,
    left:0,
    marginTop:35,
    marginLeft:25,
    width: 72,
    height: 72,
  },
  walk: {
    position:'absolute',
    top:220,
    right:50,
    width: 260,
    height: 129,
  },
  txt : {
    fontFamily: 'Ubuntu',
    position:'absolute',
    top: 370,
    fontSize: 41,
    lineHeight:47,
    fontWeight:'bold',
    fontStyle:'normal',
    marginLeft:25,
    color:'#34494E',
  },
  subtxt :{
    fontFamily: 'Ubuntu',
    position:'absolute',
    top: 420,
    fontSize: 24,
    lineHeight:28,
    fontWeight:'bold',
    fontStyle:'normal',
    marginLeft:30,
    color:'#34494E',
  },
  subtxt1 :{
    fontFamily: 'Ubuntu',
    position:'absolute',
    top: 450,
    fontSize: 24,
    lineHeight:28,
    fontWeight:'bold',
    fontStyle:'normal',
    marginLeft:30,
    color:'#34494E', 
  },
  btn1 :{
     position:'absolute',
     width:326,
     height:46,
     left:17,
     top:500,
  },
  btn2: {
    position: "absolute",
    width: 326,
    height: 46,
    left: 17,
    top: 560,
  },

});

const Splash = ({navigation}) => {

    
const [loaded] = useFonts({
Ubuntu: require("../assets/fonts/Ubuntu-Bold.ttf"),
});

if (!loaded) {
    return null;
  }

  return (
    <View>
     <Image
        style={styles.vector}
        source={require('../assets/Vector.png')}
      />
      <Image
        style={styles.icon}
        source={ require('../assets/icon.png')}
      />
      <Image
        style={styles.walk}
        source={ require('../assets/walk.png')}
      />
  
      <Text style={styles.txt}>Your Way </Text>
      <Text style={styles.subtxt}>Find New </Text>
      <Text style={styles.subtxt1}>Possibilities</Text>
      <Button style={styles.btn1} round uppercase color="#AAAA3A"  onPress={() => {
    navigation.navigate('Signin');
  }}>
        Sign-In
      </Button>
      <Button style={styles.btn2} round uppercase color="#AAAA3A"    onPress={() => {
          navigation.navigate('Signup');
        }}>
        Sign-Up
      </Button>
  

      
    </View>
  );
}

export default Splash;