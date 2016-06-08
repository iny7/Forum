import React, {Component} from 'react'
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native'


var user = {
  username : 'admin',
  password : 'admin'
}


class LoginBox extends Component {

    constructor(props) {
      super(props);
      this.state = {
        username : '',
        password : '',
      }
    }

    login(){
      var username = this.state.username
      var password = this.state.password
      if(username == user.username && password == user.password){
        global.address = this.state.address != undefined ? this.state.address : '192.168.191.2'
          this.props.success()
        }else{
          alert('用户名或密码错误')
        }
    }

    changeUsername(username){
      this.setState({
        username : username,
        password : this.state.password,
        address : this.state.address
      })
    }

    changePassword(password){
      this.setState({
        username : this.state.username,
        password : password,
        address : this.state.address
      })
    }

    changeAddress(address){
      this.setState({
        username : this.state.username,
        password : this.state.password,
        address : address
      })
    }

    registry(){}
    forgetPass(){}

   render() {

      return (
     		<View style={styles.loginBox}>
          <View style={styles.inputBox}>
            <TextInput
              style={styles.input}
              value={this.state.username}
              onChangeText={this.changeUsername.bind(this)}             
              placeholder="用户名"
            />
          </View>
          
          <View style={[styles.inputBox,{marginTop:-1}]}>
            <TextInput
              style={styles.input}
              value={this.state.password}
              onChangeText={this.changePassword.bind(this)}
              placeholder="密码"
              password={true}
            />
          </View>

          <View style={[styles.inputBox,{marginTop:-1}]}>
            <TextInput
              style={styles.input}
              value={this.state.address}
              onChangeText={this.changeAddress.bind(this)}
              placeholder="地址"
            />
          </View>

          <TouchableOpacity 
              onPress={this.login.bind(this)} 
              activeOpacity={0.8}
              style={styles.button}>
            <Text style={styles.text}>登陆</Text>
          </TouchableOpacity>

          <View style={styles.bottom}>
            <TouchableOpacity
                onPress={this.registry.bind(this)} 
                activeOpacity={0.8}
                style={styles.link}>
              <Text style={styles.text}>注册</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={this.forgetPass.bind(this)} 
                activeOpacity={0.8}
                style={styles.link}>
              <Text style={styles.text}>忘记密码</Text>
            </TouchableOpacity>
          </View>
          
        </View>
      )
   }
}

var styles = StyleSheet.create({
    loginBox : {
      padding:25,
      paddingTop:50

    },
    inputBox : {
      height: 40,
      borderWidth: 1,
      borderColor: '#AAA',
      
    },
    input : {
      flex:1,
      backgroundColor: '#FFF',
      fontSize: 14,
    },
    button : {
      borderWidth: 1,
      borderColor: '#AAA',
      borderRadius: 5,
      backgroundColor : '#FFF',
      height: 40,
      marginTop: 10,
      marginBottom : 10,
      justifyContent: 'center',
      alignItems:'center',
    },
    bottom : {
      flexDirection:'row',
      justifyContent: 'space-between',
      marginTop : 20,
    },
    link: {
      
    },
})

export default LoginBox