import React from 'react'
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import giveClassesBgImage from '../../assets/images/give-classes-background.png'

import styles from './styles';
    
function GiveClasses() {
    const { goBack } = useNavigation();

    function handleNavegateBack() {
        goBack();
    }

    return (
        <View style={styles.container}>
            <ImageBackground 
                resizeMode='contain' 
                source={giveClassesBgImage} 
                style={styles.content}
            >
                <Text style={styles.title}>Quer ter um Proffy?</Text>
                <Text style={styles.description}>
                    Para começar, voce precisa se cadastrar como professor na nossa plataforma web
                </Text>
            </ImageBackground>

            <RectButton onPress={handleNavegateBack} style={styles.okButton}>
                <Text style={styles.okButtonText}>Tudo Bem</Text>
            </RectButton>
        </View>
    );
}

export default GiveClasses;