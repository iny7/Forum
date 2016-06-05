import React, {Component} from 'react'
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native'

import Header from './components/Header'
import Controller from './components/Controller'
import Sensor from './components/Sensor'
import About from './components/About'
import Footer from './components/Footer'


var arr = [
      {
        name : '遥控器',
        component : Controller,
      },
      {
        name : '传感器',
        component : Sensor,
      },
      {
        name : '关于',
        component : About,
      }]

class AppComponent extends Component {
   constructor(){
    super()
   }
   changeTab(index){
    this.refs.header.changeTitle(arr[index].name)
    this.refs.navi.jumpTo(arr[index])
   }
   render() {
      
      return (
	      <View style={styles.container}>
	        <Header ref="header" title={arr[0].name}/>
	        <Navigator
            ref="navi"
           initialRoute={arr[0]}
           initialRouteStack={arr}
           configureScene={(route) => {
             
             return Navigator.SceneConfigs.FloatFromRight;
           }}
           renderScene={(route, navigator) => {
             let Component = route.component;
             return <Component {...route.params} navigator={navigator} />
           }} />
	        <Footer changeTab={this.changeTab.bind(this)}/>
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

export default AppComponent