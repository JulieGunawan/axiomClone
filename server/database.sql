CREATE DATABASE axiomclone;

CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(255),
    lastname VARCHAR(255),
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    inPayroll BOOLEAN NOT NULL DEFAULT TRUE, 
    status VARCHAR(255),
    locked BOOLEAN
);