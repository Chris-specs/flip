// Common
import React, { useState } from 'react'
import {
    StyleSheet,
    View,
    Pressable,
    Text,
} from 'react-native'
// Other
import YoutubePlayer from 'react-native-youtube-iframe'
import Ionicons from '@expo/vector-icons/Ionicons'
import LottieView from 'lottie-react-native'
import MainLayout from '@layouts/Main'

const Trailer = ({ route, navigation }) => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    return (
        <MainLayout>
            <View style={styles.container}>
                {
                    loading
                    ?   <View style={styles.lottieContainer}>
                            <LottieView
                                source={require('../assets/lottie/loader.json')}
                                autoPlay
                                loop
                                style={styles.lottie}
                            />
                        </View>
                    :   null
                }
                {
                    error
                    ?   <View style={styles.lottieContainer}>
                            <LottieView
                                source={require('../assets/lottie/error.json')}
                                autoPlay
                                loop
                                style={styles.lottie}
                            />
                            <Text style={styles.errorText}>Sorry!, this trailer isn't available in this moment</Text>
                        </View>
                    :   <YoutubePlayer
                            videoId={route.params.id}
                            height={300}
                            onReady={() => setLoading(false)}
                            onError={(e) => setError(true)}
                            play
                        />
                }
                <View style={styles.containerButton}>
                    <Pressable style={styles.button} onPress={() => navigation.goBack()}>
                        <Ionicons name='close-circle-outline'size={45} style={styles.icon}/>
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
        justifyContent: 'center'
    },
    lottieContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#000'

    },
    lottie: {
        width: 200,
        height: 200,
    },
    errorText: {
        color: '#FFF',
        fontWeight: '600',
        paddingTop: 20,
    },
    containerButton: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        bottom: '10%'
    },
    button: {
        width: 45,
        height: 45,
    },
    icon: {
        color: '#FFF'
    }
})

export default Trailer
