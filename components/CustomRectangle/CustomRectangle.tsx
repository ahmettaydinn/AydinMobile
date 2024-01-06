import { View, Text } from 'react-native'
import React from 'react'

import styles from './CustomRectangleStyle'

type Props = {
    title: string,
    bgColor: string
}

const CustomRectangle = ({ title, bgColor }: Props) => {
    return (
        <>
            <View style={[styles.primaryRectangle.container, { backgroundColor: bgColor }]}>
                <Text style = {styles.primaryRectangle.text}>{title}</Text>
            </View>
        </>
    )
}

export default CustomRectangle