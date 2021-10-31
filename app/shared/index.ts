import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const FontSizes = {
    xSmall: 8,
    small: 10,
    medium: 16,
    large: 20,
    xLarge: 24,
}

const Colors = {
    primary: '',
    secondary: '#EE3446',
    title: '#F42A2A',
    labelItem: '#F2F2F2',
    barraItem: '#D298FF',
    descricaoBarraItem: '#DFBEF9',
    star: '#763F67',
    background: '#1C0B39',
    grayBoxes: '#cecece',
    label: '#000',
    sortLabel: '#1C0B39'
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: Constants.statusBarHeight,
    },
    modalContainer: {
        width: '80%',
        height: '78%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(19, 11, 16, 0.95)',
        alignSelf: 'center',
        borderRadius: 10,
        paddingTop: 24,
    },
    closeButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: Colors.secondary,
        position: 'absolute',
        top: '-2%',
        right: '-2%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    goBackButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: Colors.secondary,
        position: 'absolute',
        top: '2%',
        left: '2%',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.6
    },
    containerSenhas: {
        flexDirection: 'row', width: '100%', alignItems: 'center', alignSelf: 'center', justifyContent: 'center'
    },
    keyboardAvoidingViewStyle: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center',
        width: '100%',
    },
    input: { backgroundColor: '#F0F0F0' },

    titlePage: {
        fontWeight: '500',
        fontSize: 20,
        textTransform: 'uppercase',
        color: Colors.title,
        textAlign: 'center',
        marginVertical: 24
    },

    labelButton: {
        fontWeight: 'normal',
        fontSize: 16,
        color: Colors.label,
    },
    labelInput: {
        fontSize: 12,
        textTransform: 'capitalize',
        color: Colors.labelItem,
    },
    labelPlaceholder: {
        fontSize: 10,
        textTransform: 'capitalize',
        color: Colors.label,
    },
    labelTitle: {
        fontWeight: '500',
        fontSize: 24,
        textTransform: 'uppercase',
        color: Colors.label
    },
    labelItemName: {
        fontSize: 16,
        color: Colors.title
    },
    labelSortTitle: {
        fontSize: 16,
        color: Colors.sortLabel,
        marginTop: 5,
        fontWeight: '500'
    },
})

export { FontSizes, Colors, Styles }
