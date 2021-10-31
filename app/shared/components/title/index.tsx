import React from 'react';
import { Text } from 'react-native';
import { Styles } from "../../index";

type Props = {
    title: string
}

const TitleComponent = (props: Props) => {

    const { title } = props

    return (
        <Text style={Styles.titlePage}>{title}</Text>
    )
}

export default TitleComponent;
