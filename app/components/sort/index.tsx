import React, { useEffect, useState } from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import SVGIcon from '../../shared/components/svg';
import {Colors, Styles} from "../../shared";

type Props = {

}

const SortComponent = (props: Props) => {

    const [openBox, setOpenBox] = useState(false)

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
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => setOpenBox(!openBox)}
                style={[styles.boxContainer, styles.sortLabel]}
            >
                <Text style={[Styles.labelSortTitle, { marginTop: 0 }]}> Ordenar </Text>
                {
                    !openBox
                        ? <SVGIcon.CHEVRON_DOWN fill={Colors.background} />
                        : <SVGIcon.CHEVRON_UP fill={Colors.background} />
                }
            </TouchableOpacity>

            {
                openBox &&
                <View style={[styles.boxContainer]}>
                    <Text style={Styles.labelSortTitle}> Mais Ranqueado </Text>
                    <Text style={Styles.labelSortTitle}> Menos Ranqueado </Text>
                    <Text style={Styles.labelSortTitle}> Ordem Alfabética A-Z </Text>
                    <Text style={Styles.labelSortTitle}> Ordem Alfabética Z-A </Text>
                    <Text style={Styles.labelSortTitle}> Por Marca </Text>
                </View>
            }
        </View>
    )
}

export default SortComponent;

const styles = StyleSheet.create({
    container: { width: 200, backgroundColor: Colors.background, padding: 2, alignSelf: "flex-end", marginTop: 30, marginRight: 20 },
    boxContainer: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: Colors.grayBoxes,
    },
    sortLabel: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        borderBottomWidth: 2,
        borderBottomColor: Colors.background

    },
})
