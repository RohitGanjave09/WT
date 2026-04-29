CREATE DATABASE studentdb;

USE studentdb;

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    age INT,
    course VARCHAR(50)
);

INSERT INTO students (name, age, course) VALUES
('Tahir', 20, 'AIML');

INSERT INTO students (name, age, course) VALUES
('Sahil', 22, 'DS'),
('Navnath', 21, 'CS'),
('Rohit', 23, 'IT');
