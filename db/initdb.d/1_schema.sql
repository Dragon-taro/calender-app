CREATE TABLE schedules (
    id INT NOT NULL AUTO_INCREMENT,
    start_at DATETIME NOT NULL,
    end_at DATETIME NOT NULL,
    title TEXT NOT NULL,
    content TEXT,
    PRIMARY KEY (id)
);