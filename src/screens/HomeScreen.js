import { View, Text, Button, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import * as Icon from 'react-native-feather'
import Categories from '../components/categories.js'
import { dishRow } from '../constants/index.js'
import DishRow from '../components/DishRow2.js'
import CartIcon from '../components/cartIcon.js'

export default function HomeScreen({ }) {
    return (

        <SafeAreaView className="bg-white">

            <Text className="flex-row items-center space-x-50 pl-10 pb-5 text-red-800 text-3xl font-extrabold">Oishi Hut</Text>
            <StatusBar barStyle="dark-content" />
            {/* Search-Bar */}
            <View className="flex-row items-center space-x-2 px-4 pb-2 " >
                <View className="flex-row flex-1 item-center p-3 rounded-full border border-gray-300" >
                    <Icon.Search stroke="gray" width="25" height="25" />
                    <TextInput placeholder='Food' className="flex-1 ml-2" ></TextInput>
                </View>

            </View>

            {/* main */}


            <ScrollView showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 20 }}
            >

                <Text className="px-4 py-4 pt-5 text-black text-2xl font-bold">Menu</Text>
                {/* categories */}
                <Categories />

                {/* dishes */}
                <View className="pb-36 bg-white">
                    {
                        dishRow.map((dish, index) => <DishRow key={index} dish={dish} />)
                    }


                </View>
            </ScrollView>
            <View>
                <CartIcon />
            </View>

        </SafeAreaView>

    )
}