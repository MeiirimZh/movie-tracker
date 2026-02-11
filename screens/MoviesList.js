import useMovies from "../src/hooks/useMovies";

import { StyleSheet, View, FlatList, Text } from "react-native";

import FloatingActions from "../components/FloatingActions";
import FloatingActionsButton from "../components/Buttons/FloatingActionButton";

import MovieCard from "../components/MovieCard";

import { theme } from "../src/theme";

export default function MoviesList({ navigation }) {
    const { movies } = useMovies();

    return (
        <View style={ styles.main }>
            <FlatList
                data={ movies }
                renderItem={({ item }) => (
                    <MovieCard title={ item.title } description={ item.description } />
                )}
                ItemSeparatorComponent={() => (
                    <View style={{ height: theme.spacing.md }} />
                )} />

            <FloatingActions>
                <FloatingActionsButton name="add"
                color={ theme.colors.onPrimary } bgColor={ theme.colors.primary }
                onPress={() => navigation.navigate("AddMovie")} />
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