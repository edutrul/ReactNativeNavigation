import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  StyleSheet,
  Alert
} from 'react-native';
import { StackNavigator } from 'react-navigation';


class ChatScreen extends Component {
  static navigationOptions = {
    title: 'Chat with Lucy',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Chat with Lucy</Text>
        <Button
          onPress={() => navigate('Third')}
          title='Open third screen'
        />
      </View>
    );
  }
}

class ThirdScreen extends Component {
  static navigationOptions = {
    title: 'Third screen oh yeah',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>This is a third screen</Text>
        <Button
          onPress={() => navigate('Fourth')}
          title='Open fourth screen'
        />
      </View>
    );
  }
}

class FourthScreen extends Component {
  static navigationOptions = {
    title: 'Fourth screen oh yeah',
  };
  render() {
    return (
      <View>
        <Text>This is a Fourth screen</Text>
      </View>
    );
  }
}


class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Chat')}
          title = 'Open Other Screen'
          />
        <Button
          onPress={() => navigate('Third')}
          title = 'Open fourth Screen'
          />
        <Button
          onPress={() => navigate('Fourth')}
          title = 'Open fourth Screen'
          />
      </View>
    );
  }
}

const NavigationProject = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
  Third: { screen: ThirdScreen },
  Fourth: { screen: FourthScreen },
});

AppRegistry.registerComponent('NavigationProject', () => NavigationProject);
