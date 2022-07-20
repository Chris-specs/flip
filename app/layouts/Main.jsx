// Common
import React, { useEffect, useState } from 'react'
import { StyleSheet, ScrollView, View, Image } from 'react-native'

const MainLayout = ({ children }) => {

    const [scrolled, setScrolled] = useState(false)

    const handleScroll = (scrolled) => {
        if (scrolled >= 50) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }

    return (
        <>
            <View style={styles.container}>
                <View style={[ { backgroundColor: scrolled ? '#00000085' : 'transparent' }, styles.header]}>
                    <Image source={ require('../../assets/icon.png') } style={styles.logo} />
                </View>
                <ScrollView onScroll={(e) => handleScroll(e.nativeEvent.contentOffset.y)} showsVerticalScrollIndicator={false}>
                    { children }
                </ScrollView>
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