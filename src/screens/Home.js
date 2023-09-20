import { ScrollView, StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native'
// import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState,useEffect } from 'react'
import HeaderTabs from '../components/homeComponent/HeaderTabs'
import SearchBar from '../components/homeComponent/SearchBar'
import Categories from '../components/homeComponent/Categories'
import RestaurantItem from '../components/homeComponent/RestaurantItem'
import localRestaurants from '../Utils/LocalRestaurants'
import BottomTabs from '../components/homeComponent/BottomTabs'
import { Divider } from 'react-native-elements'


import { useRoute } from '@react-navigation/native'





const YELP_API_KEY = "6eEMb1_HPeZK4GLka9nV9uqfIybwTyA6jvQxneSTd-dG6qG2lFIFtSTXnA7izijmMlhAC_ZJ2LzGorvamGddWRCvye6_qNuxH6iAKB5PoVLAXFJKV3DedO3jfDDvZHYx"
const Home = ({navigation}) => {
    const [restaurantData, setRestaurantData] = useState(localRestaurants)


    const [activeTab, setActiveTab] = useState("Delivery");

    const [city,setCity]=useState("New York")
    const route = useRoute();

   
    
    console.log("city",city)



    const getRestaurantsFromYelp = () => {

        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            }
        }

        return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then((json) =>
                
            // console.log("dfsadfsadf",json)
                setRestaurantData(
                    json.businesses.filter((business) =>
                        business.transactions.includes(activeTab.toLowerCase())
                    )
                )

            );
    }

    // console.log(activeTab)

    // useEffect(() => {
    //     getRestaurantsFromYelp();
    //   }, [city,activeTab]);

    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <View style={{ backgroundColor: "#FFFFFF", padding: 15 }}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
                <SearchBar setCity={setCity} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItem restaurantData={restaurantData} navigation={navigation} />
            </ScrollView>
            <Divider width={1}/>
            <BottomTabs currectScreen={route.name} navigation={navigation} />


        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({

    AndroidSafeArea: {
        flex: 1,
        backgroundColor: "#eee",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
})