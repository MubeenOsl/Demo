import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {useAuth0} from 'react-native-auth0';

const Home = () => {
  const {authorize, user, isLoading, error} = useAuth0();
  const login = async () => {
    await authorize();
  };
  if (isLoading) {
    return (
      <View>
        <Text>SDK is Loading</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
      }}>
      {!user && <Button onPress={login} title="Log in" />}
      {user && <Text>Logged in as {user.name}</Text>}
      {error && <Text>{error.message}</Text>}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
