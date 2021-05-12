import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import Header from "../../components/Header/Header";
import { AntDesign } from '@expo/vector-icons';
import StatisticsField from "./StatisticsField";

const Statistics = ({ navigation }) => {
  return (
    <ScrollView>
      <Header
        title="Статистика посещаемости"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <StatisticsField />
      <StatisticsField />
      <StatisticsField />
      <StatisticsField />
    </ScrollView>
  );
}

export default Statistics;
