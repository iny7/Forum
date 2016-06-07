import React, {Component} from 'react'
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native'


var MOCKED_MOVIES_DATA = [
  {title: '标题', year: '2015', posters: {thumbnail: ''}},
];

var data = [
      {
        name: '占哲琦',
        avatar: require('../../image/zzq.jpg'),
        duty: '环境配置、影像控制',
      },
      {
        name: '刘力文',
        avatar: require('../../image/llw.jpg'),
        duty: '写服务端、代码编写',
      },
      {
        name: '秦长熙',
        avatar: require('../../image/qcx.jpg'),
        duty: '写客户端、数据交互',
      },
      {
        name: '陈明伟',
        avatar: require('../../image/cmw.jpg'),
        duty: '小车控制、文档编写',
      },
]

class About extends Component {
   
   render() {
      return (
     		<View style={styles.wrap}>
          {data.map((item, index) => {
            var curStyle = index % 2 == 0 ? {
                      bgStyle : styles.itemBlue,
                      textStyle : styles.textBlue,
                    } : {
                      bgStyle : styles.item,
                      textStyle : styles.text,
                    }
            return (
            <View key={index} style={curStyle.bgStyle}>
              <Image
                source={item.avatar}
                style={styles.avatar}
                />
              <Text style={curStyle.textStyle}>{item.name}</Text>
              <Text style={curStyle.textStyle}>{item.duty}</Text>
            </View>)
          })}
          <Text style={styles.copyright}>Copyright © 2016 四川大学 软件学院</Text>
        </View>
      )
   }
}

var styles = StyleSheet.create({
    wrap : {
      flex : 1,
      backgroundColor: '#F0F0F2',
    },
    item : {
      padding: 20,
      flexDirection: 'row',
      // backgroundColor : '#45BA51',
      backgroundColor : '#9BBCEC',
      alignItems: 'center',
    },
    itemBlue : {
      padding: 20,
      flexDirection: 'row',
      backgroundColor : '#5288D9',
      // backgroundColor : '#7EAAEc',
      alignItems: 'center',
    },
    text : {
      color: '#333',
      marginHorizontal: 10,
    },
    textBlue : {
      color: '#FFF',  
      marginHorizontal: 10,
    },
    avatar: {
      // borderWidth : 1,
      // borderColor : 'green',
      width: 60,
      height: 60,
      borderRadius: 30
    },
    copyright : {
      flex: 1,
      marginTop: 20,
      textAlign: 'center',
      color : '#444',
    }
})

export default About