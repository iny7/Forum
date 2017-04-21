import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    height: 140,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3',
    justifyContent: 'space-between'
  },

  // 上
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 30
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 10
  },
  author: {
  },
  more: {
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(255, 128, 0, 0.1)'
  },

  // 中
  body: {
    flex: 1,
    paddingVertical: 4,
    overflow: 'hidden',
  },
  title: {
    lineHeight: 24,
    fontWeight: 'bold'
  },
  content: {
    height: 36,
    lineHeight: 18
  },
  // 下
  footer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  icon: {
    color: 'red',
    fontSize: 14,
    marginRight: 8
  },
  time: {
    position: 'absolute',
    right: 0
  }
})

export default styles
