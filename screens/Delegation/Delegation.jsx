import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { formatDate } from '../../constants/contants';
import Header from '../../components/Header/Header';

const Delegation = ({ navigation }) => {
  const [uid, setUid] = useState(1);
  const [isForMe, setIsForMe] = useState(true);
  const { todos } = navigation.state.params;

  const todosForMe = todos.filter(item => item.uid === uid);
  const todosFromMe = todos.filter(item => item.from_uid === uid);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.container}>
      <Text style={styles['dn-16']} numberOfLines={1}>{item.title}</Text>
      <View style={styles.bottomRow}>
        <View style={styles.itemDate}>
          <Image source={require('../../assets/img/general/clock.png')} />
          <Text style={{ ...styles['dn-13'], paddingLeft: 8 }}>
            c {item.fromDate} по {item.toDate}
          </Text>
        </View>
        <Text style={styles['dn-13']}>user_id: {item.from_uid}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <Header
        title="Делегирование"
        withTabs
        onPress={() => {
          navigation.goBack();
        }}
        onTabPress={setIsForMe}
      />
      <FlatList
        data={isForMe ? todosForMe : todosFromMe}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingVertical: 5,
    paddingHorizontal: 16,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  itemDate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  'dn-13': {
    fontFamily: 'din-pro',
    fontSize: 13,
    color: '#868E96',
  },
  'dn-16': {
    fontFamily: 'din-pro',
    fontSize: 16,
    color: '#1B2A4A',
  }
});

export default Delegation;
