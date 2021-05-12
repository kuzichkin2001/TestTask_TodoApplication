import React, { useState } from 'react';
import { StyleSheet, Text, Pressable, View } from 'react-native';

const Tabs = ({ firstTabTitle, secondTabTitle, onTabPress }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <View style={styles.container}>
      <Pressable
        style={[{
          ...styles.tab,
          borderBottomLeftRadius: 5,
          borderTopLeftRadius: 5,
        }, (activeTab === 0 ? styles.active : null)]}
        onPress={() => {
          setActiveTab(0);
          onTabPress(true);
        }}
      >
        <Text style={[styles.tabText, (activeTab === 0 ? styles.activeText : null)]}>
          {firstTabTitle}
        </Text>
      </Pressable>
      <Pressable
        style={[{
          ...styles.tab,
          borderBottomRightRadius: 5,
          borderTopRightRadius: 5,
        }, (activeTab === 1 ? styles.active : null)]}
        onPress={() => {
          setActiveTab(1);
          onTabPress(false);
        }}
      >
        <Text style={[styles.tabText, (activeTab === 1 ? styles.activeText : null)]}>
          {secondTabTitle}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderColor: '#fff',
    borderWidth: 1,
  },
  tabText: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'din-pro',
  },
  active: {
    backgroundColor: '#fff',
  },
  activeText: {
    color: '#142654',
    fontSize: 15,
  },
});

export default Tabs;
