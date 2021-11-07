import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { AirbnbRating } from "react-native-ratings";
import { Card } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import { Colors, Styles } from "../../../shared";
import SVGIcon from '../../../shared/components/svg/index'
import {render} from "react-dom";

type Props = {

}

const borderRadius = 4

const ItemList = (props: Props) => {

    const { } = props

    const { navigate } = useNavigation()

    const item = {
        id: '1',
        name: 'Love 66',
        rating: 4,
        description: 'Muito boa essencia de melao com melancia',
        brand: 'Adhalia'
    }

    const renderStars = (rating: number) => {
        let stars = []
        for (let i = 0; i < 5; i++) {
            if(i < rating) {
                stars.push(<SVGIcon.STAR_SOLID fill={Colors.star} width={15} height={15} />)
            } else {
                stars.push(<SVGIcon.STAR_OUTLINED  width={15} height={15} />)
            }
        }
        return stars
    }

    return (
        <TouchableOpacity
            onPress={() => navigate('Ratings', {item: item})}
            style={styles.container}>
            <View style={[styles.row, styles.barContainer, styles.bordersTop]}>
                <Text style={Styles.labelInput}> nome </Text>
                <Text style={Styles.labelInput}> marca </Text>
                <Text children={' '}/>
            </View>

            <View style={[styles.row, styles.barDescricaoContainer, styles.bordersBottom]}>
                <Text style={Styles.labelItemName}> { item.name } </Text>
                <Text style={Styles.labelItemName}> { item.brand } </Text>
                <View style={styles.ratingContainer}>
                    {
                        renderStars(item.rating)
                    }
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default ItemList;

const styles = StyleSheet.create({
    container: {flex: 1, marginHorizontal: 20, padding: 5, },
    row: { flexDirection: "row", justifyContent: "space-between", alignItems: "center",  },
    bordersTop: { borderTopRightRadius: borderRadius, borderTopLeftRadius: borderRadius },
    bordersBottom: { borderBottomRightRadius: borderRadius, borderBottomLeftRadius: borderRadius },
    barContainer: { backgroundColor: Colors.barraItem, paddingTop: 8, paddingHorizontal: 2 },
    barDescricaoContainer: { backgroundColor: Colors.descricaoBarraItem, padding: 8 },
    ratingContainer: { flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginLeft: 0 },
})
