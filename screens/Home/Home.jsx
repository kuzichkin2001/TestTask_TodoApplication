import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Header from '../../components/Header/Header';
import { allTodos } from '../TodosList/mockTodos';
import HomeScreenItem from './HomeScreenItem';

const Home = ({ navigation }) => {
  const [todos, setTodos] = useState(allTodos);

  const createPressHandler = () => {
    navigation.navigate('Создать задачу', {
      changeTodoList: setTodos,
    });
  };
  const listPressHandler = () => {
    navigation.navigate('Список всех задач', {
      todos,
    });
  };
  const delegationPressHandler = () => {
    navigation.navigate('Делегирование задач', {
      todos,
    });
  };
  const statisticsPressHandler = () => {
    navigation.navigate('Статистика посещаемости');
  };


  return (
    <>
      <Header title="Домашний экран" />
      <HomeScreenItem
        id={1}
        text="Создать задачу"
        onPress={createPressHandler}
      />
      <HomeScreenItem
        id={2}
        text="Список всех задач"
        onPress={listPressHandler}
      />
      <HomeScreenItem
        id={3}
        text="Делегирование задач"
        onPress={delegationPressHandler}
      />
      <HomeScreenItem
        id={4}
        text="Статистика посещаемости"
        onPress={statisticsPressHandler}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  'mg-10': {
    marginBottom: 10,
  },
  separator: {
    height: 0,
    borderWidth: 1,
  },
});

export default Home;