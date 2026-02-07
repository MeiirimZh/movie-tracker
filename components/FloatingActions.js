import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { theme } from "../src/theme";

export default function FloatingActions({ children }) {
    const insets = useSafeAreaInsets();

    return (
        <View style={ [styles.main, { bottom: insets.bottom }] } >
            { children }
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: theme.spacing.md,
        
        position: 'absolute',
        right: theme.spacing.md,
    }
});