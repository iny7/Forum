import React, {Component} from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native'

class Footer extends Component {

  constructor(){
    super()
    this.state = {
      curTab : 0
    }
   }

   handleClick(index){
    this.setState({
      curTab : index
    })
    this.props.changeTab(index)
   }

   render() {
      var curTab = this.state.curTab;
    
      return (
        <View style={styles.wrap}>
          <TouchableOpacity 
              onPress={this.handleClick.bind(this, 0)} 
              activeOpacity={0.8}
              style={styles.button}>
            <Text style={curTab == 0 ? styles.textActive : null}>遥控器</Text>
          </TouchableOpacity>
       		
          <TouchableOpacity 
              onPress={this.handleClick.bind(this, 1)} 
              activeOpacity={0.8}
              style={styles.button}>
            <Text style={curTab == 1 ? styles.textActive : null}>传感器</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
              onPress={this.handleClick.bind(this, 2)} 
              activeOpacity={0.8}
              style={styles.button}>
            <Text style={curTab == 2 ? styles.textActive : null}>关于</Text>
          </TouchableOpacity>
        </View>
      )
   }
}

var styles = StyleSheet.create({
   wrap : {
     borderTopWidth: 1,
     borderColor: '#CCC',
     flexDirection: 'row',
     height: 50,
     backgroundColor: '#FFF'
   },
   button : {
      flex:1,
      justifyContent: 'center',
      alignItems : 'center'
   },
   textActive: {
      color: '#5288D9',
   }
})
  


export default Footer