import { View, Text } from 'react-native'
import React from 'react'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { products } from '@/store/products.store'

// Este archivo usa rutas dinámicas de expo-router:
// la carpeta [id], puede tener cualquier nombrem productId por ej, permite recibir el parámetro desde la URL (products/:id)
// con useLocalSearchParams obtenemos el id y cargamos el producto correspondiente

const ProductsScreen = () => {

    const { id } = useLocalSearchParams()

    const product = products.find(p => p.id === id)

    if (!product) {
        return <Redirect href={'/'} />
    }

    return (
        <View className='px-10 mt-5'>
            <Text className='text-2xl font-work-black'>{product.title}</Text>
            <Text className=''>{product.description}</Text>
            <Text className='font-work-black'>{product.price}</Text>
        </View>
    )
}

export default ProductsScreen