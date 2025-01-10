import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SecondScreen = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Second Screen!</Text>
      <Text style={styles.subtitle}>You navigated here successfully.</Text>
      <Button title="Go Back" onPress={goBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
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

export default SecondScreen;
