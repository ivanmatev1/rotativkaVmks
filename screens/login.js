import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Image, Button } from 'react-native';
import { styles } from '../style';
import BasicButton from '../basics/button';
import LinkText from '../basics/linkText';

export default function Register({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    console.log("Login data:")
    console.log("email: ", email)
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

          <Text style={styles.text}>Password:</Text>
          <TextInput
            style = {styles.inputBar}
            placeholder='*********'
            secureTextEntry={true}
            onChangeText={setPassword}
          />
        </View>

        <BasicButton text='Login' onPress={handleRegister} />
        <LinkText textBefore="Don't have an account? " linkedText='Register here' onPress={() => navigation.goBack()} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
