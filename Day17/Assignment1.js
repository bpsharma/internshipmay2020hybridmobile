
  
import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

export default class InputTest extends Component {
state = {
  number1: '',
  number2: '',
  result: ''
}
result = (op) => {
  let a=parseFloat(this.state.number1);
  let b=parseFloat(this.state.number2);
  let r=0.0;
  switch(op){
    case '+': r=a+b;break;
    case '-': r=a-b;break;
    case '*': r=a*b;break;
    case '/': r=a/b;break;
  }
  this.setState({result:r});
}

render() {
  return (
    <View style = {styles.container}>
      <TextInput style = {styles.input} placeholder = 'Enter First Number' onChangeText = {(text) => {
  this.setState({ number1: text })
}}/>
<TextInput style = {styles.input} placeholder = 'Enter Second Number' onChangeText = {(text) => {
  this.setState({ number2: text })
}}/>
      <Text style = {styles.input}>
        {this.state.result}
      </Text>
      <TouchableOpacity style = {styles.factorialButton} onPress = {() => this.result('*')}>
        <Text style = {styles.factorialButtonText}> Multiply </Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.factorialButton} onPress = {() => this.result('/')}>
        <Text style = {styles.factorialButtonText}> Divide </Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.factorialButton} onPress = {() => this.result('+')}>
        <Text style = {styles.factorialButtonText}> Add </Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.factorialButton} onPress = {() => this.result('-')}>
        <Text style = {styles.factorialButtonText}> Subtract </Text>
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
