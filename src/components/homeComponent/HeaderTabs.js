import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'


const HeaderButton = (props) => (

    <TouchableOpacity style={{
        backgroundColor: props.activeTab === props.text ? "#000000":"#FFFFFF",
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30
    }} 
     onPress={()=> props.setActiveTab(props.text)}
    >
        <Text style={{
            color: props.activeTab === props.text ? "#FFFFFF":"#000000",
            fontSize:15,
            fontWeight: "900"
        }}>
            {props.text}</Text>
    </TouchableOpacity>


)

const HeaderTabs = (props) => {
    //  const [activeTab, setActiveTab] = useState("Delivery")
    return (
        <View style={{
            flexDirection: "row",
            alignSelf: "center",

        }}>
            <HeaderButton text="Delivery" btnColor="#000000" textColor="#FFFFFF" activeTab={props.activeTab} setActiveTab={props.setActiveTab} />
            <HeaderButton text="Pickup" btnColor="#FFFFFF" textColor="#000000" activeTab={props.activeTab} setActiveTab={props.setActiveTab} />



        </View>
    )
}

export default HeaderTabs

const styles = StyleSheet.create({})