-- CREATE DATABASE [put db name here]

CREATE TABLE meals(
    meal_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    meat_type VARCHAR(255) NOT NULL,
    last_had DATE
);

CREATE TABLE meal_plan(
    meal_id INT REFERENCES meals(meal_id)
);