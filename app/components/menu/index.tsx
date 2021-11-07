import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';
import * as Device from 'expo-device'
import { useNavigation } from "@react-navigation/native";

import SVGIcon from '../../shared/components/svg/index'
import { Colors } from "../../shared";

type Props = {
}

const {width} = Dimensions.get('window');

const MenuTab = (props: Props) => {

    const { navigate } = useNavigation()

    function handleNavigation(route: string) {
        // @ts-ignore
        navigate(route)
    }

    return (
        <View style={styles.footer}>
            <TouchableOpacity
                onPress={() => handleNavigation('Search')}
                style={styles.button}>
                <SVGIcon.SEARCH_LEFT />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => handleNavigation('Perfil')}
                style={styles.button}>
                <SVGIcon.USER_ICON />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => handleNavigation('Ratings')}
                style={styles.button}>
                <SVGIcon.NARGS_ICON />
            </TouchableOpacity>
        </View>
    )
}

export default MenuTab;

const styles = StyleSheet.create({
    container: {flex: 1},
    footer: {
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: "center",
        backgroundColor: Colors.background,
        paddingHorizontal: '10%',
        position: 'absolute',
        bottom: 0,
        height: 80,
        paddingBottom: Device.brand == 'Apple' && Device.modelName !== 'iPhone 7' ?  20 : 5,
    },
    button: { padding: 10, },
})
