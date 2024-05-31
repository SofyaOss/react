import { Text, StyleSheet, FlatList, View, TouchableOpacity, Modal, Image } from 'react-native';
import React from 'react';

export const Edit = ({ route, navigation }) => {

  return (
    <View style={styles.container}>
      
      <TouchableOpacity style={styles.button_calc} onPress={() => { calc(), navigation.navigate('Main') }}><Text style={styles.btn_text}>Рассчитать</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});