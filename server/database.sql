CREATE DATABASE axiomclone;

CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    inPayroll BOOLEAN NOT NULL DEFAULT TRUE, 
    status VARCHAR(255),
    locked BOOLEAN
);