import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
/* la carpeta se llama '(home)' para que no se vea en la url este path es como si estuviese vacio '/', y se toma como index global */

const HomeScreen = () => {
    return (
        <View className='px-10 bg-slate-400'>
            <Text>Home</Text>

            <Link className='mb-5'
                href={'/products'}
            >
                Productos
            </Link>
            <Link className='mb-5'
                href={'/profile'}
            >
                Profile
            </Link>
            <Link className='mb-5'
                href={'/settings'}
            >
                Settings
            </Link>
        </View>
    )
}

export default HomeScreen