import React from "react";
import { Image, StatusBar, Settings } from "react-native";
import {
  Header,
  Footer,
  Left,
  Right,
  Card,CardItem,
  Text,Body,
  Container,
  Thumbnail,
  List,
  ListItem,
  Content,
  View,
  Icon
} from "native-base";

//route name and icon as needs to be shown on the side bar 
// const routes = 
// [
// {name: "Profile",icon: 'contact'},
// {name: "Lists", icon: 'list-box'},
// {name: "Moments",icon: 'thunderstorm'},
// {name: 'Highlights',icon:'pricetags'} 
// ];
// let userdetails='';

export default class Drawerbar extends React.Component {
 
  

  render() {

   
    return (
      <Container>
        <Content>
        <Card>
            <CardItem >
            <View style = {{flex: 1, flexDirection: 'column', justifyContent: 'flex-end'}}>
              
              <Thumbnail source={require('./assets/image/familypic.png')} />
              <Text style={{fontWeight: 'bold'}}>pRANAY</Text>
              <Text note>HI_PRANAY</Text>
                  
              
              <View style = {{flexDirection: 'row'}} >
                <Text>30 Following </Text>
                <Text >10 Followers</Text>
              </View>
            </View>
            </CardItem>
           
        
          <CardItem style={{elevation: 2,borderBottomWidth: 4,borderTopWidth: 4}}>

         
          <List>
           
                <ListItem
                  button noborder
                  onPress={() => this.props.navigation.navigate(Profile)}
                  icon
                  
                >
                <Left>
                <Icon name= 'contact'/>
                
              </Left>
              <Body>
              <Text>Profile</Text>
              </Body>
              <Right/>
                
                  
                </ListItem>
              );
            }}
         </List>
          </CardItem>
          <CardItem >
            <List>
              <ListItem>
                  <Text>Settings and Privacy</Text>               
              </ListItem>
              <ListItem>
                  <Text>Help Center</Text>               
              </ListItem>
            </List>
          </CardItem>
          </Card>
          <Footer >
            <Left>
             <Icon style={{ marginLeft: 10 }} name='moon'></Icon>
           </Left>
            <Right>
            <Icon style={{ marginRight: 10 }} name='qr-scanner'></Icon>
            </Right>
          </Footer>
        </Content>
      </Container>
    );
  }
}