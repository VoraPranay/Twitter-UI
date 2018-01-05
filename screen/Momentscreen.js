import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { StackNavigator } from "react-navigation";
import Homescreen from './Homescreen'

class Momentscreen extends Component {

render(){

return (

<View>
   <Text>
     THIS IS youe Momentscreen!!!
   </Text>
   <Button
   onPress={() => this.props.navigation.navigate ('Homescreen') } 
   title="go to  home screen" />
</View>
);
}
}

const MomentscreenStackNavigator = StackNavigator({
    
  Momentscreen: {
      screen: Momentscreen
  },
   Homescreen: {
      screen: Homescreen
  }

 }
 )
 
 export default MomentscreenStackNavigator;

