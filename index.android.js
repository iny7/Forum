import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator
} from 'react-native';


import App from './src/App';
import LoginPage from './src/LoginPage';

var defaultComponent = LoginPage;

class rnDemo extends Component {
   render() {
       return (
         <Navigator
           initialRoute={{ component: defaultComponent }}
           configureScene={(route) => {
             return Navigator.SceneConfigs.PushFromRight;
           }}
           renderScene={(route, navigator) => {
             let Component = route.component;
             return <Component {...route.params} navigator={navigator} />
           }} />
       );
   }


}

AppRegistry.registerComponent('car', () => rnDemo);
