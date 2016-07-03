import React, {Component} from 'react'
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity
} from 'react-native'

import Header from './components/Header'
import AirConditioner from './components/AirConditioner'
import WaterHeater from './components/WaterHeater'
import About from './components/About'
import Footer from './components/Footer'


var arr = [
      {
        name : '空调遥控器',
        component : AirConditioner,
      },
      {
        name : '热水器',
        component : WaterHeater,
      },
      {
        name : '关于',
        component : About,
      }
];

class AppComponent extends Component {
   constructor(){
    super()
   }
   changeTab(index){
    this.refs.header.changeTitle(arr[index].name)
    this.refs.navi.jumpTo(arr[index])
   }
   // <Header ref="header" title={arr[0].name}/>
   render() {
      return (
        <View style={styles.container}>
          
          <Navigator
           ref="navi"
           initialRoute={arr[0]}
           initialRouteStack={arr}
           configureScene={(route) => {
             return Navigator.SceneConfigs.HorizontalSwipeJump;
           }}
           renderScene={(route, navigator) => {
             let Component = route.component;
             return <Component {...route.params} navigator={navigator}/>
           }} />
           <Footer></Footer>
        </View>
      );
  }
}

var styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#BBB',
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

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



export default AppComponent