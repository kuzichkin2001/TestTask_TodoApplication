import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

const CommentItem = ({ authorName, commentText, commentDate }) => {
  return (
    <TouchableOpacity style={styles.comment}>
      <Text style={styles['dn-16']}>{authorName}</Text>
      <Text style={[styles['dn-15'], { paddingTop: 5 }]}>{commentText}</Text>
      <View style={styles.dateItem}>
        <Image source={require('../../assets/img/general/clock.png')} />
        <Text style={[styles['dn-13'], { paddingLeft: 5 }]}>c {commentDate}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  comment: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  dateItem: {
    paddingTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  'dn-13': {
    fontSize: 13,
    fontFamily: 'din-pro',
    color: '#868E96',
  },
  'dn-15': {
    fontSize: 15,
    fontFamily: 'din-pro',
    color: '#7C8598',
  },
  'dn-16': {
    fontSize: 16,
    fontFamily: 'din-pro',
    color: '#1B2A4A',
  }
});

export default CommentItem;
