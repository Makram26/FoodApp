import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList } from 'react-native'
import React, { useRef, useState } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

import CityList from '../../Utils/CityList';


const SearchBar = (props) => {

    const googlePlaceAutoCompleteRef = useRef(null)
    const [searchText, setSearchText] = useState("")
    const [selectedCity,setSelectedCity]=useState("no selected")

    


    const FilterCites = CityList && CityList.filter(city =>
        city.name.toLowerCase().includes(searchText.toLowerCase())
    )

    return (
        <>
            <View style={{ marginTop: 15, flexDirection: "row" }}>
                <View style={{

                    backgroundColor: "#eee",
                    width: "98%",
                    borderRadius: 50,
                    flexDirection: "row",
                    alignItems: "center",
                    paddingVertical: 10
                    // marginRight: 10
                }}>
                    <View style={{ marginLeft: 10 }}>
                        <Ionicons name="location-sharp" size={24} />
                    </View>
                    <TextInput
                        placeholder='Search'
                        value={searchText}
                        onChangeText={(val) => {setSearchText(val),setSelectedCity("")}}
                        style={{ marginLeft: 8, width: "60%" }}
                    />
                    {
                        searchText != "" && (
                            <TouchableOpacity
                                style={styles.clearButton}
                                onPress={() => {setSearchText(""),setSelectedCity("w")}} >
                                <Ionicons name={'close-circle-outline'} color={'black'} size={20} />
                            </TouchableOpacity>
                        )
                    }

                    < View style={{
                        flexDirection: "row",
                        backgroundColor: "#FFFFFF",
                        padding: 9,
                        marginLeft: searchText != "" ? 2 : 22,
                        borderRadius: 30,
                        alignItems: "center"
                    }}>
                        <AntDesign name="clockcircle" size={11} />
                        <Text style={{ marginLeft: 6 }}>Search</Text>
                    </View>

                </View>
            </View>
            {
                selectedCity == "" ?
                    <View style={{height:200}}>
                    <FlatList
                        data={FilterCites}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity style={{ padding: 10 }}
                                onPress={() => {setSearchText(item.name),setSelectedCity(item.name),props.setCity(item.name)}}
                                >
                                    <Text>{item.name}</Text>
    
                                </TouchableOpacity>
                            )
                        }}
    
                    />
                </View>
                 :
                 null
            }
         
{/* 
            <View style={{ marginTop: 15, flexDirection: "row" }}>

                <GooglePlacesAutocomplete
                    //   query={{ key: "AIzaSyATiAqIXBARofRD2apZcPQ1eEWZPH4fPV4" }}
                    onPress={(data, details = null) => {
                        console.log(data.description);
                        // const city = data.description.split(",")[0];
                        // cityHandler(city);
                    }}
                    ref={googlePlaceAutoCompleteRef}


                    placeholder='Search'
                    styles={{
                        textInput: {
                            backgroundColor: "#eee",
                            borderRadius: 20,
                            fontWeight: "700",
                            marginTop: 7
                        },
                        textInputContainer: {
                            backgroundColor: "#eee",
                            borderRadius: 50,
                            flexDirection: "row",
                            alignItems: "center",
                            marginRight: 10
                        }

                    }}

                    renderLeftButton={() => (
                        <View style={{ marginLeft: 10 }}>
                            <Ionicons name="location-sharp" size={24} />
                        </View>

                    )}

                    renderRightButton={() => (

                        <>
                            {
                        console.log(googlePlaceAutoCompleteRef.current?.isFocused())
                    }
                        { googlePlaceAutoCompleteRef.current?.getAddressText()
                        ?
                        <TouchableOpacity
                            style={styles.clearButton}
                            onPress={() => { googlePlaceAutoCompleteRef.current?.setAddressText('')}} >
                            <Ionicons name={'close-circle-outline'} color={'black'} size={20} />
                        </TouchableOpacity>
                        :
                        null }






                            < View style={{
                                flexDirection: "row",
                                backgroundColor: "#FFFFFF",
                                padding: 9,
                                marginRight: 8,
                                borderRadius: 30,
                                alignItems: "center"
                            }}>
                                <AntDesign name="clockcircle" size={11} />
                                <Text style={{ marginLeft: 6 }}>Search</Text>
                            </View>
                        </>


                    )
                    }


                // onPress={(data, details = null) => {
                //     // 'details' is provided when fetchDetails = true
                //     console.log(data, details);
                // }}
                // query={{
                //     key: 'YOUR API KEY',
                //     language: 'en',
                // }}
                />
            </View > */}
        </>
    )
}

export default SearchBar

const styles = StyleSheet.create({})