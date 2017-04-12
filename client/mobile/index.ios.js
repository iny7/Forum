import { AppRegistry } from 'react-native'
import App from './src/App'

AppRegistry.registerComponent('Forum', () => App)

// import LoginPage from './src/LoginPage';

// var defaultComponent = App;
// class rnDemo extends Component {

//    render() {
//        return (
//          <Navigator
//            initialRoute={{ component: defaultComponent }}
//            configureScene={() => {
//              return Navigator.SceneConfigs.PushFromRight;
//            }}
//            renderScene={(route, navigator) => {
//              let Component = route.component;
//              return <Component {...route.params} navigator={navigator}/>
//            }} />
//        );
//    }
// }
