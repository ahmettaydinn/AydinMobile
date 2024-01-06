import { Dimensions, ScaledSize, StyleSheet } from 'react-native'


const { width, height }: ScaledSize = Dimensions.get('window');
const base_style = StyleSheet.create({
    button: {
        width: width * .8,
        height: 50,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#9DFF7A',
        marginHorizontal: 10,
        borderRadius: 10,
    },
    text: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 26,
        textAlign: 'center'
    }
})


export default {
    primaryButton: StyleSheet.create({
        ...base_style
    }),
    secondaryButton: StyleSheet.create({
        ...base_style,
        button: {
            ...base_style.button,
            backgroundColor: 'white',
            borderWidth: 2

        },
        text: {
            ...base_style.text,
        }
    })
}