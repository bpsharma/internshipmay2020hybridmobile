//Select a country from drop down and maintain the state of current country
import * as React from 'react';
import {Picker,Text, View, StyleSheet } from 'react-native';
export default class App extends React.Component {
  state = {country: ''}

  updateCountry = (country) => {
    this.setState({ country: country })
}
  render() {
    return (
      <View style={styles.container}>
      <Text>Select Country Name</Text>
        <Picker onValueChange={this.updateCountry} selectedValue = {this.state.country}>
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
