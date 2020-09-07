import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';

import Navigator from './navigation';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={s.container}>
        <Navigator />
      </SafeAreaView>
    </>
  );
};

export default App;

const s = StyleSheet.create({
  container: { flex: 1 }
})

