import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';

import Navigator from './navigation';
import store from './redux/store';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Provider store={store}>
        <ApplicationProvider {...eva} theme={eva.light}>
          <SafeAreaView style={s.container}>
            <Navigator />
          </SafeAreaView>
        </ApplicationProvider>
      </Provider>
    </>
  );
};

export default App;

const s = StyleSheet.create({
  container: { flex: 1 }
});

