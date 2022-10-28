import {FlatList, Text, View} from "react-native";
import chats from '../../../assets/data/chats.json'
import ChatListItem from "../ChatListItem";

export default function ChatsScreen() {
    return (
        <FlatList
            data={chats}
            renderItem={({item}) => <ChatListItem chat={item}/>}
            style={{backgroundColor: 'white'}}
        />
    );
}
