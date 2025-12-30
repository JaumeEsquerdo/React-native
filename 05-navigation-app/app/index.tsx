import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
// SafeAreaView: contenedor que asegura que el contenido no se superponga
// con áreas no seguras del dispositivo (notch, barra de estado, bordes).

import { Redirect } from 'expo-router'

const App = () => {



    return <Redirect href='/(stack)/home' />


}

export default App