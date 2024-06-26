import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , textInput, Button} from 'react-native';

export default function Registro() {
  return (
    <View style={styles.container}>
    <Text>Username:</Text>
        <textInput 
        style={styles.input}
        value={username}
        onChangeText={setUsername}
    />
    <Text>Password:</Text>
        <TextInput
        style={styles.imput}
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
    />
    <Button
        title="Login"
        onPress={handleLogin}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
