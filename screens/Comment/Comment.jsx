import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Header from '../../components/Header/Header';
import CustomButtons from '../../components/CustomButtons/CustomButtons';

const Comment = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback style={styles.container}>
      <View style={styles.container}>
        <Header
          title="Новый комментарий"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={[styles.label, { paddingLeft: 16 }]}>КОММЕНТАРИЙ</Text>
        <View style={styles.item}>
          <MaterialIcons name="short-text" size={24} color="#7C8598" />
          <View style={styles.content}>
            <Text style={styles.commentLabel}>Комментарий</Text>
            <TextInput
              autoFocus
              placeholder="Введите ваш комментарий..."
              style={styles.commentInput}
            />
          </View>
        </View>
        <CustomButtons
          navigation={navigation}
          creating
          onSubmit={() => {
            navigation.goBack();
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    height: '100%',
  },
  label: {
    fontFamily: 'din-pro',
    fontSize: 13,
    color: '#7C8598',
    paddingVertical: 6,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#FFF',
  },
  content: {
    paddingHorizontal: 16,
  },
  commentLabel: {
    fontSize: 15,
    fontFamily: 'din-pro',
    color: '#7C8598',
  },
  commentInput: {
    fontSize: 16,
    fontFamily: 'din-pro',
  }
});

export default Comment;
