import * as React from 'react';
import {Picker,Text, View, StyleSheet } from 'react-native';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text>Using Dropdown</Text>
        <Picker>
          <Picker.Item label = "India" value = "in" />
          <Picker.Item label = "China" value = "ch" />
          <Picker.Item label = "United States" value = "us" />
        </Picker>
      </View>
    );
  }
}
const styles=StyleSheet.create({
  container: {
    marginTop: 50,
    height: 600,
  },
});
