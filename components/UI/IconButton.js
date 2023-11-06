import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons'

function IconButton ({ onPress, color, size, icon}) {
    return (
        <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
            <View style={styles.buttonContainer}>
                <Ionicons name={icon} color={color} size={size} />
            </View>
        </Pressable>
    )
}

export default IconButton;

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 32,
        padding: 8,
        marginHorizontal: 6,
        marginVertical: 4,
    },
    pressed: {
        opacity: 0.65,
    }
})