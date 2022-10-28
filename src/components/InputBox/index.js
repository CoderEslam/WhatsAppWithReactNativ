import {Text, TextInput, View} from "react-native";
import {StyleSheet} from 'react-native';
import {AntDesign, MaterialIcons} from '@expo/vector-icons'
import {useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";

export default function InputBox({}) {

    const [newMessage, setNewMessage] = useState('');
    const sendAttachment = () => {
        console.warn('send Attachment')
    }
    const onSend = () => {
        console.warn('sended', newMessage)
        setNewMessage('');
    }

    return (
        <SafeAreaView edges={['bottom']} style={styles.container}>
            {/*Icon*/}
            <AntDesign name={'plus'} size={24} color={'royalblue'} onPress={sendAttachment}/>
            {/*Text Input*/}
            <TextInput placeholder={'type your massage .....'} style={styles.input} value={newMessage}
                       onChangeText={setNewMessage}/>
            {/*Icon*/}
            <MaterialIcons name={'send'} size={24} color={'white'} style={styles.send} onPress={onSend}/>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'whitesmoke',
        padding: 5,
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    input: {
        flex: 1,
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 50,
        paddingHorizontal: 10,
        borderColor: 'lightgray',
        borderWidth: StyleSheet.hairlineWidth,
        marginHorizontal: 10,
    },
    send: {
        backgroundColor: 'royalblue',
        padding: 7,
        borderRadius: 15,
        overflow: 'hidden'
    }
})

