import React from 'react';
import { View, Text, Button } from 'react-native';
import { logout } from '../utils/auth';

export default function ServiciosScreen({ navigation }) {
  const handleLogout = async () => {
    await logout();
    navigation.replace('Home');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Servicios de Biota Orgánicos</Text>
      <Button title="Cerrar sesión" onPress={handleLogout} />
    </View>
  );
}
