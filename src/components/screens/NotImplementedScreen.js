import {View, Text, Image, StyleSheet} from "react-native";

export default function NotImplementedScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Not Implemented!</Text>
            <Image
                source={{
                    uri: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
                }}
                style={styles.image}
                resizeMode="contain"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 18,
        fontWeight: "500",
        color: "gray",
    },
    image: {
        width: "80%",
        aspectRatio: 2 / 1,
    },
});

