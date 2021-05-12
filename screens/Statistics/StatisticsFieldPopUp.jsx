import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const StatisticsFieldPopUp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.titleText}>Приход позже</Text>
          <Text style={styles.valueText}>08:05</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.titleText}>Уход раньше</Text>
          <Text style={styles.valueText}>17:55</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.titleText}>На территории</Text>
          <Text style={styles.valueText}>08:50</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.titleText}>Вне территории</Text>
          <Text style={styles.valueText}>13:03 - 13:48</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingVertical: 9,
    paddingHorizontal: 16,
    borderTopWidth: 0.5,
    borderTopColor: '#DFE1E5',
    borderBottomWidth: 0.5,
    borderBottomColor: '#DFE1E5',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  column: {
    width: '50%',
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

export default StatisticsFieldPopUp;
