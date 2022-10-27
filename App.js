import {StatusBar} from 'expo-status-bar';
import {FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ChatListItem from "./src/components/ChatListItem";
import chats from './assets/data/chats.json';
/*
* https://notjust.notion.site/WhatsApp-2-0-a26f46f6770b4b9a81cad19f1f119a3c?p=d9c0e080231b44b19ed96d666c6848bd&pm=s
* */

const chat = {
    id: "1",
    user: {
        image: "https://firebasestorage.googleapis.com/v0/b/menuapp-a9ad6.appspot.com/o/Images%2F3jzmbz6GcocRitbDCNvc3EnleBx1.jpg?alt=media&token=45e9d620-8f7a-4266-9cf5-4e8eff173d69",
        name: "Eslam",
    },
    lastMessage: {
        text: "hello eslam",
        createdAt: "07:30",
    },
};

export default function App() {
    var loop = []
    getMoviesFromApi().then(console.log)
    for (var i = 0; i < 20; i++) {
        loop.push(
            <View>
                <TouchableOpacity>
                    <ChatListItem chat={chat}/>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View>
            <FlatList data={chats} renderItem={({item}) => <ChatListItem chat={item}/>}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

function getMoviesFromApi() {
    return fetch('https://reactnative.dev/movies.json')
        .then((response) => response.json())
        .then((json) => {
            console.log(json.movies);
            return json.movies;
        })
        .catch((error) => {
            console.error(error);
        });
};

