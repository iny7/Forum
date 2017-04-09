import { StyleSheet } from 'react-native'

const avatarWidth = 80

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  bg: {
    width: '100%',
    height: '100%'
  },
  avatar: {
    position: 'absolute',
    bottom: 80,
    left: '50%',
    width: avatarWidth,
    height: avatarWidth,
    marginLeft: -avatarWidth / 2,
    borderRadius: avatarWidth / 2,
  },
  infoBar: {
    width: '100%',
    height: 60,
    paddingVertical: 10,
    flexDirection: 'row',
  },
  info: {
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