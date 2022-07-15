// Common
import React from 'react'
import { StyleSheet, Text, View, Image, Pressable, useWindowDimensions } from 'react-native'
// Hooks
import { useNavigation } from '@react-navigation/native'
// Components
import Divider from './shared/Divider';
// Other
import { LinearGradient } from 'expo-linear-gradient'
import Ionicons from '@expo/vector-icons/Ionicons'

const Banner = ({ element }) => {
    const navigation = useNavigation()
    const { height } = useWindowDimensions()

    const handlePress = () => {
        navigation.push('Trailer', { id: element?.trailer?.id })
    }
    const handlePressAnime = () => {
        navigation.push('Anime', { element: element })
    }

    return (
        <Pressable onPress={handlePressAnime} style={[{ height: height * 0.6 }, styles.container]}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={['#000000cc', 'transparent']} style={styles.gradientTop} />
            <LinearGradient start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} colors={['#000000', 'transparent']} style={styles.gradient} />
                <Image source={{ uri: element?.coverImage?.extraLarge}} style={styles.image} />
            <View style={styles.containerInfo}>
                <Text style={styles.title}>{element?.title?.english}</Text>
                <View style={styles.genres}>
                    {
                        element?.genres?.map((genre, i) => (
                            <View key={i} style={styles.containerGenre}>
                                {
                                    i > 0
                                    ? <Divider color={element?.coverImage?.color} />
                                    : null
                                }
                                <Text style={styles.genre}>{genre}</Text>
                            </View>
                        ))
                    }
                </View>
                <Pressable style={styles.playButton} onPress={handlePress}>
                    <Ionicons name='play'size={18} style={styles.icon}/>
                    <Text style={styles.textButton}>Play trailer</Text>
                </Pressable>
            </View>
        </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        overflow: 'hidden',
    },
    gradientTop: {
        position: 'absolute',
        zIndex: 9,
        left: 0,
        right: 0,
        top: 0,
        height: 100,
    },
    gradient: {
        position: 'absolute',
        zIndex: 9,
        left: 0,
        right: 0,
        bottom: 0,
        height: 200,
    },
    image: {
        width: '100%',
        height: '100%'
    },
    containerInfo: {
        width: '95%',
        position: 'absolute',
        zIndex: 10,
        bottom: '5%',
        paddingLeft: '5%'
    },
    title: {
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FFF',
        marginBottom: 10
    },
    genres: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginBottom: 20
    },
    containerGenre: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    genre: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#FFF'
    },
    playButton: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: '#FFF',
        borderRadius: 10
    },
    icon: {
        marginRight: 10
    },
    textButton: {
        fontSize: 16,
        fontWeight: '600'
    }
})

export default Banner