import React, { useState } from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { NavigationContainer } from "@react-navigation/native";

import Home from "../../screens/Home"
import RestaurantDetails from "../../screens/RestaurantDetails";

import { Provider } from "react-redux";

import store from '../../redux/store'
import OrderCompleted from "../../screens/OrderCompleted";
import Splash from "../../screens/Splash";
import SignUp from "../../screens/SignUp";
import Login from "../../screens/Login";
import Account from "../../screens/Account";



export default function RootNavigation() {
    const Stack = createStackNavigator()

    const [uid,setUid]=useState(false)

    const screenOptions = {
        headerShown: false
    }

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={uid ?"Splash": "Home"} screenOptions={screenOptions}>

                    <Stack.Screen name="Home" component={Home} options={{ gestureEnabled: false }} />
                    <Stack.Screen name="Splash" component={Splash} />
                    <Stack.Screen name="SignUp" component={SignUp} options={{ gestureEnabled: false }}/>
                    <Stack.Screen name="Login" component={Login} options={{ gestureEnabled: false }}/>
                    <Stack.Screen name="Account" component={Account} options={{ gestureEnabled: false }}/>



                    <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} />
                    <Stack.Screen name="OrderCompleted" component={OrderCompleted} options={{ gestureEnabled: false }} />


                </Stack.Navigator>
            </NavigationContainer>
        </Provider>

    )
}