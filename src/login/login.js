import React from "react";
import * as Facebook from 'expo-facebook';
import styles from "./style";
import { Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-elements';

export default function LoginScreen() {

  async function facebookLogIn() {
    try {
      await Facebook.initializeAsync('<APP_ID>');
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({ permissions: ['public_profile'], });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  const onLoginPress = async () => {

  }

  return (
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <Text style={styles.logoText}>Login</Text>
            <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true} />
            <View style={{ display: 'flex', alignItems: 'center' }}>
              <Button
                buttonStyle={styles.loginButton}
                onPress={() => onLoginPress()}
                title="Login"
              />
              <Button
                buttonStyle={styles.fbLoginButton}
                onPress={() => facebookLogIn()}
                title="Login with Facebook"
                color="#3897f1"
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );

}
