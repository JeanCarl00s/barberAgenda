import React from "react";
import {View, Text} from "react-native";
import { User } from "../User";


import {styles} from "./styles";


type Props = {
    title: string;
}

export function Header( {title} : Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}
