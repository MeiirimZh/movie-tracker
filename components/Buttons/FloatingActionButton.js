import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { theme } from "../../src/theme";

export default function FloatingActionsButton({ name, color, bgColor, onPress }) {
    return (
        <TouchableOpacity style={ [styles.main, { backgroundColor: bgColor }] }>
            <Ionicons name={ name } size={ 24 } color={ color } onPress={ onPress } />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    main: {
        justifyContent: 'center',
        alignItems: 'center',

        width: 50,
        height: 50,

        borderRadius: 25,

        elevation: 5,
        shadowColor: theme.colors.shadow,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.12,
        shadowRadius: 10
    }
});