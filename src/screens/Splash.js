import React, { useRef, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native'

import Swiper from 'react-native-swiper'


import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Slide1 from '../components/splashComponent/Slide1'
import Slide2 from '../components/splashComponent/Slide2'
import Slide3 from '../components/splashComponent/Slide3'




const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    slide2: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    slide3: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: "#eee",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
})



export default function Splash({navigation}) {

    const swiperRef = useRef(null);

    // const handleNextButtonPress = () => {
    //     if (swiperRef.current) {
    //         swiperRef.current.scrollBy(1); // Move to the next slide
    //     }
    // };


    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNextButtonPress = () => {
        if (swiperRef.current) {
            const nextIndex = currentIndex + 1;
            if (nextIndex < swiperRef.current.state.total) {
                swiperRef.current.scrollTo(nextIndex);
                setCurrentIndex(nextIndex);
            }
        }
    };

    const handlePrevButtonPress = () => {
        if (swiperRef.current) {
            const prevIndex = currentIndex - 1;
            if (prevIndex >= 0) {
                swiperRef.current.scrollTo(prevIndex);
                setCurrentIndex(prevIndex);
            }
        }
    };





    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <Swiper style={styles.wrapper}
                // showsPagination={false}
                // horizontal={false}
                // pagingEnabled={false}
                scrollEnabled={false}
                ref={swiperRef}
                showsButtons={false}
                loop={false}
                dotColor="#eee"
                activeDotColor='#FD3535'
                autoplay={false}
            // nextButton={<CustomNextButton />}
            // prevButton={<Text></Text>}
            >

                <View style={styles.slide1}>
                    <Slide1 
                    handleNextButtonPress={handleNextButtonPress} 
                    handlePrevButtonPress={handlePrevButtonPress}
                    currentIndex={currentIndex}
                     />
                </View>

                <View style={styles.slide2}>
                   <Slide2
                   handleNextButtonPress={handleNextButtonPress} 
                   handlePrevButtonPress={handlePrevButtonPress}
                   currentIndex={currentIndex}
                   />

                </View>
                <View style={styles.slide3}>
                   <Slide3
                    handleNextButtonPress={handleNextButtonPress} 
                    handlePrevButtonPress={handlePrevButtonPress}
                    currentIndex={currentIndex}
                    navigation={navigation}
                   />
                </View>


            </Swiper>
        </SafeAreaView>

    )

}