//An App to select a number and show factorial of that number
import * as React from 'react';
import {Picker,Text, View, StyleSheet } from 'react-native';
export default class App extends React.Component {
  state = {number: 0,factorial:0}

  updateNumber = (number) => {
    this.setState({ number: number })
    let f=1;
    for(let i=1;i<=number;i++)
      f=f*i;
    this.setState({factorial:f});
}
  render() {
    return (
      <View style={styles.container}>
      <Text>Factorial App</Text>
        <Picker selectedValue = {this.state.number} onValueChange={this.updateNumber}>
          <Picker.Item label = "Select a Number" value = "0" />
          <Picker.Item label = "1" value = "1" />
          <Picker.Item label = "2" value = "2" />
          <Picker.Item label = "3" value = "3" />
          <Picker.Item label = "4" value = "4" />
          <Picker.Item label = "5" value = "5" />
        </Picker>
        <Text>{this.state.factorial}</Text>
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
