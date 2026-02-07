import { createStackNavigator } from "@react-navigation/stack";

import MoviesList from "./MoviesList";
import ViewMovie from "./ViewMovie";
import AddMovie from "./AddMovie";

const Stack = createStackNavigator();

export default function Movies() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="MoviesList" component={ MoviesList } options={{ title: 'Фильмы' }} />
            <Stack.Screen name="ViewMovie" component={ ViewMovie } />
            <Stack.Screen name="AddMovie" component={ AddMovie } options={{ title: 'Добавить фильм' }} />
        </Stack.Navigator>
    )
}