import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
// SafeAreaView: contenedor que asegura que el contenido no se superponga
// con áreas no seguras del dispositivo (notch, barra de estado, bordes).

const App = () => {
    return (
        <SafeAreaView>
            <View className='mt-6 mx-2.5 bg-primary'>
                <Text className='text-3xl'
                    style={{ fontFamily: 'WorkSans-Black' }}
                >Hola app</Text>
                <Text className='text-2xl font-work-black text-primary'>Hola app</Text>
                <Text className='text-3xl font-work-light text-secondary-default'>Hola app</Text>
                <Text className='text-xl font-work-medium text-tertiary'>Hola app</Text>
            </View>
        </SafeAreaView>
    )
}

export default App