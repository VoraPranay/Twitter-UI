import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { StackNavigator } from "react-navigation";
import Homescreen from './Homescreen'

class Profilescreen extends Component {

render(){

return (

<View>
   <Text>
     THIS IS your Profilescreen^^^^
   </Text>
   <Button
   onPress={() => this.props.navigation.navigate ('Homescreen') } 
   title="go to  home screen" />
</View>
);
}
}

const ProfilescreenStackNavigator = StackNavigator({
    
  Profilescreen: {
      screen: Profilescreen
  },
   Homescreen: {
      screen: Homescreen
  }

 }
 )
 
 export default ProfilescreenStackNavigator;

