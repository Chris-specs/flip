// Common
import React, { useMemo } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
// Components
import AnimeListItem from './AnimeListItem'

const AnimeList = ({ data }) => {

    // const memoData = useMemo(() => renderItem, [data])

    const renderItem = ({ item }) => <AnimeListItem item={item} />

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            showsHorizontalScrollIndicator={false}
        />
    )
}

const styles = StyleSheet.create({
    separator: {
        width: 10
    }
})

export default AnimeList
