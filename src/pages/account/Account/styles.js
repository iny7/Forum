import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
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