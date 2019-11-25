CREATE TABLE schedules (
    id INT NOT NULL AUTO_INCREMENT,
    date DATETIME NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    location TEXT,
    PRIMARY KEY (id)
);