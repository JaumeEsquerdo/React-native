import { View, FlatList, Text } from 'react-native'
import React from 'react'
import { products } from '@/store/products.store'
import { Link } from 'expo-router'

const ProductsScreen = () => {
    return (
        <View className='flex flex-1 px-4'>
            <FlatList
                keyExtractor={(item) => item.id}
                data={products}
                renderItem={({ item }) => (
                    <View className='mt-10'>
                        <Text className='text-2xl font-work-black'>{item.title}</Text>
                        <Text className='f'>{item.title}</Text>

                        <View className='flex flex-row justify-between mt-2'>
                            <Text className='font-work-black'>
                                {item.price}
                            </Text>
                            <Link href={`/(stack)/products/${item.id}`}
                                className='text-primary'
                            >
                                Ver detalles
                            </Link>
                        </View>
                    </View>
                )} />
        </View>
    )
}

export default ProductsScreen

/* renderItem es la forma en la q renderizamos el elemento */