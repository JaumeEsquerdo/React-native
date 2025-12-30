import { View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
// SafeAreaView: contenedor que asegura que el contenido no se superponga
// con áreas no seguras del dispositivo (notch, barra de estado, bordes).

// import { Link, Redirect } from 'expo-router'
import CustomButton from '@/components/CustomButton'
import { router, Link } from 'expo-router'

const App = () => {
    return (


        // return <Redirect href='/home' />

        <SafeAreaView>
            <View className='px-10 mt-5'>

                <Link href={'/products'} asChild>
                    <CustomButton
                        color='primary'
                        className='mb-10'
                        onPress={() => router.push('/products')}
                    // onLongPress={onLongPress}
                    >Productos</CustomButton>
                </Link>


                <CustomButton color='primary'
                    className='mb-10'
                    onPress={() => router.push('/products')}
                // onLongPress={onLongPress}
                >Productos</CustomButton>

                <CustomButton color='primary'
                    className='mb-10'
                    variant='text-only'
                    onPress={() => router.push('/products')}
                // onLongPress={onLongPress}
                >Productos</CustomButton>
            </View>
        </SafeAreaView >
    )
}

export default App