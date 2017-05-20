/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import HelloWorld from './components/HelloWorld';

export default class NavigationProject extends Component {
  render() {
    let images = [
      'http://teamoalexandra.tk/img/01.jpg',
      'http://teamoalexandra.tk/img/02.jpg',
      'http://teamoalexandra.tk/img/03.jpg',
      'http://teamoalexandra.tk/img/04.jpg'
    ];
    let helloWorld = new HelloWorld('Eduardo!');

    return (
      <View style={styles.container}>
        <Text>{helloWorld.getMessage()}</Text>
        {images.map(function(image) { return <Image source={{uri: image}} style={{width: 193, height: 110}}/>; } }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('NavigationProject', () => NavigationProject);
