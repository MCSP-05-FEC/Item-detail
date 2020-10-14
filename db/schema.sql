-- ATTN WINDOWS USERS: Some of you might have an easier time just copying and pasting the lines below in to your mysql shell

-- YOUR CODE GOES HERE
DROP DATABASE IF EXISTS fec;

CREATE DATABASE fec;
-- CREATE TABLE users(
--     id serial PRIMARY KEY,
--     name text
-- );

CREATE TABLE item(
    id serial PRIMARY KEY,
    name text,
    price text
);
    


\c fec ;

