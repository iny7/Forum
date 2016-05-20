import React, {Component} from 'react'
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native'

class Footer extends Component {
   render() {
      return (
     		<View style={styles.bottom}>
          <Text>bottom</Text>
        </View>
      )
   }
}

var styles = StyleSheet.create({
   bottom : {
     height: 50,
     backgroundColor: 'blue'
   },
})
  


export default Footer