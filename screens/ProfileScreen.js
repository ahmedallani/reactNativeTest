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
import Profile from '../components/Profile'
import { Input, Block, Button } from "galio-framework";
import axios from "react-native-axios";
import {  Container,  Content } from "native-base";
class ProfileScreen extends Component {
  constructor(props) {
    super(props);

  
    };
  

  
  render() {
    return (
      
    
       <Profile/>
   
  
    );
  }
}

export default ProfileScreen;
