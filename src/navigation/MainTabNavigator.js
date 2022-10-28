import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import NotImplementedScreen from "../components/screens/NotImplementedScreen";
import ChatsScreen from "../components/screens/ChatsScreen";
import {Entypo, Ionicons} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
    const NewMassage = () => {
        console.warn('new massage')
    }
    return (<Tab.Navigator initialRoutName={'Chats'} screenOptions={{
        tabBarStyle: {backgroundColor: '#b0e188' /* color of bottom navigation bar*/},
        headerStyle: {backgroundColor: '#9ad76d' /* color of top TabBar */},
    }}>
        <Tab.Screen name="Status" component={NotImplementedScreen} options={{
            tabBarIcon: ({color, size}) => (<Ionicons name="logo-whatsapp" size={size} color={color}/>)
        }}/>
        <Tab.Screen name="Calls" component={NotImplementedScreen} options={{
            tabBarIcon: ({color, size}) => (<Ionicons name="call-outline" size={size} color={color}/>)
        }}/>
        <Tab.Screen name="Camera" component={NotImplementedScreen} options={{
            tabBarIcon: ({color, size}) => (<Ionicons name="camera-outline" size={size} color={color}/>)
        }}/>
        <Tab.Screen name="Chats" component={ChatsScreen} options={({navigation}) => ({
            tabBarIcon: ({color, size}) => (<Ionicons name="ios-chatbubbles-sharp" size={size} color={color}/>),
            headerLeft: () => (
                <Entypo name={'new-message'} size={18} color={'royalblue'} style={{marginLeft: 15}}
                        onPress={NewMassage}/>
            ),
            headerRight: () => (
                <Entypo name={'new-message'} size={18} color={'royalblue'} style={{marginRight: 15}}
                        onPress={() => navigation.navigate('Contact')}/>
            )
        })}/>
        <Tab.Screen name="Settings" component={NotImplementedScreen} options={{
            tabBarIcon: ({color, size}) => (<Ionicons name="settings-outline" size={size} color={color}/>)
        }}/>
    </Tab.Navigator>);
}

