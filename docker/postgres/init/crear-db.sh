#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
  CREATE USER desarrollo WITH PASSWORD 'secreto1234';

  CREATE DATABASE nodejs_api_dev;
  GRANT ALL PRIVILEGES ON DATABASE nodejs_api_dev TO desarrollo;

  CREATE DATABASE nodejs_api_test;
  GRANT ALL PRIVILEGES ON DATABASE nodejs_api_test TO desarrollo;
EOSQL
