import React, {Component} from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native'

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.wrap}>
        <TouchableOpacity
            onPress={this.props.clickLeft}
            activeOpacity={0.8}
            style={styles.button}>
          <Text>我的</Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={this.props.clickRight}
            activeOpacity={0.8}
            style={styles.button}>
          <Text>设置</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    bottom: 15,
    left: 0,
    right: 0,
    height: 50,
    borderWidth: 1,
    borderColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFF'
  },
  button: {
    width: 50,
    height: 50,
    marginHorizontal: 15,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: 'green',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textActive: {
    color: '#5288D9',
  }
})
