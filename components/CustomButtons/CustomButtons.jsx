import React, { useState } from 'react';
import { StyleSheet, View, TouchableHighlight, Text } from 'react-native';

const CustomButtons = ({ navigation, creating, onSubmit }) => {
  const [isCreating, setIsCreating] = useState(creating);

  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => {
          navigation.goBack();
        }}
        style={[styles.button, { backgroundColor: '#142654' }]}
      >
        <Text style={styles.buttonText}>ОТМЕНИТЬ</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={onSubmit}
        style={[styles.button, { backgroundColor: isCreating ? '#85C105' : '#0095C5'}]}
      >
        <Text style={styles.buttonText}>{isCreating ? 'СОГЛАСОВАТЬ' : 'ОТЛОЖИТЬ ВЫПОЛНЕНИЕ'}</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    height: 70,
    width: '100%',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    paddingHorizontal: 16,
  },
  buttonText: {
    fontFamily: 'din-pro',
    fontSize: 14,
    textAlign: 'center',
    color: '#FFF',
  }
});

export default CustomButtons;
