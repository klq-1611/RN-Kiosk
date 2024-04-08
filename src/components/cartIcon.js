import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Icon from 'react-native-feather'
import { useNavigation } from '@react-navigation/native'

export default function CartIcon() {
    const navigation = useNavigation();
    return (
        <View className="absolute bottom-20 py-7 w-full z-50">
            <TouchableOpacity className="flex-row items-center justify-between bg-red-800 p-4 py-3 shadow-lg rounded-full"
                onPress={() => navigation.navigate("Cart")}
            >

                <View className="p-2 px-4 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}>
                    <Text className="text-white font-bold text-lg">4</Text>
                </View>
                <Text className="text-white font-extrabold text-center text-xl">View Cart</Text>
                <Icon.ShoppingCart className="mr-3" stroke="white" width="25" height="25" />
            </TouchableOpacity>
        </View>
    )
}