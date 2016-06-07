import React, {Component} from 'react'
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  WebView
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
var MOCKED_MOVIES_DATA = [
  {title: '标题', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
];

class Controller extends Component {
   
   constructor(){
    super();
    this.state = {
      running : false
    }
   }

    clickTop(){
      fetch('http://192.168.191.10:8899/car?a=1')
    }
    clickLeft(){
      fetch('http://192.168.191.10:8899/car?a=3')
    }
    clickRight(){
      fetch('http://192.168.191.10:8899/car?a=4')
    }
    clickBottom(){
      fetch('http://192.168.191.10:8899/car?a=2')
    }
     clickCenter(){
        fetch('http://192.168.191.10:8899/car?a=0')
     }

     handlePlay(){
      this.setState({
        running : !this.state.running
      })
     }
   render() {

      return (
     	<View style={styles.wrap}>
            {this.state.running ?
              <View style={styles.topCon2}>
                <WebView
                  automaticallyAdjustContentInsets={false}
                  style={styles.video}
                  source={{uri: 'http://192.168.191.10:8080/javascript_simple.html'}}
                  javaScriptEnabled={true}
                  domStorageEnabled={true}
                  decelerationRate="normal"
                  startInLoadingState={true}
                  scalesPageToFit={true}
                /> 
              </View>: 
                <View style={styles.topCon}>
                  <Image
                      source={images.running}
                      style={styles.video}
                      resizeMode='cover'/>
                </View>
              }
          
          <View style={styles.controller}>

              <View style={styles.itemLine}>
                <TouchableOpacity 
                  style={styles.button} 
                  // onPress={this.clickTop.bind(this)}
                  onPressIn={this.clickTop.bind(this)}
                  onPressOut={this.clickCenter.bind(this)}>
                  <Image
  	                source={images.up}
  	                style={styles.buttonImage}/>
                </TouchableOpacity>
               </View>
                
               <View style={styles.itemLine}>
                <TouchableOpacity 
                  style={styles.button} 
                  onPressIn={this.clickLeft.bind(this)}
                  onPressOut={this.clickCenter.bind(this)}>
                  <Image
  	                source={images.left}
  	                style={styles.buttonImage}/>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.button}   
                  onPress={this.handlePlay.bind(this)}>
                  <Image
                    source={this.state.running ? images.pause : images.start}
                    style={styles.buttonImage}/>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.button} 
                  onPressIn={this.clickRight.bind(this)}
                  onPressOut={this.clickCenter.bind(this)}>
                  <Image
                    source={images.right}
                    style={styles.buttonImage}/>
                </TouchableOpacity>
              </View>
              <View style={styles.itemLine}>
                <TouchableOpacity 
                  style={styles.button} 
                  onPressIn={this.clickBottom.bind(this)}
                  onPressOut={this.clickCenter.bind(this)}>
                  <Image
                    source={images.down}
                    style={styles.buttonImage}/>
                </TouchableOpacity>
              </View>
          </View>
        </View>
      )
   }
}

var styles = StyleSheet.create({
    wrap : {
      flex : 1,
      backgroundColor: '#F0F0F2',
    },
    topCon : {
      height: 200,
      backgroundColor : '#FFF',
      alignItems: 'center'
    },
    topCon2 : {
      backgroundColor : '#FFF',
      height: 200,
    },
    video : {
      flex: 1,
      // backgroundColor : '#5288D9',
      backgroundColor : '#FFF',
    },
    videoImg : {
      flex: 1,
    },
    controller: {
    	flex: 1,
    	backgroundColor : '#FFF',
    	justifyContent: 'center'
    },
    itemLine : {
    	flexDirection: 'row',
    	justifyContent: 'center'
    },
    button : {
    	margin: 5,
    	alignItems: 'center'
    },
    buttonImage: {
      borderRadius: 35,
      width: 70,
      height: 70,
    },
    textCenter : {
      // fontSize : 20,
      color : '#FFF',
      borderWidth : 1,
      borderColor : 'red',
    }
})

export default Controller