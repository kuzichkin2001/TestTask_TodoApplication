import React, { useState, useRef, useMemo } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard, TouchableOpacity,
  Image,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import Header from '../../components/Header/Header';
import CustomButtons from '../../components/CustomButtons/CustomButtons';
import { formatDate } from '../../constants/contants';

const CreateTodo = ({ navigation }) => {
  const titleInputRef = useRef(null);
  const descriptionInputRef = useRef(null);
  const endDate = useRef(new Date());

  const [startDate, setStartDate] = useState(new Date());
  const [isStartPicking, setIsStartPicking] = useState(true);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [dateInfo, setDateInfo] = useState('');

  const onChange = (event, selectedDate) => {
    if (!selectedDate) {
      setIsDatePickerVisible(false);
    } else if (isStartPicking) {
      setDateInfo('');
      setStartDate(selectedDate);
      setIsDatePickerVisible(false);
      setIsStartPicking(false);
      setTimeout(() => {
        setIsDatePickerVisible(true);
      }, 500);
    } else {
      setDateInfo(`c ${formatDate(startDate)} по ${formatDate(selectedDate)}`);
      endDate.current = selectedDate;
      setIsStartPicking(true);
      setIsDatePickerVisible(false);
    }
  };


  return (
    <TouchableWithoutFeedback onPress={(event) => {
      if (event.currentTarget === event.target) {
        Keyboard.dismiss();
      }
    }}>
      <View style={{ flex: 1, backgroundColor: '#FAFBFC' }}>
        <Header
          title="Создание задачи"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={[styles['din-pro-13'], { paddingVertical: 5 }]}>ИНФОРМАЦИЯ</Text>
        <View>
          <Pressable onPress={() => {
            titleInputRef.current.focus();
          }} style={styles.container}>
            <MaterialIcons name="short-text" size={24} color="#7C8598" style={{ paddingLeft: 16 }} />
            <View>
              <Text style={[styles['din-pro-16'], styles.label]}>Введите название</Text>
              <TextInput
                multiline
                ref={titleInputRef}
                placeholder="Название задачи..."
                returnKeyType="go"
                blurOnSubmit={false}
                onSubmitEditing={() => {
                  descriptionInputRef.current.focus();
                }}
                style={styles['din-pro-16']}
              />
            </View>
          </Pressable>
          <Pressable onPress={() => {
            descriptionInputRef.current.focus();
          }} style={styles.container}>
            <MaterialIcons name="short-text" size={24} color="#7C8598" style={{ paddingLeft: 16 }} />
            <View>
              <Text style={[styles['din-pro-16'], styles.label]}>Введите описание</Text>
              <TextInput
                ref={descriptionInputRef}
                multiline
                placeholder="Описание задачи..."
                onSubmitEditing={() => {
                  setIsDatePickerVisible(true);
                  Keyboard.dismiss();
                }}
                style={styles['din-pro-16']}
                returnKeyType="go"
              />
            </View>
          </Pressable>
          <Pressable onPress={() => {
            setIsDatePickerVisible(true);
          }} style={[styles.container, styles.dateInput]}>
            <MaterialIcons name="date-range" size={24} color="#7C8598" style={{ paddingLeft: 16 }} />
            <View>
              <Text style={[styles['din-pro-16'], styles.label]}>Срок задачи</Text>
              {useMemo(() => {
                return (
                  isDatePickerVisible &&
                  <DateTimePicker
                    mode="date"
                    value={isStartPicking ? startDate : endDate.current}
                    display="calendar"
                    onChange={onChange}
                    style={{ backgroundColor: '#142654' }}
                  />
                );
              }, [isStartPicking, isDatePickerVisible])}
              <TextInput
                editable={false}
                value={dateInfo}
                style={styles['din-pro-16']}
                placeholder="Промежуток времени..."
              />
            </View>
          </Pressable>
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
  }
});

export default CreateTodo;
