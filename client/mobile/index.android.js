import React, { Component } from 'react'
import {
  AppRegistry,
  Navigator
} from 'react-native'

import App from './src/App'
AppRegistry.registerComponent('Forum', () => App)

// var defaultComponent = App;
// class rnDemo extends Component {

//    render() {
//        return (
//          <Navigator
//            initialRoute={{ component: defaultComponent }}
//            configureScene={() => {
//              return Navigator.SceneConfigs.PushFromRight;
//            }}
//            renderScene={(route, navigator) => {
//              let Component = route.component;
//              return <Component {...route.params} navigator={navigator}/>
//            }} />
//        );
//    }


// }
