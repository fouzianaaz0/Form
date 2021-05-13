import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';

const ContactDetail = (props) => {

  return (
    <View>
      <Text style={styles.TextHead}>First Name</Text>
      <TextInput
        style={styles.TextInput}
        placeholder={props.FirstName}
        onChangeText={props.onChangeFirstName}
        value={props.FirstNameValue}
        onSubmitEditing = {props.onSubmitEditingName}
        ref = {props.InputRefferenceFirst}
      />
      <Text style={styles.Text1}>Last Name</Text>
      <TextInput
        style={styles.TextInput}
        placeholder={props.LastName}
        onChangeText={props.onChangeLastName}
        value={props.LastNameValue}
        onSubmitEditing = {props.onSubmitEditingLast}
        ref = {props.InputRefferenceLast}
      />
      <Text style={styles.Text}>Email</Text>
      <TextInput
        style={styles.TextInput}
        placeholder={props.Email}
        onChangeText={props.onChangeEmail}
        value={props.emailValue}
        onSubmitEditing = {props.onSubmitEditingEmail}
        ref = {props.InputRefferenceEmail}
      />
      <Text style={styles.Text}>Phone Number *</Text>
      <TextInput
        style={styles.TextInput}
        placeholder={props.Phone}
        onChangeText={props.onChangePhone}
        value={props.phoneValue}
        onSubmitEditing = {props.onSubmitEditingPhone}
        ref = {props.InputRefferencePhone}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  TextInput: {
    borderWidth: 1,
    borderColor: 'gray',
    height: 45,
    marginTop: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    elevation: 1,
  },
  Text: {
    marginTop: 20,
    fontSize: 14,
    color: 'gray',
  },
  NumText: {
    fontWeight: '700',
    color: '#3792cb',
  },
});

export default ContactDetail;
