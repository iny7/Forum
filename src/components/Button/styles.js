import { StyleSheet } from 'react-native'

// 先不删, 后面为Button添加主题, active, disable等props时, 会用到
const styles = StyleSheet.create({
  btn: {
    borderRadius: 6,
    height: 40,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#333',
    fontSize: 16,
  }
})

export default styles
