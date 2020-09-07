import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { Provider } from 'react-redux'

import Navigator from './navigation';
import store from './redux/store';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Provider store={store}>
        <SafeAreaView style={s.container}>
          <Navigator />
        </SafeAreaView>
      </Provider>
    </>
  );
};

export default App;

const s = StyleSheet.create({
  container: { flex: 1 }
})

