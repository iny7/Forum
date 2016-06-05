import React, {Component} from 'react'
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native'

class Header extends Component {
	constructor(){
		super();

	}
	changeTitle(title){
		this.setState({
			title : title
		})
	}
	componentWillMount(){
		this.setState({
			title : this.props.title
		})	
	}
   render() {
   		return (
	   		<View style={styles.top}>
	   		  <StatusBar
	   		  	 translucent={true}
			     backgroundColor='rgba(255, 255, 255, 0)'
			     barStyle="light-content"
			   />
	          <Text style={styles.topText}>{this.state.title}</Text>
	        </View>
	    )
   }
}

var styles = StyleSheet.create({
	top : {
	    backgroundColor: '#F8F8F8',
	    height: 50,
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