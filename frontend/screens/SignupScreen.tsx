import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    if (!email.includes('@')) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }
    if (username.trim() === '') {
      Alert.alert('Invalid Username', 'Username cannot be empty.');
      return;
    }
    if (password.length < 6) {
      Alert.alert('Invalid Password', 'Password must be at least 6 characters long.');
      return;
    }

    // Call your API for signup logic here
    Alert.alert('Success', 'Account created successfully!');
    navigation.navigate('LoginScreen'); // Navigate to login after signup
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.link}
        onPress={() => navigation.navigate('LoginScreen')}
      >
        <Text style={styles.linkText}>Already have an account? Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#FFFC00', // Snapchat yellow
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
  },
  linkText: {
    color: '#007AFF',
    fontSize: 16,
  },
});

export default SignupScreen;
