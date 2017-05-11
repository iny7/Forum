import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  page: {
    padding: 24
  },
  postTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  postInfo: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  author: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    marginLeft: 6,
  },
  time: {
    fontSize: 13,
    marginTop: 1,
    marginLeft: 10,
  },
  opens: {
    fontSize: 12,
    color: '#333',
    marginLeft: 10
  },
  postContent: {
    width: '100%'
  },
  // TODO 横向的icon + 数字 按钮, 做成compoent
  like: {
    alignSelf: 'flex-end',
    marginTop: 10,
    marginRight: 10,
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: 'red',
    marginRight: 4
  },
  comments: {
    // backgroundColor: 'lightgreen'
  },
  commentCount: {
    marginVertical: 10
  },
  commentArea: {

  }
})

export default styles
