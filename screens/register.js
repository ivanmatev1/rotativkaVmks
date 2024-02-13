import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Image, Button } from 'react-native';
import { styles } from '../style';
import BasicButton from '../basics/button';
import LinkText from '../basics/linkText';

export default function Register({ navigation }) {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    console.log("Registeration data:")
    console.log("email: ", email)
    console.log("fullName: ", fullName)
    console.log("password: ", password)
  }

  return (
    <View style={styles.container}>
      <View style={styles.registerBox}>
        <Image 
          source={require('../assets/epichno-logo.png')}
          style = {styles.logo}
        />

        <View style={styles.inputBox}>
          <Text style={styles.text}>Email:</Text>
          <TextInput
            style = {styles.inputBar}
            placeholder='ivan.ivanov@gmail.com'
            onChangeText={setEmail}
            keyboardType='email-address'
          />

          <Text style={styles.text}>Full Name:</Text>
          <TextInput
            style = {styles.inputBar}
            placeholder='Ivan Ivanov'
            onChangeText={setFullName}
          />

          <Text style={styles.text}>Password:</Text>
          <TextInput
            style = {styles.inputBar}
            placeholder='*********'
            secureTextEntry={true}
            onChangeText={setPassword}
          />
        </View>

        <BasicButton text='Register' onPress={handleRegister} />
        <LinkText textBefore='Already have an account? ' linkedText='Login here' onPress={() => navigation.navigate('Login')} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
