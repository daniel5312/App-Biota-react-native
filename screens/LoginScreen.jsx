import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const usuariosData = await AsyncStorage.getItem('usuarios');
      const usuarios = usuariosData ? JSON.parse(usuariosData) : [];

      const usuario = usuarios.find(u => u.correo === correo && u.password === password);
      if (!usuario) return alert('Correo o contraseña incorrectos');

      if (usuario.tipoUsuario === 'Productor') {
        navigation.navigate('PanelProductor', { usuario });
      } else {
        navigation.navigate('PanelConsumidor', { usuario });
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput placeholder="Correo" style={styles.input} value={correo} onChangeText={setCorreo} />
      <TextInput placeholder="Contraseña" secureTextEntry style={styles.input} value={password} onChangeText={setPassword} />
      <Button title="Ingresar" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, textAlign: 'center', marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginVertical: 5, borderRadius: 5 },
});
