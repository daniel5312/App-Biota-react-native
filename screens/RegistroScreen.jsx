import React, { useState } from 'react';
import {
  View, Text, TextInput, Button, StyleSheet, ScrollView
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';

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
    const usuario = {
      tipoUsuario,
      nombre,
      correo,
      password,
      ...(tipoUsuario === 'Productor' && {
        finca, municipio, vereda, area, productos, etapa,
      }),
    };

    try {
      const usuariosGuardados = await AsyncStorage.getItem('usuarios');
      const usuarios = usuariosGuardados ? JSON.parse(usuariosGuardados) : [];

      const existe = usuarios.find(u => u.correo === correo);
      if (existe) return alert('Este correo ya está registrado');

      usuarios.push(usuario);
      await AsyncStorage.setItem('usuarios', JSON.stringify(usuarios));
      alert('Registro exitoso');

      navigation.navigate('Login');
    } catch (error) {
      console.error('Error registrando:', error);
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
  picker: { borderWidth: 1, marginBottom: 10,
    
   },
});
