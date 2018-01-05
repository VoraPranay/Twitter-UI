import React, { Component } from "react";
import { View,StyleSheet,Text,StatusBar, } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { TabNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
import Homescreen from './screen/Homescreen';
import Loginscreen from './screen/Loginscreen';
import Profilescreen from './screen/Profilescreen';
import Listscreen from './screen/Listscreen';
import Momentscreen from './screen/Momentscreen';
import Highlightscreen from './screen/Highlightscreen';
import Drawerbar from './screen/Drawerbar';
import Searchscreen from './screen/Searchscreen';
import TabBarComponent from './screen/TabBarComponent';
import Hometab from './screen/Hometab';
import Searchtab from './screen/Searchtab';
import Notificationtab from './screen/Notificationtab';
import Messagetab from './screen/Messagetab';
import Sidebar from './screen/Sidebar/Sidebar';


const HomescreenTabNavigator = TabNavigator({
    
  Home: {
      screen: Hometab
  },
  Searchtab: {
      screen: Searchtab
  },
  Notificationtab: {
      screen: Notificationtab
  },
   Messagetab: {
      screen: Messagetab
  }
 },
 {    
  tabBarComponent: props => (<TabBarComponent{...props} />), 
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
  activeTintColor: 'blue',
  inactiveTintColor: 'grey',
  activeBackgroundColor: "#fff",
  inactiveBackgroundColor: "#fff",
  showIcon: true,
  showLabel: false,
  },
 }
 )


export default class App extends React.Component {
  
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }
  

  render() {
  
    
    return( 

     
      
    <AppDrawerNavigator />
    );
  }
}



const AppDrawerNavigator = DrawerNavigator
(
  {
 Homescreen: { screen:  HomescreenTabNavigator },
//  Loginscreen: {screen: Loginscreen},
 Profile: { screen: Profilescreen},
 Lists: {screen: Listscreen},
 Moments: { screen: Momentscreen},
 Highlights: {screen: Highlightscreen},
 Searchscreen: { screen: Searchscreen},
  }
  , {

    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    }
  ,
  {
    contentComponent: props => <SideBar {...props} />
  }
)

const styles = StyleSheet.create({
container: {
  flex:1,
  backgroundColor: '#fff',
  alignItems: 'center',
},
});