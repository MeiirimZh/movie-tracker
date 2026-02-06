import { SQLiteProvider } from "expo-sqlite";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Movies from "./screens/Movies";
import Series from "./screens/Series";
import Books from "./screens/Books";
import Games from "./screens/Games";

import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SQLiteProvider
      databaseName="local.db"
      onInit={async (db) => {
        
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
          }
        })}>
          <Tab.Screen name="Movies" component={ Movies } />
          <Tab.Screen name="Series" component={ Series } />
          <Tab.Screen name="Books" component={ Books } />
          <Tab.Screen name="Games" component={ Games } />
        </Tab.Navigator>
      </NavigationContainer>
    </SQLiteProvider>
  )
}