import React from "react";
import { Text,View, Image } from "react-native";

import {styles} from "./styles";

type Props = {
    imageUri: string;
    name: string;
}

export function User({imageUri, name}: Props) {

    return (
        <View style={styles.container}>
            <Image 
                source={{ uri:imageUri}}
                style={styles.pic}
            />
            
            <Text style={styles.name}>
                {name}
            </Text>
            
        </View>
    )
}




