import { SQLiteProvider } from "expo-sqlite";
import * as MoviesQueries from "./src/database/queries/MoviesQueries";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Movies from "./screens/Movies";
import Series from "./screens/Series";
import Books from "./screens/Books";
import Games from "./screens/Games";

import { Ionicons } from "@expo/vector-icons";
import { theme } from "./src/theme";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SQLiteProvider
      databaseName="local.db"
      onInit={async (db) => {
          await db.execAsync(MoviesQueries.DROP_TABLE);
          await db.execAsync(MoviesQueries.CREATE_TABE);
      }}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            const icons = {
              Movies: focused ? 'film' : 'film-outline',
              Series: focused ? 'tv' : 'tv-outline',
              Books: focused ? 'book' : 'book-outline',
              Games: focused ? 'game-controller' : 'game-controller-outline'
            };

            return (
              <Ionicons name={ icons[route.name] } color={ color } size={ size } />
            )
          },
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.textMuted,
          tabBarStyle: { height: 100 },

          headerShown: false
        })}>
          <Tab.Screen name="Movies" component={ Movies } options={{ title: 'Фильмы' }} />
          <Tab.Screen name="Series" component={ Series } options={{ title: 'Сериалы' }} />
          <Tab.Screen name="Books" component={ Books } options={{ title: 'Книги' }} />
          <Tab.Screen name="Games" component={ Games } options={{ title: 'Игры' }} />
        </Tab.Navigator>
      </NavigationContainer>
    </SQLiteProvider>
  )
}