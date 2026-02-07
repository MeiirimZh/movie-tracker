import { StyleSheet, View } from "react-native";

import FloatingActions from "../components/FloatingActions";
import FloatingActionsButton from "../components/Buttons/FloatingActionButton";

import { theme } from "../src/theme";

export default function MoviesList() {
    return (
        <View style={ styles.main }>
            <FloatingActions>
                <FloatingActionsButton name="add"
                color={ theme.colors.onPrimary } bgColor={ theme.colors.primary }
                onPress={() => console.log("Pressed")} />
            </FloatingActions>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: theme.spacing.md
    } 
});