import { StyleSheet, Dimensions,StatusBar } from 'react-native';
const window = Dimensions.get('window');

export const IMAGE_HEIGHT = window.width / 2;
export const IMAGE_HEIGHT_SMALL = window.width /7;

export default StyleSheet.create({
  container: {
    // backgroundColor: '#4c69a5',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    width: window.width - 30,
    height: 40,
    marginLeft:80,
    borderColor: "#34494E",
    // borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: -300,
  },  
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12,
  },  
  input: {
    height: 50,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 5,
    height: 40,
    margin: 12,
    borderWidth: 1,
   // paddingVertical: 5,
    // paddingHorizontal: 15,
    width: window.width - 30,
  },
  logo: {
    height: IMAGE_HEIGHT,
    resizeMode: 'contain',
    marginBottom: 20,
    padding:10,
    marginTop:20
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around",
  },
  cont: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'white',
    // marginHorizontal: 20,
  },
  register:{
    marginBottom:20, 
    width:window.width -100,
    alignItems:'center',
    justifyContent:'center',
    height:50,
    backgroundColor: '#ffae',}
});