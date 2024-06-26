import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground,SafeAreaView } from 'react-native';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [numero, setNumero] = useState('');
  const [dni, setDni] = useState('');
  const [codigo, setCodigo] = useState('');
  const [email, setEmail] = useState('');
  const [usario, setUsuario] = useState('');
  const [contra, setContra] = useState('');
  const image= {uri:'https://i.pinimg.com/564x/09/8f/45/098f45b9d886bcdfb24590d213a47668.jpg'};

  const handleSubmit = () => {
    // Validación de datos (opcional)

    // Envío de datos del formulario (opcional)

    // Mostrar mensaje de confirmación o realizar otra acción
    alert('¡Formulario enviado correctamente!');
  };
 
  return (
  <SafeAreaView style={styles.padre}>
      <ImageBackground source={image} resizeMode='cover' style={styles.image} >
      <View style={styles.container}>
    
    
        <Text style={styles.titulo}>Formulario</Text>

        <View style={styles.campo}>
          <Text style={styles.etiqueta}>Nombre:</Text>
          <TextInput
            style={styles.input}
            value={nombre}
            onChangeText={(text) => setNombre(text)}
          />
        </View>

        <View style={styles.campo}>
          <Text style={styles.etiqueta}>Apellido:</Text>
          <TextInput
            style={styles.input}
            value={apellido}
            onChangeText={(text) => setApellido(text)}
          />
        </View>

        <View style={styles.campo}>
          <Text style={styles.etiqueta}>N° celular:</Text>
          <TextInput
            style={styles.input}
            value={numero}
            onChangeText={(text) => setNumero(text)}
          />
        </View>

        <View style={styles.campo}>
          <Text style={styles.etiqueta}>DNI:</Text>
          <TextInput
            style={styles.input}
            value={dni}
            onChangeText={(text) => setDni(text)}
          />
        </View>

        <View style={styles.campo}>
          <Text style={styles.etiqueta}>Codigo postal:</Text>
          <TextInput
            style={styles.input}
            value={codigo}
            onChangeText={(text) => setCodigo(text)}
          />
        </View>

        <View style={styles.campo}>
          <Text style={styles.etiqueta}>Correo electrónico:</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.campo}>
          <Text style={styles.etiqueta}>Elija su usuario:</Text>
          <TextInput
            style={styles.input}
            value={usario}
            onChangeText={(text) => setUsuario(text)}
          />
        </View>
        <View style={styles.campo}>
          <Text style={styles.etiqueta}>Elija su cotraseña :</Text>
          <TextInput
            style={styles.input}
            value={contra}
            onChangeText={(text) => setContra(text)}
          />
        </View>
        <Button title="Enviar formulario" onPress={handleSubmit} style={styles.boton} />
        
        </View>
      </ImageBackground >
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  padre: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    width: '216vh',
    height: "100vh",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#r434'
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 36,
    fontWeight: 'light',
    textAlign: 'center',
    marginBottom: 30,
  },
  campo: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  etiqueta: {
    width: 120,
    marginRight: 6,
    color: '#000',
  },
  input: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#fff'
  },
});

export default Formulario;
