import React from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";


import {styles} from "./styles";

type Props = {
    id: number,
    imageUri: string,
    barberName: string,
    location: string,
    aberto: number,
}


export function Modal({imageUri, barberName, location, aberto,id}: Props) {

    return (
        <TouchableOpacity 
        style={styles.container}
        >
            
            <View style={styles.wrapper}>
                <View style={styles.pic}>
                    <Image 
                        source={{ uri:imageUri}}
                        style={styles.image}
                    />
                </View>
                <View style={styles.content}>
                    <Text style={styles.name}>
                        {barberName}
                    </Text>
                    <Text style={styles.local}>
                        {location} - ate as {aberto} horas
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
