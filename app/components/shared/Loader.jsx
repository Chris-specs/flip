// Common
import React, { useEffect, useRef } from 'react'
import { StyleSheet, View, Animated } from 'react-native'

const Loader = ({ width = 100, height = 150, borderRadius = 5 }) => {

    const fadeAnim = new Animated.Value(0.3)

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(
                    fadeAnim,
                    {
                        toValue: 0.6,
                        duration: 1000,
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    fadeAnim,
                    {
                        toValue: 0.3,
                        duration: 1000,
                        useNativeDriver: true
                    }
                )
            ])
        ).start()

        return () => {}
    }, [fadeAnim])

    return (
        <>
            <Animated.View style={[ { width, height, borderRadius, opacity: fadeAnim }, styles.container]}></Animated.View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#838383',
        overflow: 'hidden'
    }
})

export default Loader