import { useState, useEffect } from "react";
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

    useEffect(() => {
        loadMovies();
    }, []);

    return { movies, setMovies };
};

export default useMovies;