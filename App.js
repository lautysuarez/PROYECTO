import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, Button, BackHandler } from 'react-native';
import Registro from "./registro.js"
import Formulario from "./formulario.js"

export default function App(Formulario,Registro) {
  return (
    <View style={styles.caj}>
        <View style={styles.caja}>
        <Text>
          <h1>Log in:</h1>
          </Text>

        <TextInput style={styles.imput}
          placeholder='email@.com:'
        />
        <TextInput style={styles.input}
          placeholder='password:'
        />
        <Pressable
              onPress={BackHandler}
              />
              <Button 
              style={styles.Button}
              title="Enter"
              />
        
      <View style={styles.caja2}>      
        <Text>
          <h1>Formulario:</h1>
        </Text>

        <TextInput style={styles.nom}
          placeholder="nombre completo:"
        />
        <TextInput style={styles.edad}
          placeholder='edad:'
        />
        <TextInput style={styles.gene}
          placeholder="genero:"
        />
        <TextInput style={styles.loc}
          placeholder='localidad:'
        />
        <TextInput style={styles.num}
          placeholder='numero de telefono:'
        />
        <Pressable 
              onPress={BackHandler}
              />
              <Button 
              style={styles.Button}
              title="Enter"
              />
            </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  caj:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',


  },
  caja: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
    
  },
  caja2:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
    marginTop: 60,
  },
  imput: {
    backgroundColor: "white",
    borderRadius: 250,
    padding:5,
    margin: 10,
    color:"gray",
    paddingHorizontal: 25,
   },
  input: {
    backgroundColor: "white",
    padding:5,
    borderRadius: 250,
    color:"gray",
    paddingHorizontal: 25,
  },
  



  gene:{
   backgroundColor: "white",
   borderRadius: 250,
   padding:5,
   margin: 10,
   color:"gray",
   paddingHorizontal: 25,
  },
  nom:{
   backgroundColor: "white",
   borderRadius: 250,
   padding:5,
   margin: 10,
   color:"gray",
   paddingHorizontal: 25,
  },
  loc:{
   backgroundColor: "white",
   borderRadius: 250,
   padding:5,
   margin: 10,
   color:"gray",
   paddingHorizontal: 25,
  },
  edad:{
   backgroundColor: "white",
   borderRadius: 250,
   padding:5,
   margin: 10,
   color:"gray",
   paddingHorizontal: 25,
  },
  num:{
    backgroundColor: "white",
   borderRadius: 250,
   padding:5,
   margin: 10,
   color:"gray",
   paddingHorizontal: 25,
  },
});
