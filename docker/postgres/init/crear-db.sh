#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE USER unahur_covid_dev WITH PASSWORD 'coronavirus';
    CREATE DATABASE unahur_covid_dev;
    GRANT ALL PRIVILEGES ON DATABASE unahur_covid_dev TO unahur_covid_dev;
EOSQL
