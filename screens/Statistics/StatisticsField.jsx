import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import StatisticsFieldPopUp from "./StatisticsFieldPopUp";
import { AntDesign } from "@expo/vector-icons";

const StatisticsField = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  return (
    <TouchableOpacity onPress={() => {
      setIsPopupVisible(prev => !prev);
    }} style={styles.container}>
      <View style={styles.valueContainer}>
        <View style={styles.item}>
          <Text style={styles.titleText}>Дата</Text>
          <Text style={styles.valueText}>21.08.19</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.titleText}>Вход</Text>
          <Text style={styles.valueText}>07:52</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.titleText}>Выход</Text>
          <Text style={styles.valueText}>07:52</Text>
        </View>
        {!isPopupVisible ? (
          <AntDesign name="down" size={24} color="#00205B" style={{paddingLeft: 25}}/>
        ) : (
          <AntDesign name="up" size={24} color="#00205B" style={{paddingLeft: 25}}/>
        )}
      </View>
      {isPopupVisible && (
        <StatisticsFieldPopUp />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    backgroundColor: '#FAFBFC',
  },
  valueContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  item: {
    paddingRight: 45,
  },
  titleText: {
    fontSize: 15,
    fontFamily: 'din-pro',
    color: '#868E96',
  },
  valueText: {
    fontSize: 15,
    fontFamily: 'din-pro',
    color: '#00205B',
  }
});

export default StatisticsField;
