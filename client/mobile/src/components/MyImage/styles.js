import { StyleSheet } from 'react-native'

const defaultWith = 40

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    width: defaultWith,
    height: defaultWith
  },
  text: {
    marginLeft: 4
  }
})

export default styles