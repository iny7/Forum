import React, {Component} from 'react'
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native'


import Header from './components/Header'
import LoginBox from './components/LoginBox'

import App from './App'


class Login extends Component {
    constructor(props) {
        super(props);
    }

    switchPage(){
      this.props.navigator.replace({
          component: App,
          // params: {
          //   name: this.state.name,
          //   age: this.state.age,
          //   changeMyAge: (age) => {
          //     this.setState({ age })
          //   }
          // }
        })
    }
    

   render() {
      return (
	      <View style={styles.container}>
	        <Header title="登陆"/>
	        <View style={styles.main}>
            <LoginBox success={this.switchPage.bind(this)}/>
          </View>
	      </View>
	    );
	}
}

var styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#BBB',
    flex: 1,
    backgroundColor: '#F5FCFF',
    // backgroundColor: '',
  },
  main : {
    flex : 1,
    backgroundColor: '#F0F0F2'
  }
});

export default Login