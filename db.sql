CREATE DATABASE vehicle_records;

USE vehicle_records;

CREATE TABLE vehicle_data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    plate_number VARCHAR(20) NOT NULL,
    vehicle_type VARCHAR(50) NOT NULL,
    car_body_color VARCHAR(30),
    plate_color VARCHAR(30),
    vehicle_brand VARCHAR(50),
    functional_car BOOLEAN DEFAULT 0,
    special BOOLEAN DEFAULT 0,
    time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    source VARCHAR(100)
);