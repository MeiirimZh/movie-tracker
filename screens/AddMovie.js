import { useState } from "react";
import { StyleSheet, View, Text, TextInput, Alert, TouchableOpacity } from "react-native";
import { useSQLiteContext } from "expo-sqlite";

import { useWindowDimensions } from "react-native";

import { INSERT } from "../src/database/queries/MoviesQueries";

import { theme } from "../src/theme";

export default function AddMovie({ navigation }) {
    const { width, height } = useWindowDimensions();

    const [ form, setForm ] = useState({
        title: '',
        description: ''
    });

    const db = useSQLiteContext();

    const handleSubmit = async () => {
        try {
            if (!form.title || !form.description) {
                throw new Error('Не все поля заполнены');
            }

            await db.runAsync(INSERT, [
                form.title,
                form.description
            ]);

            Alert.alert('Успешно', 'Фильм был добавлен');
            setForm({
                title: '',
                description: ''
            });

            navigation.navigate("MoviesList");
        }
        catch (error) {
            console.error(error);
        }
    }

    return (
        <View style={ styles.main }>
            <Text style={{ fontSize: 16, color: theme.colors.text }}>Добавить фильм</Text>
            <TextInput
                style={ [styles.textInput, { width: width - theme.spacing.md * 10 }] }
                placeholder="Введите название"
                value={ form.title }
                onChangeText={(text) => setForm({ ...form, title: text })} />
            <TextInput
                style={ [styles.textInput, { width: width - theme.spacing.md * 10 }] }
                placeholder="Введите описание"
                value={ form.description }
                onChangeText={(text) => setForm({ ...form, description: text })} />
            <TouchableOpacity 
                onPress={ handleSubmit }
                style={ [styles.button, { width: width - theme.spacing.md * 24 }] } >
                <Text style={{ color: theme.colors.onPrimary }}>ДОБАВИТЬ</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: theme.spacing.md,

        padding: theme.spacing.md
    },
    textInput: {
        borderRadius: 10,

        elevation: 5,

        backgroundColor: theme.colors.bgLight
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: 10,

        elevation: 5,

        backgroundColor: theme.colors.primary,
        
        padding: theme.spacing.md
    }
});