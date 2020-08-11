import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';

//importe das fontes do Google
import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

//importe da rota
import AppStack from './src/routes/AppStack';

export default function App() {
  let [fontsloaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });
  //se carregar as fontes exibe tela
  if(!fontsloaded) {
    return <AppLoading />;
  } else {

  return (
    <>
      <AppStack/>
      <StatusBar style="light" />
    </>
  );

  }
}
