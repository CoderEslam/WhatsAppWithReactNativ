import {ImageBackground, Text, View, StyleSheet, FlatList, KeyboardAvoidingView, Platform} from "react-native";
import bg from '../../../assets/image/BG.png'
import Message from "../Message";
import messages from '../../../assets/data/messages.json'
import InputBox from "../InputBox";

export default function ChatScreen() {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.bg}>
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