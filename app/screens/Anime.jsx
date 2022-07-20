// Common
import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
    useWindowDimensions
} from 'react-native'
// Components
import Divider from '@components/shared/Divider'
// Other
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'
import RenderHtml from 'react-native-render-html'
// Layout
import MainLayout from '@layouts/Main'


const Anime = ({ route, navigation }) => {
    const { element } = route.params
    const { width, height } = useWindowDimensions()

    const handlePress = () => {
        navigation.push('Trailer', { id: element?.trailer?.id })
    }

    const html = {
        html: `<p style='color: #FFF'> ${element?.description.replace('(', '').replace(')', '')} </p> `
    }

    const getScoreIcon = (score) => {

        if (score == null) {
            return <FontAwesome5 name='question' size={18} color='#383838' />
        }

        if (score >= 75) {
            return <FontAwesome5 name='smile' size={18} color='#7bd655' />
        } else if (score >= 60) {
            return <FontAwesome5 name='meh' size={18} color='#f49a64' />
        } else {
            return <FontAwesome5 name='angry' size={18} color='#ef5d5d' />
        }
    }

    return (
        <MainLayout>
            <View style={styles.container}>
                <View style={styles.scrollView}>
                    <View style={[{ height: height * 0.6 }, styles.banner]}>
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            colors={['#000000cc', 'transparent']}
                            style={styles.gradientTop}
                        />
                        <LinearGradient
                            start={{ x: 0, y: 1 }}
                            end={{ x: 0, y: 0 }}
                            colors={['#000000', 'transparent']}
                            style={styles.gradient}
                        />
                        <Image
                            source={{ uri: element?.coverImage?.extraLarge }}
                            style={styles.image}
                        />
                        <View style={styles.containerInfo}>
                            <Text style={styles.title}>{element?.title?.english}</Text>
                            <View style={styles.genres}>
                                {element?.genres?.map((genre, i) => (
                                    <View key={i} style={styles.containerGenre}>
                                        {i > 0 ? (
                                            <Divider
                                                color={element?.coverImage?.color}
                                            />
                                        ) : null}
                                        <Text style={styles.genre}>{genre}</Text>
                                    </View>
                                ))}
                            </View>
                        </View>
                    </View>
                    <View style={styles.containerDescription}>
                        <View style={styles.conatainerAnotherInfo}>
                            <View style={styles.containerYear}>
                                <Text style={styles.year}>{ element?.seasonYear }</Text>
                                <Text style={styles.episodes}>{ element?.episodes ?? 'Unknown' } episodes</Text>
                            </View>
                            <View style={styles.containerScore}>
                                <View>{ getScoreIcon(element?.averageScore) }</View><Text style={styles.score}>{ element?.averageScore ?? '' }%</Text>
                            </View>
                        </View>
                        <View style={styles.conatainerStudios}>
                            {
                                element?.studios?.edges?.map((studio, i) => (
                                    <Text key={i} style={[{ color: element?.coverImage?.color }, styles.studio]}>{ studio?.node?.name }</Text>
                                ))
                            }
                        </View>
                        <RenderHtml
                            contentWidth={width}
                            source={html}
                        />
                        <View style={styles.containerAuthor}>
                            <Image source={{ uri: element?.staff?.edges[0]?.node?.image?.large}} style={styles.authorImage} />
                            <View style={styles.containerAuthorInfo}>
                                <View>
                                    <Text style={styles.authorName}>{element?.staff?.edges[0]?.node?.name?.full}</Text>
                                    <Text style={styles.authorOccupation}>{element?.staff?.edges[0]?.node?.primaryOccupations[0]}</Text>
                                </View>
                                <Text style={styles.authorLabel}>{element?.staff?.edges[0]?.role}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.containerButton}>
                    <Pressable style={styles.playButton} onPress={handlePress}>
                        <Ionicons name='play' size={18} style={styles.icon} />
                        <Text style={styles.textButton}>Play trailer</Text>
                    </Pressable>
                </View>
            </View>
        </MainLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center'
    },
    scrollView: {
        width: '100%'
    },
    banner: {
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
        bottom: '0%',
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
    conatainerAnotherInfo: {
        width: '95%',
        maxWidth: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    containerYear: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    year: {
        backgroundColor: '#383838',
        fontSize: 12.5,
        fontWeight: '500',
        color: '#ffffffa1',
        marginRight: 10,
        paddingVertical: 1,
        paddingHorizontal: 5,
        borderRadius: 3,
        overflow: 'hidden'
    },
    episodes: {
        fontSize: 13,
        fontWeight: '600',
        color: '#FFF',
        marginRight: 10
    },
    conatainerStudios: {
        width: '95%',
        maxWidth: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    studio: {
        fontSize: 13,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
        marginRight: 10
    },
    containerButton: {
        width: '100%',
        height: 80,
        backgroundColor: '#000',
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: '5%',
        paddingTop: '2.5%',
        paddingBottom: '5%',
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
    },
    containerDescription: {
        paddingHorizontal: 10,
        paddingBottom: 80,
    },
    containerScore: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    score: {
        fontSize: 13,
        fontWeight: '600',
        color: '#FFF',
        marginLeft: 10
    },
    containerAuthor: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#383838',
        borderRadius: 5,
        overflow: 'hidden',
    },
    authorImage: {
        width: 60,
        height: 80,
    },
    containerAuthorInfo: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    authorName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FFF',
    },
    authorLabel: {
        fontSize: 13,
        color: '#FFF',
    },
    authorOccupation: {
        fontSize: 13,
        color: '#FFF',
    },
})

export default Anime
