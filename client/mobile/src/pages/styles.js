import { StyleSheet } from 'react-native'

const barBgColor = '#F8F8F8'
const barBorderColor = '#E5E5E5'

const barTextColor = '#000'
const barButtonColor = '#333'

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: barBgColor,
  },
  navBarTitle: {
    color: barTextColor
  },
  barButtonTextStyle: {
    color: barButtonColor
  },
  barButtonIconStyle: {
    tintColor: barButtonColor
  },
  tabBarStyle: {
    height: 56,
    backgroundColor: barBgColor,
    borderTopWidth: 1,
    borderColor: barBorderColor
  },
  tabBarSelectedItemStyle: {
  },
  fixedNavBar: {
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
  }
})

export default styles
