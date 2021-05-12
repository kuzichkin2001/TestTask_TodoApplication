import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  Image,
  ScrollView,
} from 'react-native';
import Header from "../../components/Header/Header";
import { MaterialIcons } from "@expo/vector-icons";
import CustomButtons from "../../components/CustomButtons/CustomButtons";
import CommentItem from "../../components/Comment/CommentItem";

const CurrentTodo = ({ navigation }) => {
  const { todo } = navigation.state.params;

  return (
    <TouchableWithoutFeedback onPress={(event) => {
      if (event.currentTarget === event.target) {
        Keyboard.dismiss();
      }
    }}>
      <ScrollView style={{ flex: 1, backgroundColor: '#FAFBFC' }}>
        <Header
          expandable
          title={todo.title}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <View style={{ height: '100%', marginBottom: 70 }}>
          <Text style={[styles['din-pro-13'], { paddingVertical: 5 }]}>ИНФОРМАЦИЯ</Text>
          <View>
            <View style={styles.container}>
              <MaterialIcons name="short-text" size={24} color="#7C8598" style={{ paddingLeft: 16 }} />
              <View style={styles['pd-16']}>
                <Text style={[styles['din-pro-16'], styles.label, styles['pd-16']]}>Введите название</Text>
                <Text
                  style={styles['din-pro-16']}
                >
                  {todo.title}
                </Text>
              </View>
            </View>
            <View style={[styles.container, styles['pd-16']]}>
              <MaterialIcons name="short-text" size={24} color="#7C8598" style={{ paddingLeft: 16 }} />
              <View>
                <Text style={[styles['din-pro-16'], styles.label]}>Введите описание</Text>
                <Text
                  style={[styles['din-pro-16'], styles['pd-16']]}
                >
                  {todo.description}
                </Text>
              </View>
            </View>
            <View style={[styles.container, styles.dateInput]}>
              <MaterialIcons name="date-range" size={24} color="#7C8598" style={{ paddingLeft: 16 }} />
              <View>
                <Text style={[styles['din-pro-16'], styles.label]}>Срок задачи</Text>
                <Text
                  style={styles['din-pro-16']}
                >
                  c {todo.fromDate} по {todo.toDate}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.executors}>
            <Text style={[styles["din-pro-13"], { paddingVertical: 5 }]}>СОИСПОЛНИТЕЛИ</Text>
            <TouchableOpacity style={styles.colleaguesItem}>
              <MaterialIcons name="add" size={24} color="#7C8598" style={{ paddingLeft: 16 }} />
              <Text style={[styles['din-pro-16'], { paddingLeft: 12 }]}>Добавить исполнителя</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.colleaguesItem, { justifyContent: 'space-between' }]}>
              <View style={[styles.executor, { paddingLeft: 21 }]}>
                <Image source={require('../../assets/img/statuses/new.png')}/>
                <Text style={styles['din-pro-16']}>Цыпа Петр Семенович</Text>
              </View>
              <MaterialIcons name="clear" size={24} color="red" style={{ paddingRight: 16 }} />
            </TouchableOpacity>
          </View>
          <View style={styles.files}>
            <Text style={[styles["din-pro-13"], { paddingVertical: 5 }]}>ФАЙЛЫ</Text>
            <TouchableOpacity style={styles.colleaguesItem}>
              <MaterialIcons name="add" size={24} color="#7C8598" style={{ paddingLeft: 16 }} />
              <Text style={[styles['din-pro-16']]}>Добавить файл</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.colleaguesItem, { justifyContent: 'space-between' }]}>
              <View style={[styles.executor, { paddingLeft: 16 }]}>
                <MaterialIcons name="attach-file" size={24} color="#7C8598" />
                <Text style={styles['din-pro-16']}>Документ №1</Text>
              </View>
              <MaterialIcons name="clear" size={24} color="red" style={{ paddingRight: 16 }} />
            </TouchableOpacity>
          </View>
          <View style={styles.comments}>
            <Text style={styles.label}>КОММЕНТАРИЙ К ЗАДАЧЕ</Text>
            <CommentItem
              authorName="Цыпа Петр Семенович"
              commentText="Новый комментарий"
              commentDate="21/06/2019 22:00"
            />
            <CommentItem
              authorName="Цыпа Петр Семенович"
              commentText="Новый комментарий"
              commentDate="21/06/2019 22:00"
            />
            <TouchableOpacity onPress={() => {
              navigation.navigate('Комментарий');
            }} style={styles.addComment}>
              <MaterialIcons name="add" size={24} color="#7C8598" />
              <Text style={{ paddingLeft: 16, ...styles['din-pro-16'], }}>Добавить комментарий</Text>
            </TouchableOpacity>
          </View>
        </View>
        <CustomButtons
          navigation={navigation}
          creating={false}
          onSubmit={() => {
            navigation.navigate('Отклонение');
          }}
        />
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderWidth: 0.5,
    borderBottomWidth: 0,
    borderColor: '#DFE1E5',
    backgroundColor: '#FFF',
    paddingVertical: 5,
    paddingRight: 16,
  },
  dateInput: {
    backgroundColor: '#DFE1E5',
  },
  'din-pro-16': {
    fontFamily: 'din-pro',
    fontSize: 16,
    paddingLeft: 15,
    color: '#1B2A4A',
  },
  'din-pro-13': {
    fontFamily: 'din-pro',
    fontSize: 13,
    color: '#7C8598',
    paddingLeft: 16,
  },
  label: {
    color: '#7C8598',
    paddingLeft: 15,
  },
  executors: {
    paddingTop: 23,
  },
  executor: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colleaguesItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderWidth: 0.5,
    borderColor: '#DFE1E5',
    backgroundColor: '#FFF',
  },
  files: {
    paddingTop: 23,
  },
  comments: {
    paddingTop: 23,
    paddingBottom: 10,
  },
  addComment: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DFE1E5',
    height: 40,
    marginBottom: 10,
  },
  'pd-16': {
    paddingRight: 32,
  }
});

export default CurrentTodo;
