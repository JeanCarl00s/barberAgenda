import React from "react";
import {View, Text, Image, ScrollView} from "react-native";
import { URImage} from "../../assets/banner.png";

import {styles} from "./styles";



export function Banners() {

    return (
        <ScrollView 
        horizontal
        style={styles.container}
        >
            <Image
                style={styles.image}
                source={URImage}
            />
           
        </ScrollView>
    )
}
