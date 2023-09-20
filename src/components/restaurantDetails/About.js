import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"



// const yelpRestaurantInfo = {
//     name: "Farmhouse Kitchen Thai Cuisine",
//     image: "https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg",
//     price: "$$",
//     reviews: "1500",
//     rating: 4.5,
//     categories: [{ title: "Thai" }, { title: "Comfort Food" }],
// }






// const image = "https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg"

// const title = "Farmhouse Kitchen Thai Cuisine"

// const description = "Thai • Comfort Food • $$ • 🎫 • ⭐ (2913+)"

const About = ({navigation,...props}) => {
    const { name, image, price, reviews, rating, categories } = props.route.params

    const formattedCategories = categories.map((val) => val.title).join(" • ")



    const description = `${formattedCategories} ${price ? " • " + price : " "} • 🎫 • ${rating} ⭐ (${reviews}+)`;
    return (
        <View>
            <RestaurantImage image={image} navigation={navigation} />
            < RestaurantName name={name} />
            <RestaurantDescription text={description} />


        </View>
    )
}

export default About


const RestaurantImage = ({navigation,...props}) => (
    <>


        <Image
            source={{ uri: props.image }}
            style={{
                width: "100%",
                height: 180,

            }}
        />

        <TouchableOpacity onPress={()=> navigation.goBack()} style={{ position: "absolute", left: 30, top: 40 }}>
            <MaterialCommunityIcons name="arrow-left" size={30} color="#FFFFFF" />
        </TouchableOpacity>

    </>
)

const RestaurantName = (props) => (
    <>
        <Text
            style={{
                fontSize: 29,
                fontWeight: "600",
                marginTop: 10,
                marginHorizontal: 15

            }}
        >
            {props.name}
        </Text>

    </>
)

const RestaurantDescription = (props) => (
    <>
        <Text
            style={{
                marginTop: 10,
                marginHorizontal: 15,
                fontWeight: "400",
                fontSize: 15.5
            }}
        >
            {props.text}
        </Text>

    </>
)

const styles = StyleSheet.create({})