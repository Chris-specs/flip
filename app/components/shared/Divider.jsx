// Common
import { View, StyleSheet } from 'react-native'

const Divider = ({ color = '#FFF' }) => {
  return (
    <View style={[ { backgroundColor: color }, styles.container]}></View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: 5,
        height: 5,
        borderRadius: 9999,
        marginHorizontal: 7
    }
})

export default Divider