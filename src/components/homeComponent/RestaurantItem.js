import { StyleSheet, Text, View,TouchableOpacity,ActivityIndicator } from 'react-native'

import { Image } from 'react-native-elements';
import React from 'react'

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"




const RestaurantItem = ({ navigation, ...props }) => {

    // console.log("SDf",navigation)

    return (

        <>

            {
                props.restaurantData && props.restaurantData.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        activeOpacity={1}
                        style={{ marginBottom: 30 }}
                        onPress={() => navigation.navigate("RestaurantDetails",{
                            name:item.name,
                            image:item.image_url,
                            price:item.price,
                            reviews:item.review_count,
                            rating:item.rating,
                            categories:item.categories
                        })}
                    >
                        <View style={{ backgroundColor: "#FFFFFF", marginTop: 10, padding: 15 }}>
                            <RestaurantImage image={item.image_url} />
                            <RestaurantInfo name={item.name} rating={item.rating} />
                        </View>
                    </TouchableOpacity>
                ))
            }

        </>



    )
}

export default RestaurantItem

const RestaurantImage = (props) => (
    <>
        <Image
            source={{ uri: props.image }}
            style={{
                width: "100%",
                height: 200,

            }}
            PlaceholderContent={<ActivityIndicator />}
        />
        <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
            <MaterialCommunityIcons name="heart-outline" size={25} color="#FFFFFF" />
        </TouchableOpacity>
    </>


)


const RestaurantInfo = (props) => (
    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
        <View>
            <Text style={{ fontSize: 15, fontWeight: "bold", }}>{props.name}</Text>
            <Text>35-45 . min</Text>
        </View>
        <View style={{ backgroundColor: "#eee", borderRadius: 45 / 2, width: 45, height: 45, alignItems: "center", justifyContent: "center" }}>
            <Text >{props.rating}</Text>
        </View>

    </View>
)

const styles = StyleSheet.create({})