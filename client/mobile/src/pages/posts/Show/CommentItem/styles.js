import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  comment: {
    flexDirection: 'row',
    marginVertical: 20
  },
  commentLeft: {
    width: 54
  },
  commentRight: {
    flex: 1
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  name: {
    fontSize: 14
  },
  time: {
    fontSize: 12,
    color: '#666',
    marginVertical: 3
  },
  content: {
    lineHeight: 18,
    fontSize: 13
  },
})

export default styles