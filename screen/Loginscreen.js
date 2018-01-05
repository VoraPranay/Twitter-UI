import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { StackNavigator } from "react-navigation";
import Homescreen from './Homescreen'

class Loginscreen extends Component {

render(){

return (

<View>
   <Text>
     THIS IS A LOGINSCREENSSS
   </Text>
   <Button
   onPress={() => this.props.navigation.navigate ('Homescreen') } 
   title="go to  home screen" />
</View>
);
}
}

const LoginscreenStackNavigator = StackNavigator({
    
  Loginscreen: {
      screen: Loginscreen
  },
   Homescreen: {
      screen: Homescreen
  }

 }
 )
 
 export default LoginscreenStackNavigator;

