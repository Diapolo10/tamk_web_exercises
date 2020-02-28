CREATE TABLE weather (
 id SERIAL PRIMARY KEY,
 device_id VARCHAR(100),
 date_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 data JSONB
);

CREATE INDEX date_time_indx ON weather (date_time);
