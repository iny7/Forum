import React, {Component} from 'react'
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'

// import fetch from 'isomorphic-fetch'


var images = {
  up: require('../../image/up.jpg'),
  left: require('../../image/left.jpg'),
  start: require('../../image/start.jpg'),
  pause: require('../../image/pause.jpg'),
  right: require('../../image/right.jpg'),
  down: require('../../image/down.jpg'),
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
        // .then(response => response.json())
        // .then(json => dispatch(receiveBooks(json)))
      this.setState({
        running : !this.state.running
      })
   }

   render() {

      return (
     	<View style={styles.wrap}>
          <View  style={styles.video}>
            <Text>这里放视频</Text>
          </View>
          
          <View style={styles.controller}>
              <View style={styles.itemLine}>
                <TouchableOpacity style={styles.button} onPress={this.clickTop.bind(this)}>
                  <Image
  	                source={images.up}
  	                style={styles.buttonImage}/>
                </TouchableOpacity>
               </View>
                
               <View style={styles.itemLine}>
                <TouchableOpacity style={styles.button} onPress={this.clickLeft.bind(this)}>
                  <Image
  	                source={images.left}
  	                style={styles.buttonImage}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}   activeOpacity={0.8} onPress={this.clickCenter.bind(this)}>
                  <Image
                    source={this.state.running ? images.pause : images.start}
                    style={styles.buttonImage}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.clickRight.bind(this)}>
                  <Image
                    source={images.right}
                    style={styles.buttonImage}/>
                </TouchableOpacity>
              </View>
              <View style={styles.itemLine}>
                <TouchableOpacity style={styles.button} onPress={this.clickBottom.bind(this)}>
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
      backgroundColor: '#F0F0F2'
    },
    video : {
      backgroundColor : '#5288D9',
      height: 200,
      flexDirection: 'row',
      justifyContent : 'space-between'
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