import React, { Component } from 'react';
import {StyleSheet, Image} from 'react-native';
import { Container, View, Header,Item,Icon,Input,Button,Right, Text, Footer, FooterTab} from 'native-base';


// just a dummy page
class Messagetab extends Component  {
  static navigationOptions = {
      tabBarIcon: ({ tintColor }) => (
      <Icon name="mail"  style={{color: tintColor}} />
    ),
     }
  
render() {
    return (
      <Container>
        
          <View style={{flex:1}}>
             
       </View>
    
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

export default Messagetab;