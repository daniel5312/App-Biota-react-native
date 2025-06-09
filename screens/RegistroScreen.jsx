import React, { useState } from 'react';
import {
  View, Text, TextInput, Button, StyleSheet, ScrollView
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebaseConfig'; // 🔥 Asegúrate del path correcto

export default function RegistroScreen({ navigation }) {
  const [tipoUsuario, setTipoUsuario] = useState('Consumidor');
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [finca, setFinca] = useState('');
  const [municipio, setMunicipio] = useState('');
  const [vereda, setVereda] = useState('');
  const [area, setArea] = useState('');
  const [productos, setProductos] = useState('');
  const [etapa, setEtapa] = useState('');

  const handleRegistro = async () => {
    if (!correo || !password || !nombre) {
      alert("Por favor completa todos los campos obligatorios.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, correo, password);
      const uid = userCredential.user.uid;

      const datosUsuario = {
        uid,
        tipoUsuario,
        nombre,
        correo,
        ...(tipoUsuario === 'Productor' && {
          finca,
          municipio,
          vereda,
          area,
          productos,
          etapa,
        })
      };

      // Guardar en Firestore
      await setDoc(doc(db, 'usuarios', uid), datosUsuario);

      alert("Registro exitoso");
      navigation.navigate('Login');

    } catch (error) {
      console.error("Error al registrar:", error);
      alert(error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Registro Biota Orgánicos</Text>

      <Text>Tipo de Usuario:</Text>
      <Picker selectedValue={tipoUsuario} onValueChange={setTipoUsuario} style={styles.picker}>
        <Picker.Item label="Consumidor" value="Consumidor" />
        <Picker.Item label="Productor" value="Productor" />
      </Picker>

      <TextInput placeholder="Nombre completo" style={styles.input} value={nombre} onChangeText={setNombre} />
      <TextInput placeholder="Correo electrónico" style={styles.input} value={correo} onChangeText={setCorreo} />
      <TextInput placeholder="Contraseña" secureTextEntry style={styles.input} value={password} onChangeText={setPassword} />

      {tipoUsuario === 'Productor' && (
        <>
          <TextInput placeholder="Finca" style={styles.input} value={finca} onChangeText={setFinca} />
          <TextInput placeholder="Municipio" style={styles.input} value={municipio} onChangeText={setMunicipio} />
          <TextInput placeholder="Vereda" style={styles.input} value={vereda} onChangeText={setVereda} />
          <TextInput placeholder="Área de la finca" style={styles.input} value={area} onChangeText={setArea} />
          <TextInput placeholder="Tipo de productos" style={styles.input} value={productos} onChangeText={setProductos} />
          <TextInput placeholder="Etapa agroecológica" style={styles.input} value={etapa} onChangeText={setEtapa} />
        </>
      )}

      <Button title="Registrarse" onPress={handleRegistro} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, textAlign: 'center', marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginVertical: 5, borderRadius: 5 },
  picker: { borderWidth: 1, marginBottom: 10 },
});
