import React, {Component} from 'react';
import HomePage from './pages/HomePage/index';
import BukuTamu from './pages/BukuTamu/index';
import FeedBack from './pages/FeedBack/index';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="BukuTamu" component={BukuTamu} />
          <Stack.Screen name="FeedBack" component={FeedBack} />
        </Stack.Navigator>
      </NavigationContainer>
      // <View>
      //   {/* <Home /> */}
      //   {/* <Props />
      // <StateDinamis /> */}
      //   {/* <Communication /> */}
      //   {/* <HomePage /> */}
      //   {/* <BukuTamu /> */}
      //   <FeedBack />
      // </View>
    );
  }
}

export default App;
