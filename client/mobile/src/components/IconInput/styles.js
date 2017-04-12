import { StyleSheet } from 'react-native'

const inputHeight = 40

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#CCC',
    marginBottom: 18,
    borderRadius: 6,
  },
  icon: {
    width: inputHeight,
    height: inputHeight,
    lineHeight: inputHeight,
    textAlign: 'center',
    backgroundColor: 'transparent',
    fontSize: 18,
  },
  input: {
    flex: 1,
    fontSize: 14,
  },
})

export default styles
