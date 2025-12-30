import React, { useEffect } from 'react'
import "./global.css"
import { Slot, SplashScreen } from 'expo-router'
import { useFonts } from 'expo-font'

SplashScreen.preventAutoHideAsync() // evitar que el splashScreen se quite hasta que las fuentes estén cargadas
// SplashScreen.preventAutoHideAsync(): evita que la pantalla de carga
// se oculte automáticamente al iniciar la app.

const RootLayout = () => {

    const [fontsLoaded, error] = useFonts({
        'WorkSans-Black': require('../assets/fonts/WorkSans-Black.ttf'),
        'WorkSans-Italic': require('../assets/fonts/WorkSans-Italic.ttf'),
        'WorkSans-Medium': require('../assets/fonts/WorkSans-Medium.ttf'),
    })

    useEffect(() => {

        if (error) throw error

        if (fontsLoaded) SplashScreen.hideAsync()
        // SplashScreen.hideAsync(): oculta manualmente la pantalla de carga
        // cuando la app ya terminó de cargar recursos.
    }, [fontsLoaded, error])

    if (!fontsLoaded && !error) return null

    return (
        <Slot />
    )
}

export default RootLayout