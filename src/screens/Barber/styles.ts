import { StyleSheet } from "react-native"
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#132742", 
        paddingTop: getStatusBarHeight() + 17
    },
    button: {
        width: 100,
        height: 25,
        borderRadius: 8,
        backgroundColor: "#fff",
        margin: 10,

        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    Text: {
        fontFamily: 'Roboto',
        fontSize: 15,
        fontWeight: "bold",
        color: "white",
        paddingLeft: 20
    }
});
