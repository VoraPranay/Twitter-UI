import React, { Component } from "react";
import { View, StyleSheet} from "react-native";
import { TabNavigator } from "react-navigation";
import { Container, Header, Content,  Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import Hometab from './Hometab';
import Searchtab from './Searchtab';
import Notificationtab from './Notificationtab';
import Messagetab from './Messagetab';
import TabBarComponent from './TabBarComponent';


const HomescreenTabNavigator = TabNavigator({
    
    Hometab: {
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
   
   export default HomescreenTabNavigator;