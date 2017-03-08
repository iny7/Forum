import React, { Component } from 'react'
import {
  Image,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity
} from 'react-native'
import { Container, Header, Form, Segment, Toast, Drawer,
Item, Subtitle, Grid, Col, ListItem, List, Tab, Tabs, TabHeading,
Input, Label, Switch, Thumbnail, H1,
Badge, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base'

import {
  Scene,
  Reducer,
  Router,
  // Switch,
  Modal,
  Actions,
  ActionConst,
} from 'react-native-router-flux'

import Home from './pages/Home'

// import Header from './components/Header'
// import AirConditioner from './components/AirConditioner'
// import WaterHeater from './components/WaterHeater'
// import About from './components/About'
// import Footer from './components/Footer'

var image = require('../image/refresh.jpg')
class SideBar extends Component {
  render () {
    return <Button><Text>Text</Text></Button>
  }
}

// define this based on the styles/dimensions you use
const getSceneStyle = (/* NavigationSceneRendererProps */ props, computedProps) => {
  const style = {
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
  }
  // if (computedProps.isActive) {
  //   style.marginTop = computedProps.hideNavBar ? 0 : 64
  //   style.marginBottom = computedProps.hideTabBar ? 0 : 50
  // }
  return style
}

export default class Application extends Component {
  render () {
    return (
      <Router getSceneStyle={getSceneStyle}>
        <Scene key="root" hideNavBar>
          <Scene initial key="welcome" component={Home.Welcome} />
          <Scene  key="signin" component={Home.SignIn} title="Register" />
          <Scene key="signup" component={Home.SignUp} title="Login" />
        </Scene>
      </Router>
    )
  }
}

class App extends Component {
  closeDrawer = () => {
    this._drawer._root.close()
  }
  openDrawer = () => {
    this._drawer._root.open()
  }

  render () {
    const items = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can']
    return (
      <Drawer
        ref={(ref) => { this._drawer = ref }}
        content={<SideBar navigator={this._navigator} />}
        onClose={this.closeDrawer}>
      <Container>

        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Title</Title>
            <Subtitle>Subtitle</Subtitle>
          </Body>
          <Right />
        </Header>
        <Tabs>
             <Tab heading={ <TabHeading><Icon name="camera" /><Text>Camera</Text></TabHeading>}>
                 <Button active onPress={this.openDrawer}><Text>111</Text></Button>
             </Tab>
             <Tab heading="Tab2">
                 <Button active><Text>222</Text></Button>
             </Tab>
             <Tab heading={ <TabHeading><Icon name="apps" /></TabHeading>}>
                 <Button active><Text>333</Text></Button>
             </Tab>
         </Tabs>

        <Content padder>
          <Button onPress={()=> Toast.show({
                text: 'Wrong password!',
                position: 'center',
                type: 'danger',
                duration: 1500,
                buttonText: 'Okay'
              })}>
              <Text>Toast</Text>
            </Button>
          <Segment>
              <Button first><Text>Puppies</Text></Button>
              <Button active><Text>Puppies</Text></Button>
              <Button last><Text>Cubs</Text></Button>
          </Segment>
          <List dataArray={items} renderRow={(data) =>
                                  <ListItem>
                                      <Text>{data}</Text>
                                  </ListItem>
                              } />
          <ListItem thumbnail>
                                  <Left>
                                      <Thumbnail square size={80} source={image} />
                                  </Left>
                                  <Body>
                                      <Text>Sankhadeep</Text>
                                      <Text note>Its time to build a difference . .</Text>
                                  </Body>
                                  <Right>
                                      <Button transparent>
                                          <Text>View</Text>
                                      </Button>
                                  </Right>
                              </ListItem>
          <ListItem avatar>
                                  <Left>
                                      <Thumbnail source={image} />
                                  </Left>
                                  <Body>
                                      <Text>Kumar Pratik</Text>
                                      <Text note>Doing what you like will always keep you happy . .</Text>
                                  </Body>
                                  <Right>
                                      <Text note>3:43 pm</Text>
                                  </Right>
                              </ListItem>
          <ListItem icon>
              <Left>
                  <Icon name="plane" />
              </Left>
              <Body>
                <Text>Airplane Mode</Text>
              </Body>
              <Right>
                  <Switch value={false} />
              </Right>
          </ListItem>
          <ListItem icon>
              <Left>
                  <Icon name="wifi" />
              </Left>
              <Body>
                <Text>Wi-Fi</Text>
              </Body>
              <Right>
                  <Text>GeekyAnts</Text>
                  <Icon name="arrow-forward" />
              </Right>
          </ListItem>
          <ListItem icon>
              <Left>
                  <Icon name="bluetooth" />
              </Left>
              <Body>
                <Text>Bluetooth</Text>
              </Body>
              <Right>
                  <Text>On</Text>
                  <Icon name="arrow-forward" />
              </Right>
          </ListItem>
          <ListItem itemDivider>
                <Text>A</Text>
            </ListItem>
            <ListItem itemHeader first>
                                    <Text>COMEDY</Text>
                                </ListItem>
            <ListItem >
                <Text>Aaron Bennet</Text>
            </ListItem>
            <ListItem>
                <Text>Ali Connors</Text>
            </ListItem>
            <ListItem itemDivider>
                <Text>B</Text>
            </ListItem>
          <ListItem>
               <Text>Simon Mignolet</Text>
           </ListItem>
           <ListItem>
               <Text>Nathaniel Clyne</Text>
           </ListItem>
           <ListItem>
               <Text>Dejan Lovren</Text>
           </ListItem>
          <Grid>
                                 <Col style={{ backgroundColor: '#635DB7', height: 200 }}></Col>
                                 <Col style={{ backgroundColor: '#00CE9F', height: 200 }}></Col>
                             </Grid>
          <Icon active name='logo-apple' />
                              <Icon ios='ios-pizza-outline' android="md-pizza" style={{color: '#ffc125'}}/>
                              <Icon active name='ios-person' />
          <Form>
            <Item>
                        <Icon active name='home' />
                        <Input placeholder='Icon Textbox'/>
                    </Item>

                    <Item>
                        <Input placeholder='Icon Alignment in Textbox'/>
                        <Icon active name='swap' />
                    </Item>
            <Item rounded>
                        <Input placeholder='Rounded Textbox'/>
                    </Item>
            <Item underline>
                        <Input placeholder='Underlined Textbox' />
                    </Item>
            <Item regular>
                <Input placeholder='Regular Textbox'/>
            </Item>
            <Item fixedLabel>
              <Label>fixedLabel</Label>
              <Input placeholder="hehe"/>
            </Item>
            <Item inlineLabel>
              <Label>inlineLabel</Label>
              <Input />
            </Item>
            <Item>
              <Label>plain label</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>floatingLabel</Label>
              <Input />
            </Item>
            <Item stackedLabel>
                <Label>stackedLabel</Label>
                <Input />
            </Item>
          </Form>

          <Button iconLeft light>
              <Icon name='arrow-back' />
              <Text>Back</Text>
          </Button>

          <Button iconRight light>
              <Text>Next</Text>
              <Icon name='arrow-forward' />
          </Button>

          <Button iconLeft>
              <Icon name='home' />
              <Text>Home</Text>
          </Button>

          <Button transparent primary iconLeft>
              <Icon name='beer' />
              <Text>Pub</Text>
          </Button>

          <Button dark iconLeft>
              <Icon name='cog' />
              <Text>Settings</Text>
          </Button>

          <Button light full>
              <Text>Light</Text>
          </Button>
          <Button full>
              <Text>Primary</Text>
          </Button>
          <Button full success>
              <Text>Success</Text>
          </Button>
          <Button full info>
              <Text>Info</Text>
          </Button>
          <Button full warning>
              <Text>Warning</Text>
          </Button>
          <Button full danger>
              <Text>Danger</Text>
          </Button>
          <Button dark full>
              <Text>Dark</Text>
          </Button>
          <Button light><Text> Light </Text></Button>
          <Button primary><Text> Primary </Text></Button>
          <Button success><Text> Success </Text></Button>
          <Button info><Text> Info </Text></Button>
          <Button warning><Text> Warning </Text></Button>
          <Button danger><Text> Danger </Text></Button>
          <Button dark><Text> Dark </Text></Button>
          <Button light block>
              <Text>Light</Text>
          </Button>
          <Button block>
              <Text>Primary</Text>
          </Button>
          <Button block success>
              <Text>Success</Text>
          </Button>
          <Button block info>
              <Text>Info</Text>
          </Button>
          <Button block warning>
              <Text>Warning</Text>
          </Button>
          <Button block danger>
              <Text>Danger</Text>
          </Button>
          <Button dark block>
              <Text>Dark</Text>
          </Button>
          <Badge>
            <Text>2</Text>
          </Badge>
          <Badge primary>
            <Text>2</Text>
          </Badge>
          <Badge success>
            <Text>2</Text>
          </Badge>
          <Badge info>
            <Text>2</Text>
          </Badge>
          <Badge warning>
            <Text>2</Text>
          </Badge>
          <Badge danger>
            <Text>2</Text>
          </Badge>
          <Badge primary>
           <Icon name="star" />
          </Badge>
          <Badge
          style={{ backgroundColor: 'black' }}>
            <Text>1866</Text>
          </Badge>
        </Content>

        <Footer>
          <FooterTab>
            <Button>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button active full>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
      </Drawer>
    )
  }
}

// var arr = [
//   {
//     name: 'air',
//     component: AirConditioner,
//   }, {
//     name: 'water',
//     component: WaterHeater,
//   }, {
//     name: 'about',
//     component: About,
//   }
// ]

// class AppComponent extends Component {
//   changeTab (index) {
//     this.refs.header.changeTitle(arr[index].name)
//     this.refs.navi.jumpTo(arr[index])
//   }

//   openLeft = () => {
//     var air = this.refs.navi.refs.air
//     air.openDrawer()
//   }

//   openRight = () => {
//     // var about = this.refs.navi.refs.about
//     // about.openDrawer()
//   }

//    // <Header ref="header" title={arr[0].name}/>
//   render () {
//     return (
//       <View style={styles.container}>
//         <Footer
//           clickLeft={this.openLeft.bind(this)}
//           clickRight={this.openRight.bind(this)}
//         />
//       </View>
//     )
//   }
// }

// var styles = StyleSheet.create({
//   container: {
//     borderWidth: 2,
//     borderStyle: 'solid',
//     borderBottomWidth: 1,
//     borderBottomColor: '#BBB',
//     flex: 1,
//     backgroundColor: '#F5FCFF',
//   },
// })

// var routeMapper = {
//   // 左
//   LeftButton(route, navigator, index, navState) {
//         var color = 'transparent'
//         if(route.title == '消息'){
//             color = 'blue'
//         }
//         return (
//           <TouchableOpacity style={{
//             flex: 1,
//             backgroundColor: color
//             // justifyContent: 'flex-end',
//           }}
//             onPress={() => navigator.jumpTo(route)}>
//             <Text>1</Text>
//           </TouchableOpacity>
//         );

//   },
//   // 中
//   Title(route, navigator, index, navState) {
//     var color = 'transparent'
//         if(route.title == '工作'){
//             color = 'blue'
//         }
//         return (
//           <TouchableOpacity style={{
//             flex:1,
//             backgroundColor: color
//           }}
//           onPress={() => navigator.jumpTo(route)}>
//                 <Text>2</Text>
//           </TouchableOpacity>
//         );
//   },
//   // 右
//   RightButton(route, navigator, index, navState) {
//     var color = 'transparent'
//         if(route.title == '我的'){
//             color = 'blue'
//         }
//         return (
//           <TouchableOpacity style={{
//              flex:1,
//              backgroundColor: color
//           }}
//           onPress={() => navigator.jumpTo(route)}>
//               <Text>3</Text>
//           </TouchableOpacity>)
//   },
// };
