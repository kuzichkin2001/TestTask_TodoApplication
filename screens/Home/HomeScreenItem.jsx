import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const HomeScreenItem = ({ text, id, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            key={id}
            onPress={() => {
                onPress({id, text});
            }}
        >
            <Text style={styles.itemText}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#142654',
        marginHorizontal: 15,
        marginVertical: 5,
        paddingHorizontal: 25,
        borderRadius: 5,
    },
    itemText: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'din-pro',
    }
});

export default HomeScreenItem;
