import { StyleSheet, Dimensions, ScaledSize } from 'react-native'

const { width, height }: ScaledSize = Dimensions.get('window');

const base_style = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        borderWidth: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius: 8

    },
    text: {
        color: 'black',
        textAlign: 'center'
    }
})



export default {
    primaryBox: StyleSheet.create({
        ...base_style
    })
}