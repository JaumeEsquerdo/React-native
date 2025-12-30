import { View } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '@/components/CustomButton'

/* la carpeta se llama '(home)' para que no se vea en la url este path es como si estuviese vacio '/', y se toma como index global */

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View className='px-10 mt-5'>


                <CustomButton color='primary'
                    className='mb-2'
                    onPress={() => router.push('/products')}
                // onLongPress={onLongPress}
                >Productos</CustomButton>

                <CustomButton color='primary'
                    className='mb-2'

                    onPress={() => router.push('/profile')}
                // onLongPress={onLongPress}
                >Profile</CustomButton>
                <CustomButton color='tertiary'
                    className='mb-2'

                    onPress={() => router.push('/settings')}
                // onLongPress={onLongPress}
                >Settings</CustomButton>
            </View>
            <Link href={'/products'} asChild>
                <CustomButton
                    variant='text-only'
                    color='primary'
                    className='mb-2'
                    onPress={() => router.push('/products')}
                // onLongPress={onLongPress}
                >Productos</CustomButton>
            </Link>
        </SafeAreaView >
    )
}

export default HomeScreen