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
            <Text style={curTab == 0 ? styles.textActive : null}>我的</Text>
          </TouchableOpacity>
       		
          <TouchableOpacity
              onPress={this.handleClick.bind(this, 1)}
              activeOpacity={0.8}
              style={styles.button}>
            <Text style={curTab == 1 ? styles.textActive : null}>设置</Text>
          </TouchableOpacity>
        </View>
      )
   }
}

var styles = StyleSheet.create({
   wrap : {
     position: 'absolute',
     bottom:15,
     left:0,
     right:0,
     height: 50,
     borderWidth: 1,
     borderColor: 'red',
     flexDirection: 'row',
     justifyContent: 'space-between',
     backgroundColor: '#FFF'
   },
   button : {
      width: 50,
      height:50,
      marginHorizontal:15,
      borderWidth:3,
      borderRadius: 10,
      borderColor: 'green',
      justifyContent: 'center',
      alignItems : 'center'
   },
   textActive: {
      color: '#5288D9',
   }
})
  


export default Footer