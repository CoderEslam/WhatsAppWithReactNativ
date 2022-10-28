import {ImageBackground, Text, View, StyleSheet, FlatList, KeyboardAvoidingView, Platform} from "react-native";
import bg from '../../../assets/image/BG.png'
import Message from "../Message";
import messages from '../../../assets/data/messages.json'
import InputBox from "../InputBox";
import {useNavigation, useRoute} from "@react-navigation/native";
import {useEffect} from "react";

export default function ChatScreen({}) {
    const route = useRoute(); /* to get route information*/
    const navigation = useNavigation(); /* to get names of navigation*/
    useEffect(() => {
        navigation.setOptions({title: route.params.name})
    }, [route.params.name] /*change route when name changed*/)
    console.log(route);
    return (
        /* KeyboardAvoidingView to close keyboard when click InputText */
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
                              keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 90 || Platform.OS === 'android' ? 140 : 150}
                              style={styles.bg}>
            <ImageBackground source={bg} style={styles.bg}>
                <FlatList data={messages} renderItem={({item}) => <Message message={item}/>} style={styles.list}
                          inverted  /* to begin from bottom*//>
                <InputBox/>
            </ImageBackground>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
    }, list: {
        padding: 10,
    }
})