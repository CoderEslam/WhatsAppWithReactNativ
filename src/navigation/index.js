import {Text, View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import ChatScreen from "../components/screens/ChatScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ChatsScreen from "../components/screens/ChatsScreen";
import MainTabNavigator from "./MainTabNavigator";
import ContactScreen from "../components/screens/ContactScreen";

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRoutName={'Chats'} screenOptions={{headerStyle: {backgroundColor: 'whitesmoke'}}}>
                <Stack.Screen name={'Home'} component={MainTabNavigator}
                              options={{headerShown: false /*to hidde name of navigation*/}}/>
                <Stack.Screen name={'Chat'} component={ChatScreen}/>
                <Stack.Screen name={'Contact'} component={ContactScreen}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
}