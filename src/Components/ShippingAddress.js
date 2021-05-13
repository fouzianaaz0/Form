import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

export default class ShippingAddress extends React.Component {
  render(){
  return (
    <View>
      <Text style={styles.Text}>Address *</Text>
      <TextInput
       
        style={styles.TextInput}
        placeholder={this.props.Address}
        onChangeText={this.props.onChangeAddress}
        value={this.props.addressValue}
        onSubmitEditing = {props.onSubmitEditingAdd}

      />
      <Text style={styles.Text}>City *</Text>
      <TextInput
        style={styles.TextInput}
        placeholder={this.props.City}
        onChangeText={this.props.onChangeCity}
        value={this.props.cityValue}
        onSubmitEditing = {props.onSubmitEditingCity}
      />
      <Text style={styles.Text}>Country *</Text>
      <TextInput
        style={styles.TextInput}
        placeholder={this.props.Country}
        onChangeText={this.props.onChangeCountry}
        value={this.props.countryValue}
        onSubmitEditing = {props.onSubmitEditingCountry}
      />
      <Text style={styles.Text}>State / Province *</Text>
      <TextInput
        style={styles.TextInput}
        placeholder={this.props.State}
        onChangeText={this.props.onChangeState}
        value={this.props.stateValue}
        onSubmitEditing = {props.onSubmitEditingState}
      />
      <Text style={styles.Text}>Zip / Postal Code *</Text>
      <TextInput
        style={styles.TextInput}
        placeholder={this.props.PostalCode}
        onChangeText={this.props.onChangeZip}
        value={this.props.zipValue}
        onSubmitEditing = {props.onSubmitEditingZip}
      />
    </View>
  );
};
}

const styles = StyleSheet.create({
  TextInput: {
    borderWidth: 1,
    borderColor: 'gray',
    height: 45,
    marginTop: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
  },
  Text: {
    marginTop: 10,
    fontSize: 14,
    color: 'gray',
  },
});
