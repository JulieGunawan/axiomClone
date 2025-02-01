CREATE DATABASE axiomclone;

CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    inPayroll BOOLEAN,
    status VARCHAR(255),
    locked BOOLEAN
);