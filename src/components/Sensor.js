import React, {Component} from 'react'
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'


var image = require('../../image/refresh.jpg')
class Sensor extends Component {
    constructor(){
      super();
      this.state = {
        wend: '',
        shid: ''
      }
    }

     getInfo(){
      console.log("msg")
      fetch('http://192.168.191.10:8899/car?a=5').then(response => {
        var data = response.headers.map['da'][0].split(',')
        var wend = data[0] + '°C'
        var shid = data[1] + '%'
        this.setState({
          wend: wend,
          shid: shid
        })
      })
     }

   render() {
      
      return (
     		<View style={styles.wrap}>
          <View  style={styles.mainTop}>
            <View style={styles.mainTopItem}>
              <Text style={styles.textCenter}>名称</Text>
            </View>
            <View style={styles.mainTopItem}>
              <Text style={styles.textCenter}>数据</Text>
            </View>
          </View>
          <View  style={styles.mainTop}>
            <View style={styles.mainTopItem}>
              <Text style={styles.textCenter}>温度</Text>
            </View>
            <View style={styles.mainTopItem}>
              <Text style={styles.textCenter}>{this.state.wend}</Text>
            </View>
          </View>
          <View  style={styles.mainTop}>
            <View style={styles.mainTopItem}>
              <Text style={styles.textCenter}>湿度</Text>
            </View>
            <View style={styles.mainTopItem}>
              <Text style={styles.textCenter}>{this.state.shid}</Text>
            </View>
          </View>
          <TouchableOpacity 
              style={styles.button} 
              onPress={this.getInfo.bind(this)}>
              <Image
                source={image}
                style={styles.buttonImage}/>
            </TouchableOpacity>
        </View>
      )
   }
}

var styles = StyleSheet.create({
    button: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    wrap : {
      flex : 1,
      padding: 50,
      backgroundColor: '#F0F0F2',
      justifyContent: 'center',
      
    },
    mainTop : {
      backgroundColor : '#5288D9',
      flexDirection: 'row',
      justifyContent : 'space-between'
    },
    mainTopItem : {
      margin : 20,
    },
    thumbnail: {
      borderWidth : 1,
      borderColor : 'green',
      width: 50,
      height: 50,
    },
    textCenter : {
      // fontSize : 20,
      color : '#FFF',
      borderWidth : 1,
      borderColor : 'red',
    },
    buttonImage: {
      borderRadius: 35,
      width: 70,
      height: 70,
    },
})

export default Sensor