import { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useSQLiteContext } from "expo-sqlite";

const useMovies = () => {
    const [ movies, setMovies ] = useState([]);
    const db = useSQLiteContext();

    const loadMovies = async () => {
        try {
            const results = await db.getAllAsync("SELECT * FROM movies ORDER BY id;");
            setMovies(results);
        }
        catch (error) {
            console.log("Database error: ", error);
        }
    };

    useFocusEffect(
        useCallback(() => {
            loadMovies();
        }, [])
    );

    return { movies, setMovies };
};

export default useMovies;