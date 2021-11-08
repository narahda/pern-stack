CREATE DATABASE people;


CREATE TABLE users(
    id uuid DEFAULT uuid_generate_v4() ,
    username VARCHAR(255) NOT NULL ,
    pwd VARCHAR(255) NOT NULL 

);

CREATE TABLE links (
    link_name VARCHAR(50) NOT NULL,
    address VARCHAR(50) NOT NULL
);