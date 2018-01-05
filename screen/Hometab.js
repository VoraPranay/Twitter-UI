import React from "react";
import {StyleSheet, Image, View,StatusBar } from 'react-native';
import {Header,Card,CardItem,Container, Content, Icon, Fab, Footer, FooterTab, Form,Body,Badge, Button,Picker,Left,Thumbnail, Text,Title, Right } from "native-base";
class Hometab extends React.Component {

  //setting the tabbar icon for the screen
  
   static navigationOptions = {
     tabBarIcon: ({ tintColor }) => (
         <Icon name="home" style={{color: tintColor}} />
    ),
       }
      
 
  constructor() {
    super();
    //setting state for FAB to check if pressed
    this.state = {
      active: true,
    };
  
  }


  render() {

  const { navigation } = this.props;
    
  return (

  <Container>
  
      <View>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />
   
      </View>

  <Content style={{backgroundColor:"transparent"}}>
    <Card>
      <CardItem>
        <Left>
         <Thumbnail source={require('./assets/image/familypic.png')} />
         <Body  style ={{flexDirection: 'row'}}>
           <Text>NativeBase </Text>
           <Badge small primary>
              <Icon name="star" style={{ fontSize: 15, color: '#fff', lineHeight: 20 }}/>
           </Badge>
           <Text note> @native  </Text>
           <Text note>3hr</Text>
             <Icon name='arrow-dropdown'/>
         </Body>
        </Left>
      </CardItem>
      <Body Style={{alignSelf:'centre'}}>
        <Text># Welcome in Twitter UI!</Text>
      </Body>

      <CardItem cardBody Style={{alignSelf:'centre'}}>
        <Image source={require('./assets/image/familypic.png')} style={{height: 200, width: 400,alignSelf:'flex-end' }}/>
      </CardItem>

      <CardItem style={{justifyContent: 'flex-end'}}>

               <Button small iconLeft transparent>
                 <Icon name="text" />
                 <Text style={ styles.buttonTextStyle }>02</Text>
               </Button>

             <Button small iconLeft transparent>
                <Icon name="git-compare" />
                <Text style={ styles.buttonTextStyle } >0</Text>
              </Button>

              <Button small iconLeft transparent>
                 <Icon name="heart" />
                 <Text style={ styles.buttonTextStyle }>11</Text>
              </Button>

              <Button default small transparent>
                 <Icon name="mail" />
                 <Text style={ styles.buttonTextStyle }>1</Text>
              </Button>
      </CardItem>
    </Card>


    <Card>
    <CardItem>
      <Left>
       <Thumbnail source={require('./assets/image/familypic.png')} />
       <Body  style ={{flexDirection: 'row'}}>
         <Text>NativeBase </Text>
         <Badge small primary>
            <Icon name="star" style={{ fontSize: 15, color: '#fff', lineHeight: 20 }}/>
         </Badge>
         <Text note> @native  </Text>
         <Text note>3hr</Text>
           <Icon name='arrow-dropdown'/>
       </Body>
      </Left>
    </CardItem>
    <Body Style={{alignSelf:'centre'}}>
      <Text># Welcome in Twitter UI!</Text>
    </Body>

    <CardItem cardBody Style={{alignSelf:'centre'}}>
      <Image source={require('./assets/image/familypic.png')} style={{height: 200, width: 400,alignSelf:'flex-end' }}/>
    </CardItem>

    <CardItem style={{justifyContent: 'flex-end'}}>

             <Button small iconLeft transparent>
               <Icon name="text" />
               <Text style={ styles.buttonTextStyle }>02</Text>
             </Button>

           <Button small iconLeft transparent>
              <Icon name="git-compare" />
              <Text style={ styles.buttonTextStyle } >0</Text>
            </Button>

            <Button small iconLeft transparent>
               <Icon name="heart" />
               <Text style={ styles.buttonTextStyle }>11</Text>
            </Button>

            <Button default small transparent>
               <Icon name="mail" />
               <Text style={ styles.buttonTextStyle }>1</Text>
            </Button>
    </CardItem>
  </Card>

  <Card>
      <CardItem>
        <Left>
         <Thumbnail source={require('./assets/image/familypic.png')} />
         <Body  style ={{flexDirection: 'row'}}>
           <Text>NativeBase </Text>
           <Badge small primary>
              <Icon name="star" style={{ fontSize: 15, color: '#fff', lineHeight: 20 }}/>
           </Badge>
           <Text note> @native  </Text>
           <Text note>3hr</Text>
             <Icon name='arrow-dropdown'/>
         </Body>
        </Left>
      </CardItem>
      <Body Style={{alignSelf:'centre'}}>
        <Text># Welcome in Twitter UI!</Text>
      </Body>

      <CardItem cardBody Style={{alignSelf:'centre'}}>
        <Image source={require('./assets/image/familypic.png')} style={{height: 200, width: 400,alignSelf:'flex-end' }}/>
      </CardItem>

      <CardItem style={{justifyContent: 'flex-end'}}>

               <Button small iconLeft transparent>
                 <Icon name="text" />
                 <Text style={ styles.buttonTextStyle }>02</Text>
               </Button>

             <Button small iconLeft transparent>
                <Icon name="git-compare" />
                <Text style={ styles.buttonTextStyle } >0</Text>
              </Button>

              <Button small iconLeft transparent>
                 <Icon name="heart" />
                 <Text style={ styles.buttonTextStyle }>11</Text>
              </Button>

              <Button default small transparent>
                 <Icon name="mail" />
                 <Text style={ styles.buttonTextStyle }>1</Text>
              </Button>
      </CardItem>
    </Card>

  </Content>



        <Fab
          
            active={this.state.active}
            style={{ backgroundColor: "blue", marginBottom: 30 }}
            position="bottomRight"
            direction="up"
            onPress={() => this.setState({ active:!this.state.active })}>
            <Icon name="leaf"  color="white"/>

            
        </Fab>

</Container>
   ) ;
  }
}

const styles = StyleSheet.create({
 
  icon: {
    width: 30,
    height: 30,
  },
  buttonTextStyle: {
            paddingLeft: 5,
            color: '#000'
          }
});

export default Hometab;