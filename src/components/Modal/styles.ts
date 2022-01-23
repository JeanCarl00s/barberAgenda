import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        height: 80,
        backgroundColor: "white",
        borderRadius: 10,
        marginHorizontal: 15,
        marginVertical: 15,
        padding: 10,
        display: "flex",
        justifyContent: "center",
        alignItems:"center",

    },
    wrapper: {
        width: "80%",
        height: 50,
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
    },
    content:{
        width: "80%",
        paddingLeft: 20
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 5,
    },
    pic: {
        width: "20%",
    },
    name: {
        fontSize: 20,
        fontWeight: "bold"
    },
    local:{
        fontSize: 15,
        color: "gray"
     }
});