import React from 'react'
import { Stack } from 'expo-router'

// StackLayout: define la navegación en "stack" (como una pila de pantallas)
// Stack: componente contenedor que gestiona la navegación tipo pila
// Stack.Screen: cada pantalla dentro del stack, recibe un "name" (ruta) y "options" (configuración como título, headers, etc.)

const StackLayout = () => {
    return (

        <Stack
            // screenListeners={} para saber si esta siendo cambiado de pagina, a cual van ...
            screenOptions={{
                headerShown: false, //esto oculta el header (q dice donde esta)
                headerShadowVisible: false, // quitar la sombra que deja el header
                contentStyle: {
                    backgroundColor: 'white', // dejar elk fondo blanco
                }
            }}
        >
            <Stack.Screen
                name='home/index' // Ruta de la pantalla
                options={{
                    title: 'Home Screen'// Título que aparece en la cabecera
                }}
            />
            <Stack.Screen
                name='products/index'
                options={{
                    title: 'Products Screen',
                    animation: 'fade_from_bottom'
                }}
            />
            <Stack.Screen
                name='settings/index'
                options={{
                    title: 'Settings Screen'
                }}
            />
            <Stack.Screen
                name='profile/index'
                options={{
                    title: 'Profile Screen'
                }}
            />
        </Stack>
    )
}

export default StackLayout