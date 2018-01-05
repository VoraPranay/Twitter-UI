import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { StackNavigator } from "react-navigation";
import Homescreen from './Homescreen'

class Highlightscreen extends Component {

render(){

return (

<View>
   <Text>
     THIS IS A Highlightscreen???
   </Text>
   <Button
   onPress={() => this.props.navigation.navigate ('Homescreen') } 
   title="go to  home screen" />
</View>
);
}
}

const HighlightscreenStackNavigator = StackNavigator({
    
  Highlightscreen: {
      screen: Highlightscreen
  },
   Homescreen: {
      screen: Homescreen
  }

 }
 )
 
 export default HighlightscreenStackNavigator;

