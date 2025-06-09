import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function PanelConsumidorScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido Consumidor</Text>
      <Button
        title="Ver Tienda"
        onPress={() => navigation.navigate('Tienda')}
        color="#2196F3"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});
