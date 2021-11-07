import React, { useEffect, useState } from 'react'
import { observer, inject } from "mobx-react"
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { StatusBar } from "expo-status-bar"
import { useStoreContext } from "../../store"
import { Styles } from "../../shared";
import SVGIcon from "../../shared/components/svg";
import TitleComponent from "../../shared/components/title";
import List from "../../components/list";
import SortComponent from "../../components/sort";
import MenuTab from "../../components/menu";

type Props = any

const Home = (props: Props) => {

    const { userData } = useStoreContext()

    useEffect(() => {
        async function inicia() {
            await load()
        }

        inicia().then(() => {
        })
        return () => {
        }
    }, [])

    async function load() {

    }

    return (
        <View style={Styles.container}>
            <View>
                <SVGIcon.LOGO width={80} height={80} />
            </View>
            <View style={{ width: '100%' }}>
                <SortComponent />
                <List />
            </View>
            <MenuTab />
        </View>
    )
}

export default inject('store')(observer(Home));
// export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
