import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { StackNavigator } from "react-navigation";
import loginscreen from './loginscreen';

class homescreen extends Component {

render(){

return (

<View>
  <Text>
     THIS IS A LOGINSCREENSSS
   </Text>
   <Button
   onPress={() => this.props.navigation.navigate ('lopginscreen') } 
   title="go to  login screen" />
</View>
);
}
}

const homescreenStackNavigator = StackNavigator({
 loginscreen: {
     screen: loginscreen
 },
 homescreen: {
     screen: homescreen
 }

}
)

export default homescreenStackNavigator;