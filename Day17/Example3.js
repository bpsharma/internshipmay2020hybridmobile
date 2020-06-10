import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

export default class InputTest extends Component {
state = {
  number: '',
  result: ''
}
factorial = () => {
  let n=this.state.number;
  let f=1;
  for(let i=1;i<=n;i++)
    f=f*i;
  this.setState({result:f});
}
render() {
  return (
    <View style = {styles.container}>
      <TextInput style = {styles.input} placeholder = 'Enter a Number' onChangeText = {(text) => {
  this.setState({ number: text })
}}/>
      <Text style = {styles.input}>
        {this.state.result}
      </Text>
      <TouchableOpacity style = {styles.factorialButton} onPress = {() => this.factorial()}>
        <Text style = {styles.factorialButtonText}> Factorial </Text>
      </TouchableOpacity>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 23
  },
  
  input: {
  margin: 15,
  height: 40,
  borderColor: '#7a42f4',
  borderWidth: 1
  },

  factorialButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
  },

  factorialButtonText:{
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  }
})
