import { StyleSheet, View, Text } from "react-native";
import { useWindowDimensions } from "react-native";

import { theme } from "../src/theme";

export default function MovieCard({ title, description }) {
    const { width, height } = useWindowDimensions();

    return (
        <View style={ styles.main }>
            <Text>{ title }</Text>
            <Text>{ description }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: theme.colors.bgLight,

        borderRadius: 10,

        padding: theme.spacing.md
    }
});