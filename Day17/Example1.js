import * as React from 'react';
import {TouchableOpacity, TextInput, Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Login Screen
      </Text>
      <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} placeholder="User ID"/>
      <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} secureTextEntry={true}   placeholder="Password"/>
      <TouchableOpacity>
        <Text style={{height: 40, borderColor: 'gray', borderWidth: 1, textAlign:'center', backgroundColor:'blue'}}>Login</Text>
      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
