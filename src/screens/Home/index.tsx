import React from "react";
import {View, FlatList, ScrollView} from "react-native";

import { Modal } from "../../components/Modal";
import { Header } from "../../components/Header";
import { Banners } from "../../components/Banners";

import {styles} from "./styles";
import { Barber } from "../Barber";

export function Home() {
    return (
        <View style={styles.container}>
            <Header 
                title={"Home"}
            />
            <Banners 
            />
            <ScrollView >
                <Modal 
                    imageUri="https://github.com/JeanCarl00s.png"
                    barberName="Jean Barber"
                    location="Louveira-SP"
                    aberto={18}
                    id={1}
                />
                <Modal 
                    imageUri="https://github.com/henriquecontini.png"
                    barberName="Henrique Barber"
                    location="Jundiai-SP"
                    aberto={20}
                    id={2}
                />
                <Modal 
                    imageUri="https://github.com/henriquecontini.png"
                    barberName="JV Barber"
                    location="Sao Paulo-SP"
                    aberto={18}
                    id={3}
                />
                <Modal 
                    imageUri="https://github.com/henriquecontini.png"
                    barberName="V Barber"
                    location="Louveira-SP"
                    aberto={18}
                    id={3}
                />
                <Modal 
                    imageUri="https://github.com/henriquecontini.png"
                    barberName="V Barber"
                    location="Louveira-SP"
                    aberto={18}
                    id={3}
                />
                <Modal 
                    imageUri="https://github.com/henriquecontini.png"
                    barberName="V Barber"
                    location="Louveira-SP"
                    aberto={18}
                    id={3}
                />
                <Modal 
                    imageUri="https://github.com/henriquecontini.png"
                    barberName="V Barber"
                    location="Louveira-SP"
                    aberto={18}
                    id={3}
                />
                <Modal 
                    imageUri="https://github.com/henriquecontini.png"
                    barberName="V Barber"
                    location="Louveira-SP"
                    aberto={18}
                    id={3}
                />
                <Modal 
                    imageUri="https://github.com/henriquecontini.png"
                    barberName="V Barber"
                    location="Louveira-SP"
                    aberto={18}
                    id={3}
                />
                
            </ScrollView>
        </View>
    )
}
