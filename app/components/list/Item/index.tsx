import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { AirbnbRating } from "react-native-ratings";
import { Card } from 'react-native-paper';
import {Colors, Styles} from "../../../shared";

type Props = {

}

const ItemList = (props: Props) => {

    const { } = props

    return (
        <View style={styles.container}>
            <View style={[styles.row, styles.barContainer]}>
                <Text style={Styles.labelInput}> nome </Text>
                <Text style={Styles.labelInput}> marca </Text>
                <Text children={' '}/>
            </View>

            <View style={[styles.row, styles.barDescricaoContainer]}>
                <Text style={Styles.labelItemName}> Nome Essencia </Text>
                <Text style={Styles.labelItemName}> Marca Essencia </Text>
                <AirbnbRating
                    count={5}
                    defaultRating={0}
                    size={15}
                    isDisabled={true}
                    starContainerStyle={{ paddingHorizontal: 5 }}
                    selectedColor={Colors.star}
                    showRating={false}
                    onFinishRating={value => console.log({value})}
                />
            </View>
        </View>
    );
}

export default ItemList;

const styles = StyleSheet.create({
    container: {flex: 1, marginHorizontal: 20, padding: 5},
    row: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", },
    barContainer: { backgroundColor: Colors.barraItem, paddingTop: 8, paddingHorizontal: 2 },
    barDescricaoContainer: { backgroundColor: Colors.descricaoBarraItem, padding: 8 },
})
