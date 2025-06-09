// screens/PanelProductor.jsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function PanelProductorScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Panel del Productor</Text>
      <Button title="Agregar Producto" onPress={() => navigation.navigate('AgregarProducto')} />
      <Button title="Ver Tienda" onPress={() => navigation.navigate('Tienda')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
});
