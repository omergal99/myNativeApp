import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import LoginScreen from './src/login/login';

export default function App() {

  const [count, setCount] = React.useState(10);

  return (
    <LoginScreen />
    );
    // <View style={styles.container}>

    //   <View style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px' }}>
    //     <Button title={'Increase'} onPress={() => setCount(count + 1)} />
    //     <Button title={'Decrease'} onPress={() => setCount(count - 1)} />
    //     <Text>Points:{count}</Text>
    //   </View>

    //   <View style={{ width: '100%', borderTopColor: 'black', borderTopWidth: 1, padding: '6px' }} />

    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
