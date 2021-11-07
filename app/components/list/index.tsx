import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {inject, observer} from "mobx-react";
import ItemList from "./Item";

type Props = {

}

const List = (props: Props) => {

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
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <ItemList />
            <ItemList />
            <ItemList />
            <ItemList />
            <ItemList />
            <ItemList />
            <ItemList />
            <ItemList />
            <ItemList />
        </ScrollView>
    )
}

export default inject('store')(observer(List));

const styles = StyleSheet.create({
    container: { },
    contentContainer: { paddingBottom: 60},
})
