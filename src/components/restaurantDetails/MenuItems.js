import { StyleSheet, Text, View, ScrollView, FlatList,TouchableOpacity,ActivityIndicator } from 'react-native'
import React from 'react'

import Foods from '../../Utils/Foods'
import { Divider } from 'react-native-elements'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

import { Image } from 'react-native-elements';



import { useDispatch, useSelector } from 'react-redux'

const MenuItem = ({
    restaurantName,
    foods,
    hideCheckBox,
    marginLeft
}) => {

    // console.log(">>>>>",foods)

    const dispatch = useDispatch()

    const selectitem = (item, checkboxValue) => dispatch({
        type: "ADD_TO_CART",
        payload: { ...item, restaurantName: restaurantName, checkboxValue: checkboxValue }
    })


    const cartItems = useSelector((state) => state.cartReducer.selectedItems.items)


    const isFoodCart = (food, cartitems) => Boolean(cartItems.find((item) => item.title === food.title))



    return (
        <View >
            <FlatList
                showsVerticalScrollIndicator={false}
                data={foods ? foods : Foods}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item, index }) => {
                    return (
                        <View key={index}>
                            <View style={styles.menuItemStyle}>
                                {hideCheckBox ? (
                                    <></>
                                ) : (
                                    <BouncyCheckbox
                                        iconStyle={{ borderRadius: 0 }}
                                        fillColor='green'
                                        innerIconStyle={{
                                            borderRadius: 0, // to make it a little round increase the value accordingly
                                            borderColor: "lightgray"
                                        }}
                                        isChecked={isFoodCart(item, cartItems)}
                                        onPress={(checkboxValue) => selectitem(item, checkboxValue)}

                                    />
                                )



                                }
                                <FoodInfo foods={item} />
                                <FoodImgae foods={item} marginLeft={marginLeft ? marginLeft : 0}  />

                            </View>
                            <Divider width={0.5} orientation="vertical" style={{ marginHorizontal: 20 }} />
                        </View>


                    )
                }}
                contentContainerStyle={styles.list}
            />

        </View>
    )
}

export default MenuItem


const FoodInfo = (props) => (

    <View style={{ width: 240, justifyContent: "space-evenly" }}>
        <Text style={styles.titleStyle}>{props.foods.title}</Text>
        <Text style={{ marginRight: 5,paddingVertical:5,letterSpacing:0.4 }}>{props.foods.description}</Text>
        <Text>{props.foods.price}</Text>

    </View>


)


const FoodImgae = ({marginLeft,...props}) => (

    <>
    
        <Image
            source={{ uri: props.foods.image }}
            style={{
                width: 100,
                height: 100,
                borderRadius: 8,
                marginLeft:marginLeft

            }}
            PlaceholderContent={<ActivityIndicator />}
        />
    </>


)




const styles = StyleSheet.create({

    menuItemStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20
    },
    titleStyle: {
        fontSize: 19,
        fontWeight: "600",

    },

    list: {
        paddingBottom: 350
    }

})