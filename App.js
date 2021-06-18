import React,{useState} from "react";
import { View } from "react-native";
import  Splash  from './components/Splash';
import  Demo  from './components/Demo';
import  SignIn  from './components/SignIn';
import SignUp  from './components/SignUp';





const App = () => {
  const [view,setview]= useState('')
  const changeView =(view)=>{setview(view)}
  const renderView =()=>{
    if(view === ''){
      return (
        < Splash changeView={(view)=>changeView(view)}/>
      )
    }
    else if (view ==='profile'){
      return (
        < Demo changeView={(view)=>changeView(view)}/>
      )
    }
    else if (view === 'signin'){
      return (
        <SignIn changeView={(view)=>changeView(view)} />
      )
    }
    else if (view === 'signup'){
      return (
        <SignUp changeView={(view)=>changeView(view)}/>
      )
    }
  }
  return (
    <View>
      {renderView()} 
    </View>
  );
};


export default App;
