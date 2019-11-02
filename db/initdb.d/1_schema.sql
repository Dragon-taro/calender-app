CREATE TABLE schedules (
    id INT NOT NULL AUTO_INCREMENT,
    startAt DATETIME NOT NULL,
    endAt DATETIME NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    PRIMARY KEY (id)
);