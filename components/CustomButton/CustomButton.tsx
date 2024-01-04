import { View, Text, Pressable } from 'react-native'
import React from 'react'

import styles from './CustomButtonStyle'

type Props = {
    title: string,
    onPress: () => void;
    disabled: boolean | null | undefined,
    theme: 'primaryButton' | 'secondaryButton'

}

const CustomButton = ({ onPress, title, disabled = false, theme }: Props) => {
    return (
        <>
            <Pressable disabled={disabled} style={[styles[theme].button, { backgroundColor: disabled ? 'gray' : styles[theme].button.backgroundColor }]} onPress={onPress}>
                <Text style={styles.primaryButton.text}>{title}</Text>
            </Pressable>
        </>
    )
}

export default CustomButton