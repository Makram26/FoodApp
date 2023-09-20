import { View, Text, SafeAreaView, ScrollView, TouchableOpacity,StyleSheet,StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import LottieView from 'lottie-react-native'
import MenuItem from '../components/restaurantDetails/MenuItems'
import firebaseApp from '../Utils/firebase'
import { Divider } from 'react-native-elements'

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"



// import MyAnimation from '../assets/animations/check-mark.json'


console.log("firebase", firebaseApp)
export default function OrderCompleted({navigation,...props}) {
    // console.log(props.route.params)
    const {restaurantName,totalUSD}=props.route.params

    const [lastOrder, setLastOrder] = useState({
        items: [
            {
                id: 1,
                title: "Cashew Chicken",
                description: "This quick and easy cashew chicken is made with chicken, crunchy cashews, in a velvety homemade stir fry sauce.",
                price: "$13.50",
                image: "https://www.modernhoney.com/wp-content/uploads/2023/08/Cashew-Chicken-5-600x600.jpg"
            }
        ]
    })

    // const { items, restaurantName } = useSelector((state) => state.cartReducer.selectedItems)


    // const totol = items.map((item) => Number(item.price.replace("$", ""))).reduce((prev, curr) => prev + curr, 0)



    // const totalUSD = totol.toLocaleString("en", {
    //     style: "currency",
    //     currency: "USD"
    // })


    useEffect(() => {

        const db = firebaseApp.firestore()
        const unsubscribe = db.collection("orders").orderBy("createdAt", "desc").limit(1).onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                setLastOrder(doc.data())
            })
        })

        return unsubscribe

    }, [])


    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            {/* green checkmark */}


            <View style={{
                margin: 15,
                alignItems: "center",
                height: "70%",
                // backgroundColor:"red"
            }} >
                <LottieView style={{ width: "100%", height: 100, marginBottom: 30 }}
                    source={require('../assets/animations/check-mark.json')}
                    autoPlay
                    speed={0.5}
                    loop={false}
                />

                <TouchableOpacity onPress={() => navigation.navigate("Home")} style={{ position: "absolute", left: 10, }}>
                    <MaterialCommunityIcons name="arrow-left" size={30} color="#000000" />
                </TouchableOpacity>


                <Text style={{ fontSize: 20, fontWeight: "bold" }}>your order at {restaurantName} has been placed for {totalUSD}</Text>
                {/* menuItems f */}
                {/* <ScrollView> */}
                <MenuItem foods={lastOrder.items} hideCheckBox={true} />
                {/* cooking */}
            </View>
            {/* <Divider width={1}/> */}
            <View>
                <LottieView style={{ width: "100%",bottom:20 }}
                    source={require('../assets/animations/cooking.json')}

                    autoPlay
                    speed={0.5}
                    loop={true}

                />
            </View>



            {/* </ScrollView> */}


        </SafeAreaView>

    )
}


const styles = StyleSheet.create({

    AndroidSafeArea: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
})

// {"navigation": 
//    {"addListener": [Function addListener], "canGoBack": [Function canGoBack],
//     "dispatch": [Function dispatch], "getId": [Function getId], "getParent": [Function getParent], 
//     "getState": [Function anonymous], "goBack": [Function anonymous], "isFocused": [Function isFocused],
//      "navigate": [Function anonymous], "pop": [Function anonymous], "popToTop": [Function anonymous], 
//      "push": [Function anonymous], "removeListener": [Function removeListener], 
//      "replace": [Function anonymous], "reset": [Function anonymous], 
//      "setOptions": [Function setOptions], "setParams": [Function anonymous]},
// "route": 
// {"key": "OrderCompleted-0RbDFID73PCn_o7PUVNz8", "name": "OrderCompleted", 
// "params": {"restaurantName": "Beachside Bar", "totalUSD": "$26.00"}, "path": undefined
// }}