// Common
import React, { useMemo } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
// Components
import AnimeListItem from './AnimeListItem'
import Loader from './shared/Loader'

const AnimeList = ({ data, loading }) => {

    // const memoData = useMemo(() => renderItem, [data])

    const loaders = Array(10).fill(0)

    const renderItem = ({ item }) => loading ? <Loader /> : <AnimeListItem item={item} />

    return (
        <>
            <FlatList
                data={ loading ? loaders : data}
                renderItem={renderItem}
                keyExtractor={(item, i) => i}
                horizontal
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                showsHorizontalScrollIndicator={false}
            />
        </>
    )
}

const styles = StyleSheet.create({
    separator: {
        width: 10
    }
})

export default AnimeList
