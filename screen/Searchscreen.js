import React, { Component } from 'react';
import {StyleSheet, Image} from 'react-native';
import { Container,Content, View, Header,Left ,Thumbnail,Body,Item,Icon,Input,Button,Right, Text,Footer, FooterTab} from 'native-base';

// Screen that shows when the search tab is clicked
class SearchScreen extends Component  {
  static navigationOptions = {
    title: 'SearchScreen',
    headerStyle:{ backgroundColor: '#FFF'},
    headerTitleStyle:{ color: 'blue'},
     }
 
//just dummy content

render() {
 
    return (
      <Container>
        
        <Header style={{backgroundColor:'white'}}>
          <Left>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" style={{color: 'blue'}} />
            </Button>
          </Left>
          <Body>
          <Item style={{width: 200}}>
          <Input placeholder="Search Twitter" />
        </Item>
          </Body>
          <Right />
        </Header>

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

export default SearchScreen;