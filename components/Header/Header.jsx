import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native';
import Tabs from './Tabs';
import { Ionicons } from '@expo/vector-icons';

const Header = ({ onPress, title, expandable, withTabs, onTabPress }) => {
  const [currentTitle, setCurrentTitle] = useState(title);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Pressable style={styles.container} onPress={() => {
      setIsExpanded(prev => !prev);
    }}>
      {currentTitle !== 'Домашний экран' && (
        <TouchableOpacity style={styles.backArrow}>
          <Ionicons
            name="chevron-back-sharp"
            size={32}
            color="white"
            onPress={onPress}
          />
        </TouchableOpacity>
      )}
      <Text style={styles.header} numberOfLines={!isExpanded ? 1 : 0}>{title}</Text>
      {withTabs && (
        <>
          {currentTitle === 'Список задач' ? (
            <Tabs
              firstTabTitle="Назначены мне"
              secondTabTitle="Назначены мной"
              onTabPress={onTabPress}
            />
          ) : (
            <Tabs
              firstTabTitle="Я делегировал"
              secondTabTitle="Мне делегировали"
              onTabPress={onTabPress}
            />
          )}
        </>
      )}
    </Pressable>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 45,
    paddingBottom: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#142654',
    marginBottom: 10,
  },
  header: {
    fontFamily: 'din-pro',
    fontSize: 17,
    color: '#fff',
    marginHorizontal: 50,
  },
  backArrow: {
    position: 'absolute',
    top: 45,
    left: 5,
  },
});

export default Header;