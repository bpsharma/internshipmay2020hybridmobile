//An App to type a number in a text box and show factorial of that number
import * as React from 'react';
import {TextInput,Text, View, StyleSheet } from 'react-native';
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
      <Text style={styles.text}>Factorial App</Text>
        <TextInput style={styles.text} placeholder='Enter a number'  onChangeText={this.updateNumber}></TextInput>
        <Text style={styles.text}>{this.state.factorial}</Text>
      </View>
    );
  }
}
const styles=StyleSheet.create({
  container: {
    marginTop: 50,
    height: 600,
  },
  text: {
    marginLeft:20,
  },
});
