import React, { Component } from 'react';
import {StyleSheet, Image} from 'react-native';
// import getTheme from '../../../native-base-theme/variables/material';
import {Container, Content, Icon,Input , Item, View,Header, Fab, Footer, FooterTab, Form,Body, Button,Picker,Left,Thumbnail, Text, Right } from "native-base";


class Searchtab extends Component  {
  static navigationOptions = {
    title: 'SearchTab',
    //setting the tabbar icon for the screen
    tabBarIcon: ({ tintColor }) => (
          <Icon name="search" style={{color: tintColor}} />
    ),
     }
 
//just dummy content
render() {
 
  return (
    
    <Container>
       
    
    
      <Content/>
    <Footer style={{backgroundColor: 'white'}}>
        <FooterTab style={{backgroundColor: 'white'}}>
            <Button >
              <Text style={{fontSize: 12, color: 'blue', fontWeight: 'bold'}}>All</Text>
            </Button>
            <Button>
              <Text style={{  fontWeight: 'bold'}}>Mentions</Text>
            </Button>
            
        </FooterTab>
          <Right>
              <Icon style={{ marginRight: 10, color: 'blue' }} name='settings'></Icon>
          </Right>
    </Footer>
      
 </Container>
    );
  }
}

const styles = StyleSheet.create({
 
  icon: {
    width: 30,
    height: 30,
  }
});

export default Searchtab;