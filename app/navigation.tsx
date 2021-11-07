import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import { inject, observer } from "mobx-react"

//Pages
import AuthPage from "./pages/auth";
import Home from "./pages/home";
import Ratings from './pages/ratings/add-edit'


const Stack = createNativeStackNavigator()

const AppNavigator = () => {


    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'Home'}>
                <Stack.Screen name={"Auth"} component={AuthPage} options={{ title: 'Login', headerShown: false }}  />
                <Stack.Screen name={"Home"} component={Home} options={{ title: 'Home' }} />
                <Stack.Screen name={"Ratings"} component={Ratings} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default inject('store')(observer(AppNavigator));
