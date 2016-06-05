import React, {Component} from 'react'
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native'


class Sensor extends Component {
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
              <Text style={styles.textCenter}>30 °C</Text>
            </View>
          </View>
          <View  style={styles.mainTop}>
            <View style={styles.mainTopItem}>
              <Text style={styles.textCenter}>湿度</Text>
            </View>
            <View style={styles.mainTopItem}>
              <Text style={styles.textCenter}>100</Text>
            </View>
          </View>
        </View>
      )
   }
}

var styles = StyleSheet.create({
    wrap : {
      flex : 1,
      padding: 50,
      backgroundColor: '#F0F0F2',
      justifyContent: 'center'

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
    }
})

export default Sensor