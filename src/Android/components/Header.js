import React, {Component} from 'react'
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native'

class Header extends Component {
   render() {
   		return (
	   		<View style={styles.top}>
	          <Text style={styles.topText}>成都经销商</Text>
	        </View>
	    )
   }
}

var styles = StyleSheet.create({
	top : {
	    backgroundColor: '#F8F8F8',
	    height: 35,
	    justifyContent : 'center',
	    alignItems : 'center',
	    // borderStyle: 'solid',
	    borderBottomWidth: 1,
	    borderBottomColor: '#BBB',
	    marginBottom: 2,
	},
	topText : {
	    fontSize : 20,
	},
})

export default Header