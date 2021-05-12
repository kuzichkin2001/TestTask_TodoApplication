import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, FlatList, Image } from 'react-native';
import Header from '../../components/Header/Header';

const statusMap = {
  'new': {
    content: 'Новая',
    color: '#27AE60',
  },
  'inProgress': {
    content: 'В работе',
    color: '#428FD7',
  },
  'delayed': {
    content: 'Отложено',
    color: '#CB8600',
  },
};

const TodosList = ({ navigation }) => {
  const [uid, setUid] = useState(1);
  const [isForMe, setIsForMe] = useState(true);
  const { todos } = navigation.state.params;

  const todosForMe = todos.filter(item => item.uid === uid);
  const todosFromMe = todos.filter(item => item.from_uid === uid);

  const showTodo = (item) => {
    navigation.navigate('Задача', {
      todo: item,
    })
  }

  const renderItem = ({item}) => {
    const pathToImage = item.status === 'new'
      ? require('../../assets/img/statuses/new.png')
      : (item.status === 'inProgress'
        ? require('../../assets/img/statuses/inProgress.png')
        : require('../../assets/img/statuses/delayed.png'));
    return (
      <>
        <TouchableOpacity style={styles.container} onPress={() => {
          showTodo(item);
        }}>
          <Text style={[styles.taskTitle, styles['dn-16']]} numberOfLines={1}>{item.title}</Text>
          <View style={styles.bottomRow}>
            <View style={styles.todoInfo}>
              <Image
                style={{marginRight: 5}}
                source={require('../../assets/img/general/clock.png')}
              />
              <Text
                style={[styles['dn-13'], {color: '#868E96', marginRight: 5}]}
              >
                {item.assignDate}
              </Text>
              <Image
                style={{marginRight: 5}}
                source={pathToImage}
              />
              <Text
                style={[styles['dn-13'], {color: statusMap[item.status].color, marginRight: 5}]}
              >
                {statusMap[item.status].content}
              </Text>
            </View>
            <View>
              <Text>user_id: {item.from_uid}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.separator} />
      </>
    )
  };

  return (
    <>
      <Header
        title="Список задач"
        withTabs
        onPress={() => {
          navigation.goBack();
        }}
        onTabPress={setIsForMe}
      />
      <FlatList
        data={isForMe ? todosForMe : todosFromMe}
        renderItem={renderItem}
        keyExtractor={todo => todo.id}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'stretch',
    height: 40,
    paddingHorizontal: 5,
    marginTop: 10,
    marginBottom: 6,
  },
  taskTitle: {
    paddingHorizontal: 14,
    color: '#1B2A4A',
  },
  separator: {
    height: 0,
    borderWidth: 0.25,
    borderColor: '#ccc',
    alignSelf: 'stretch',
    marginTop: 6,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    marginTop: 7,
    paddingHorizontal: 14,
  },
  todoInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  'dn-13': {
    fontFamily: 'din-pro',
    fontSize: 13,
  },
  'dn-16': {
    fontFamily: 'din-pro',
    fontSize: 16,
  },
});

export default TodosList;
