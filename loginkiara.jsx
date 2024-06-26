
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ImageBackground } from 'react-native';

export default function Login() {
  const [username, setUsername] = useState('');  /// almacena el usuario
  const [password, setPassword] = useState(''); /// almacena la contraseña
  const [errorMessage, setErrorMessage] = useState(''); /// almacena mensajes de error

  const handleSubmit = async () => {  /// resetea el mensaje de error
    setErrorMessage('');

    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    if (response.ok) {
      Alert.alert('Login exitoso');
    } else {
      const error = await response.text();
      setErrorMessage(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput  ///para ingresar el usuario
        style={styles.input}
        placeholder="Nombre de usuario"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput  ///para ingresar la contraseña
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleSubmit} />
      {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '216vh',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#a16894',
  },
  title: {
    fontSize: 30,
    marginBottom: 24,
    textAlign: 'center',
    color: '#fff',
  },
  input: {
    height: 40,
    width: 156,
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 8,
    marginBottom: 18,
    backgroundColor: 'white',
  },
  errorMessage: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
});

