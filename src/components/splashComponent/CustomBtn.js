import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'


import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const CustomBtn = (props) => {
    
    return (
        <View style={{ padding: 20, flexDirection: "row", justifyContent: "space-between" }}>
            {
               props.currentIndex != 0 ? (
                    <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => props.handlePrevButtonPress()}>
                        {/* <MaterialCommunityIcons name="arrow-left" size={20} color="#000000" /> */}
                        <Text style={{ fontSize: 15, fontWeight: "600", }}>Previous</Text>

                    </TouchableOpacity>
                ) : (

                    <View></View>
                )
            }
            {
               props.currentIndex != 2 ? (
                    <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => props.handleNextButtonPress()}>
                        <Text style={{ fontSize: 15, fontWeight: "600",  }} >Next</Text>
                        {/* <MaterialCommunityIcons name="arrow-right" size={20} color="#000000" /> */}
                    </TouchableOpacity>
                ) : (
                    <View></View>
                )

            }



        </View>
    )
}

export default CustomBtn

const styles = StyleSheet.create({})