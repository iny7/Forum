import React, { Component } from 'react'
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  WebView,
  DrawerLayoutAndroid
} from 'react-native'
// import fetch from 'isomorphic-fetch'

var images = {
  up: require('../../image/up.jpg'),
  left: require('../../image/left.jpg'),
  start: require('../../image/start.jpg'),
  pause: require('../../image/pause.jpg'),
  right: require('../../image/right.jpg'),
  down: require('../../image/down.jpg'),
  running: require('../../image/stop.jpg'),
}

export default class AirConditioner extends Component {
  constructor() {
    super()
    this.state = {
      running: false
    }
  }

  openDrawer() {
    this.refs.drawer.openDrawer();
  }

  clickTop() {
    var ip = 'http://' + global.address + ':8899/car?a=1'
    fetch(ip)
  }
  clickLeft() {
    var ip = 'http://' + global.address + ':8899/car?a=3'
    fetch(ip)
  }
  clickRight() {
    var ip = 'http://' + global.address + ':8899/car?a=4'
    fetch(ip)
  }
  clickBottom() {
    var ip = 'http://' + global.address + ':8899/car?a=2'
    fetch(ip)
  }
  clickCenter() {
    var ip = 'http://' + global.address + ':8899/car?a=0'
    fetch(ip)
  }

  handlePlay() {
    this.setState({
      running: !this.state.running
    })
  }

  render() {
    // var ip = 'http://'+global.address+':8080/javascript_simple.html'
    // var ip2 = 'https://modao.cc/app/4H3iwJoG6BKPg7SPwaYoPI71DGHYGuv?inapp=1'
    var ip = 'http://www.google.com'

    return (
   	<View style={styles.wrap}>
      <DrawerLayoutAndroid
        ref="drawer"
        drawerWidth={200}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() =><Text>我的</Text>}>
        <View style={styles.screenWrap}>
          <WebView
            style={styles.screen}
            source={{uri: ip}}
            automaticallyAdjustContentInsets={false}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            decelerationRate="normal"
            onNavigationStateChange={this.onNavigationStateChange}
            onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
            startInLoadingState={true}
            scalesPageToFit={this.state.scalesPageToFit}
          />
        </View>
        <View style={styles.controller}>
          <View style={styles.itemLine}>
            <TouchableOpacity
              style={styles.button}
              // onPress={this.clickTop.bind(this)}
              onPressIn={this.clickTop.bind(this)}
              onPressOut={this.clickCenter.bind(this)}>
              <Text>开/关</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPressIn={this.clickLeft.bind(this)}
              onPressOut={this.clickCenter.bind(this)}>
              <Text>模式</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.itemLine}>
            <TouchableOpacity
              style={styles.button}
              onPress={this.handlePlay.bind(this)}>
              <Text>-</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={this.handlePlay.bind(this)}>
              <Text>+</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.itemLine}>
            <TouchableOpacity
              style={styles.button}
              onPress={this.handlePlay.bind(this)}>
              <Text>风速</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={this.handlePlay.bind(this)}>
              <Text>上下扫风</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.itemLine}>
            <TouchableOpacity
              style={styles.button}
              onPress={this.handlePlay.bind(this)}>
              <Text>定时</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={this.handlePlay.bind(this)}>
              <Text>左右扫风</Text>
            </TouchableOpacity>
          </View>
        </View>
        </DrawerLayoutAndroid>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: '#F0F0F2',
  },
  screenWrap: {
    height: 220,
  },
  screen: {
    // height: 170,
    backgroundColor: '#FFF',
    backgroundColor: 'red',
  },
  controller: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center'
  },
  itemLine: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button: {
    margin: 5,
    alignItems: 'center'
  },
  buttonImage: {
    borderRadius: 35,
    width: 70,
    height: 70,
  },
  textCenter: {
    // fontSize : 20,
    color: '#FFF',
    borderWidth: 1,
    borderColor: 'red',
  }
})
