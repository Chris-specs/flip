// Common
import React from 'react'
import { StyleSheet, View, Image, Pressable } from 'react-native'
// Hooks
import { useNavigation } from '@react-navigation/native'

const MainLayout = ({ children, scrolled = false }) => {

    const navigation = useNavigation()

    const handlePress = () => {
        navigation.navigate('Home')
    }

    return (
        <>
            <View style={styles.container}>
                <View style={[ { backgroundColor: scrolled ? '#00000085' : 'transparent' }, styles.header]}>
                    <Pressable onPress={handlePress}>
                        <Image source={ require('../../assets/icon.png') } style={styles.logo} />
                    </Pressable>
                </View>
                { children }
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        position: 'relative',
        flex: 1
    },
    header: {
        width: '100%',
        paddingTop: 35,
        paddingBottom: 15,
        paddingHorizontal: 20,
        position: 'absolute',
        zIndex: 10
    },
    logo: {
        width: 50,
        height: 50
    }
})

export default MainLayout