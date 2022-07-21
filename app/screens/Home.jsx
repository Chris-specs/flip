// Common
import React, { useState } from 'react'
import {
    StyleSheet,
    Text,
    ScrollView,
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
// Hooks
import { useAnime, useApi } from '@hooks'
// Components
import Banner from '@components/Banner'
import AnimeList from '@components/AnimeList'
// Utils
import { seasonInfo } from '@utils'
// Layout
import MainLayout from '@layouts/Main'

const Home = () => {
    const { getAllAnimesReq } = useAnime()

    const { current } = seasonInfo()

    const { data, loading, error } = useApi(() => getAllAnimesReq())
    const trend = data?.data?.data?.trending?.media[0]
    const trending = data?.data?.data?.trending?.media
    const season = data?.data?.data?.season?.media
    const nextSeason = data?.data?.data?.nextSeason?.media
    const popular = data?.data?.data?.popular?.media

    const [scroll, setScroll] = useState(false)

    const handleScroll = (scrolled) => {
        if (scrolled >= 50) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    return (
        <MainLayout scrolled={scroll}>
            <ScrollView style={styles.container} onScroll={(e) => handleScroll(e.nativeEvent.contentOffset.y)} showsVerticalScrollIndicator={false}>
                <StatusBar style='light' />
                <Banner loading={ loading } element={trend} />
                <Text style={styles.sectionTitle}>Trending</Text>
                <AnimeList loading={ loading } data={trending && trending.slice(1)} />
                <Text style={styles.sectionTitle}><Text style={styles.season}>{current()}</Text> season</Text>
                <AnimeList loading={ loading } data={season} />
                <Text style={styles.sectionTitle}>Next season</Text>
                <AnimeList loading={ loading } data={nextSeason} />
                <Text style={styles.sectionTitle}>All time popular</Text>
                <AnimeList loading={ loading } data={popular} />
            </ScrollView>
        </MainLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
    },
    sectionTitle: {
        width: '100%',
        fontSize: 20,
        fontWeight: '700',
        color: '#FFF',
        paddingVertical: 10,
    },
    season: {
        textTransform: 'capitalize'
    }
})

export default Home
