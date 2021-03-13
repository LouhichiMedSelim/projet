DROP DATABASE IF EXISTS buss;

CREATE DATABASE IF NOT EXISTS buss;

USE buss;

CREATE TABLE IF NOT EXISTs postbuss(
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  imageUrl varchar(255)  NOT NULL,
  descrption TEXT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE signup(
  id int NOT NULL AUTO_INCREMENT,
  username varchar(255)  ,
  email varchar(255) ,
  password varchar(255) ,
  phoneNumber int (200),
  PRIMARY KEY (id)
);
