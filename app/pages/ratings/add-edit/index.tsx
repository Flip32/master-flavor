import React, {useEffect, useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { HelperText, IconButton, TextInput } from "react-native-paper";
import { AirbnbRating } from "react-native-ratings";
import { Formik } from "formik";
import * as Yup from 'yup'
import { Colors, Styles } from "../../../shared";
import TitleComponent from "../../../shared/components/title";
import SVGIcon from '../../../shared/components/svg/index'
import { Button } from "../../../shared/components/button";
import {useNavigation} from "@react-navigation/native";
import MenuTab from "../../../components/menu";

type rating = {
    id: string
    name: string
    rating: number
    description: string
    brand: string
}

const Ratings = (props: any) => {

    const item = props.route?.params?.item
    const title = !!item ? 'EDITAR' :'ADICIONAR'
    const { goBack } = useNavigation()
    const [initialValues, setInitialValues] = useState<rating>({
        id: item?.id,
        name: item?.name || '',
        rating: item?.rating || 0,
        description: item?.description || '',
        brand: item?.brand || ''
    })

    const formSchema = Yup.object().shape({
        name: Yup.string()
            .required('O nome é obrigatório'),
        description: Yup.string()
            .required('A descrição é obrigatória'),
        rating: Yup.number()
            .required('A nota é obrigatória'),
        brand: Yup.string()
            .required('A marca é obrigatória'),
    });

    async function handleSubmit(values: any, actions: any){
        console.log(values)
    }

    async function handleRemove(){
        //TODO - Remover item
    }

    return (
        <View style={styles.container}>
            <View style={Styles.logoTitleContainer}>
                <View style={Styles.logoAbsolute}>
                    <SVGIcon.LOGO width={80} height={80} />
                </View>
                <TitleComponent title={title} />
            </View>

            <View style={{ width: '100%', marginTop: 10 }}>
                <Formik initialValues={initialValues}
                        onSubmit={(values: any, actions: any) => handleSubmit(values, actions)} validationSchema={formSchema}
                        style={{flex: 1}}>
                    {
                        ({
                             values,
                             handleChange,
                             handleSubmit, errors,
                             touched,
                             setFieldTouched,
                             setFieldValue,
                         }) => (
                            <View style={{paddingHorizontal: 40, paddingVertical: 20}}>
                                <View style={{ marginBottom: 40 }}>
                                    <AirbnbRating
                                        count={5}
                                        defaultRating={values.rating}
                                        size={30}
                                        isDisabled={false}
                                        starContainerStyle={{ paddingHorizontal: 5 }}
                                        selectedColor={Colors.star}
                                        showRating={false}
                                        onFinishRating={(value) => setFieldValue('rating', value)}
                                    />
                                </View>

                                <TextInput
                                    mode={'outlined'}
                                    value={values.name}
                                    onChangeText={handleChange('name')}
                                    style={[Styles.input, {marginBottom: 10}]}
                                    placeholderTextColor='purple'
                                    label={'Nome'}
                                    onBlur={() => setFieldTouched('email')}
                                />
                                {
                                    errors.name && touched.name &&
                                    <HelperText type={'error'}>{errors.name}</HelperText>}

                                <View style={Styles.input}>
                                    <TextInput
                                        mode={'outlined'}
                                        value={values.brand}
                                        onChangeText={handleChange('brand')}
                                        style={[Styles.input, {marginBottom: 10}]}
                                        placeholderTextColor='purple'
                                        label={'Marca'}
                                        onBlur={() => setFieldTouched('brand')}
                                    />
                                </View>
                                {errors.brand && touched.brand && <HelperText type={'error'}>{errors.brand}</HelperText>}

                                <View style={Styles.input}>
                                    <TextInput
                                        mode={'outlined'}
                                        value={values.description}
                                        onChangeText={handleChange('description')}
                                        style={[Styles.input, {marginBottom: 10}]}
                                        placeholderTextColor='purple'
                                        label={'Descrição'}
                                        onBlur={() => setFieldTouched('description')}
                                        numberOfLines={10}
                                        multiline={true}
                                    />
                                </View>
                                {errors.description && touched.description && <HelperText type={'error'}>{errors.description}</HelperText>}

                                <Button onPress={handleSubmit} buttonColor={Colors.secondary} title={'Salvar'} type={"solid"}
                                        backgroundStyle={{alignSelf: 'center', width: '100%', marginTop: 20}}/>
                                {
                                    !!item &&
                                    <Button onPress={() => handleRemove()} buttonColor={Colors.secondary} title={'Excluir'} type={"solid"}
                                            backgroundStyle={{alignSelf: 'center', width: '100%', marginTop: 20}}/>
                                }
                                <Button onPress={() => goBack()}
                                        buttonColor={Colors.secondary}
                                        title={'Cancelar'}
                                        type={"outlined"}
                                        backgroundStyle={{alignSelf: 'center', width: '100%', marginTop: 20}}
                                        textColor={Colors.secondary}
                                />
                            </View>
                        )
                    }
                </Formik>
            </View>
            <MenuTab />
        </View>
    )
}

export default Ratings;

const styles = StyleSheet.create({
    container: {flex: 1},
})
