import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Header } from "../../components/Header";
import { User } from "../../components/User";
import { Modal } from "../../components/Modal";

import { styles } from './styles';

export function Barber() {

    const onPress = () => {
        <source 
            src='/Profile'
        />
    }

    return(
        <View style={styles.container}>
            <Header 
                title='Perfil'
            />
            <User 
                imageUri="https://github.com/JeanCarl00s.png"
                name="Jean"
            />
            <Text style={styles.Text}>
                Horarios Disponiveis
            </Text>
            <ScrollView>
                <Modal 
                    imageUri="https://github.com/JeanCarl00s.png"
                    barberName="JV Barber"
                    location="Louveira-SP"
                    aberto={18}
                    id={1}
                />
                <Modal 
                    imageUri="https://github.com/JeanCarl00s.png"
                    barberName="JV Barber"
                    location="Louveira-SP"
                    aberto={18}
                    id={1}
                />
                <Modal 
                    imageUri="https://github.com/JeanCarl00s.png"
                    barberName="JV Barber"
                    location="Louveira-SP"
                    aberto={18}
                    id={1}
                />
                <Modal 
                    imageUri="https://github.com/JeanCarl00s.png"
                    barberName="JV Barber"
                    location="Louveira-SP"
                    aberto={18}
                    id={1}
                />
                <Modal 
                    imageUri="https://github.com/JeanCarl00s.png"
                    barberName="JV Barber"
                    location="Louveira-SP"
                    aberto={18}
                    id={1}
                />
            </ScrollView>
        </View>
    )
}
