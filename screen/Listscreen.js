import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { StackNavigator } from "react-navigation";
import Homescreen from './Homescreen'

class Listscreen extends Component {

render(){

return (

<View>
   <Text>
     THIS IS A Listscreen
   </Text>
   <Button
   onPress={() => this.props.navigation.navigate ('Homescreen') } 
   title="go to  home screen" />
</View>
);
}
}

const ListscreenStackNavigator = StackNavigator({
    
  Listscreen: {
      screen: Listscreen
  },
   Homescreen: {
      screen: Homescreen
  }

 }
 )
 
 export default ListscreenStackNavigator;

