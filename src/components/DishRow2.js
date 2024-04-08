import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Icon from 'react-native-feather'



export default function DishRow({ dish }) {
    return (

        <View className="flex-row mt-3 items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">

            <Image className="rounded-3xl" style={{ width: 100, height: 100 }}
                source={dish.image} />
            <View className="flex-col ml-3">
                <View className="pl-3">
                    <Text className="text-xl font-bold">{dish.name}</Text>
                    <Text className="text-gray-500">{dish.category}</Text>

                </View>
                <View className="flex-row justify-between pl-3 items-center">
                    <Text className="text-xl font-bold">${dish.price}</Text>
                </View>

                <View className="flex-row pl-3 items-center">
                    <TouchableOpacity className="pr-2">
                        <Icon.MinusCircle stroke="red" width="20" height="20" strokeWidth={2} />
                    </TouchableOpacity>
                    <Text className="text-xl font-bold">3</Text>
                    <TouchableOpacity className="pl-2">
                        <Icon.PlusCircle stroke="red" width="20" height="20" strokeWidth={2} />
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}