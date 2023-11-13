import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Root from './src/navigation/Root';
import { Auth0Provider } from 'react-native-auth0';

const App = () => {
  return (
    <Auth0Provider domain="YOUR_AUTH0_DOMAIN" clientId="YOUR_AUTH0_CLIENT_ID">
      <Root />
    </Auth0Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
