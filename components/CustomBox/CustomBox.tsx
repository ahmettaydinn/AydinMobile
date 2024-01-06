import { View, Text } from 'react-native'
import React from 'react'

import styles from './CustomBoxStyle'

type Props = {
    title: string,
    boxColor?: string
}

const CustomBox = ({ title, boxColor }: Props) => {
    return (
        <>
            <View style={[styles.primaryBox.container, { backgroundColor: boxColor }]}>
                <Text style={styles.primaryBox.text}>{title}</Text>
            </View>
        </>
    )
}

export default CustomBox