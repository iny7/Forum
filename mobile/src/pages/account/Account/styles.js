import { StyleSheet } from 'react-native'

const avatarWidth = 80

const styles = StyleSheet.create({
  bg: {
    width: '100%',
    height: '100%'
  },
  header: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    width: avatarWidth,
    height: avatarWidth,
    borderRadius: avatarWidth / 2,
  },
  name: {
    top: 15,
    fontSize: 16,
    backgroundColor: 'transparent',
  },
  infoBar: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
  },
  info: {
    paddingVertical: 10,
    alignSelf: 'stretch',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
  },
  list: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 0,
    borderBottomWidth: 0
  }
})

export default styles