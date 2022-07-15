// Common
import React from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
// Hooks
import { useNavigation } from '@react-navigation/native'

const AnimeListItem = ({ item }) => {
    const navigation = useNavigation()

    const handlePress = () => {
        navigation.push('Anime', { element: item })
    }
    
    return (
        <Pressable onPress={handlePress} style={styles.container}>
            <Image source={{ uri: item.coverImage.extraLarge}} style={styles.image} />
            {/* <Text>{item.title.english}</Text> */}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 150,
        borderRadius: 5,
        overflow: 'hidden'
    },
    image: {
        width: 100,
        height: 150
    }
})

export default AnimeListItem
