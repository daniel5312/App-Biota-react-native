import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
  TextInput,
  StyleSheet
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen({ navigation }) {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [mostrarLogin, setMostrarLogin] = useState(false);

  const handleLogin = async () => {
    try {
      const usuariosGuardados = await AsyncStorage.getItem('usuarios');
      const usuarios = usuariosGuardados ? JSON.parse(usuariosGuardados) : [];

      const usuario = usuarios.find(
        u => u.correo === correo && u.password === password
      );

      if (!usuario) {
        alert('Credenciales incorrectas');
        return;
      }

      if (usuario.tipoUsuario === 'Productor') {
        navigation.replace('PanelProductor');
      } else {
        navigation.replace('PanelConsumidor');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../assets/Vegan-Food--1448x2048.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>¡Bienvenido a Biota Orgánicos!</Text>
      <Text style={styles.subtitle}>
        Agricultura regenerativa, orgánica y sostenible.
      </Text>
      <Text style={styles.description}>
        Conectamos a los consumidores directamente con los productores, promoviendo alimentos orgánicos accesibles y confiables.
      </Text>

      {!mostrarLogin ? (
        <>
          <Button title="Ingresar" onPress={() => setMostrarLogin(true)} />
          <View style={{ marginTop: 10 }}>
            <Button title="Registrarme" onPress={() => navigation.navigate('Registro')} />
          </View>
        </>
      ) : (
        <View style={styles.loginContainer}>
          <Text style={styles.subtitle}>Inicia sesión</Text>
          <TextInput
            placeholder="Correo electrónico"
            style={styles.input}
            value={correo}
            onChangeText={setCorreo}
          />
          <TextInput
            placeholder="Contraseña"
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
          <Button title="Entrar" onPress={handleLogin} />
          <View style={{ marginTop: 10 }}>
            <Button title="Cancelar" color="gray" onPress={() => setMostrarLogin(false)} />
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  logo: { width: 120, height: 120, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 18, marginBottom: 10 },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20
  },
  loginContainer: {
    marginTop: 20,
    width: '100%',
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#f0f0f0'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '100%',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5
  }
});
