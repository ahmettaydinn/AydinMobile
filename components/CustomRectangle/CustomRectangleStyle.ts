import { StyleSheet, Dimensions, ScaledSize } from "react-native";

const { width, height }: ScaledSize = Dimensions.get('window');

const base_style = StyleSheet.create({
    container: {
        width: width * .8,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center'

    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        color : 'black'
    }
})



export default {
    primaryRectangle: {
        ...base_style
    }
}