import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: '#FF0'
  },
  close: {
    position: 'absolute',
    right: '10%',
    top: '8%',
    zIndex: 1
  },
  logo: {
    color: 'red',
    fontSize: 60,
    marginTop: '30%',
    marginBottom: '10%'
  },
  content: {
    width: '80%',
  },
  form: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#CCC',
    marginBottom: 18,
    borderRadius: 6,
  },
  icon: {
    width: 40,
    height: 40,
    lineHeight: 40,
    textAlign: 'center',
    backgroundColor: 'transparent',
    fontSize: 18,
  },
  input: {
    flex: 1,
    fontSize: 14,
    // marginLeft: 5,
    // paddingLeft: 2,
  },
  btn: {
    backgroundColor: 'red',
    color: 'white'
  },
  bottom: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  link: {
    marginLeft: 2,
    borderBottomWidth: 1,
    borderColor: 'red',
  },
  text: {
    fontSize: 13,
    lineHeight: 14,
    color: '#27364E'
  }
})

export default styles
