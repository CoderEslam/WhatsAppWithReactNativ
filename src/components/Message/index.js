import React, {Component} from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {StyleSheet} from 'react-native';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);


export default function Message({message}) {

    const isMyMessage = () => {
        return message.user.id === 'u1';
    }

    return (
        <View style={[styles.container,
            {
                //https://colorhunt.co/
                backgroundColor: isMyMessage() ? '#a6d187' : '#ffffff',
                alignSelf: isMyMessage() ? 'flex-end' : 'flex-start'
            }
        ]
        }>
            <Text>{message.text}</Text>
            <Text style={styles.time}>{dayjs(message.createdAt).fromNow(true)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'white',
        // alignSelf: 'flex-start',
        padding: 10,
        borderRadius: 10,
        margin: 5,
        maxWidth: '80%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: .22,
        shadowRadius: 2.22,
        elevation:1
    },
    time: {
        color: 'gray',
        alignSelf: 'flex-end'
    }
});
