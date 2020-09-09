import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { PersistGate } from 'redux-persist/integration/react'

import Navigator from './navigation';
import Redux from './store';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Provider store={Redux.store}>
        <PersistGate loading={null} persistor={Redux.persistor}>
          <ApplicationProvider {...eva} theme={eva.light}>
            <SafeAreaView style={s.container}>
              <Navigator />
            </SafeAreaView>
          </ApplicationProvider>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;

const s = StyleSheet.create({
  container: { flex: 1 }
});

