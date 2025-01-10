import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const navigateToAnotherScreen = () => {
    navigation.navigate('CafeScreen'); // Replace 'AnotherScreen' with your target screen name
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Screen!</Text>
      <Text style={styles.subtitle}>This is the main hub of your app.</Text>
      <Button title="Go to Another Screen" onPress={navigateToAnotherScreen} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default HomeScreen;
