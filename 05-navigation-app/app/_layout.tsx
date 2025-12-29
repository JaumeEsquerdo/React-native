import React, { useEffect } from 'react'
import "./global.css"
import { Slot, SplashScreen } from 'expo-router'
import { useFonts } from 'expo-font'

SplashScreen.preventAutoHideAsync() // evitar que el splashScreen se quite hasta que las fuentes estén cargadas
// SplashScreen.preventAutoHideAsync(): evita que la pantalla de carga
// se oculte automáticamente al iniciar la app.

const RootLayout = () => {

    const [fonstLoaded, error] = useFonts({
        'WorkSans-Black': require('../assets/fonts/WorkSans-Blackt.ttf'),
        'WorkSans-Light': require('../assets/fonts/WorkSans-Light.ttf'),
        'WorkSans-Medium': require('../assets/fonts/WorkSans-Medium.ttf')
    })

    useEffect(() => {

        if (error) throw error

        if (fonstLoaded) SplashScreen.hideAsync()
        // SplashScreen.hideAsync(): oculta manualmente la pantalla de carga
        // cuando la app ya terminó de cargar recursos.
    }, [fonstLoaded, error])

    if (!fonstLoaded && !error) return null

    return (
        <Slot />
    )
}

export default RootLayout