export const CREATE_TABE = `
    CREATE TABLE IF NOT EXISTS movies (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT
    );
`;

export const INSERT = `
    INSERT INTO movies (title, description) VALUES
    (?, ?);
`;

export const DROP_TABLE = `
    DROP TABLE IF EXISTS movies;
`;