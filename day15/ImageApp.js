import * as React from 'react';
import {Image, View, StyleSheet } from 'react-native';
export default class App extends React.Component {
  render() {
    return (
      <View>
      <Image source={require('assets/abeslogo.png')} style={styles.logo}/>
      </View>
    );
  }
}
const styles=StyleSheet.create({
  logo: {
    width: 300,
    height: 500,
  },
});
