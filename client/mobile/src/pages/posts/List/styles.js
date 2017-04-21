import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  headline: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  tabs: {
    height: 38,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#F55D54',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  postList: {
    flex: 1,
    backgroundColor: 'lightblue'
  }
})

export default styles