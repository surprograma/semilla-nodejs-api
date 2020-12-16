# Repositorio base: API NodeJS

## Configuración inicial

```shell
# Levantar y configurar las bases de datos
docker-compose up -d

# Copiar las variables de entorno necesarias para acceder a la DB
cp .env.example .env

# Instalar las dependencias
npm install

# Ejecutar las migraciones para las bases de dev y test
npm run db:init
NODE_ENV=test npm run db:init
```

## Base de datos

```shell
# Ejecutar las migraciones
npm run db:init

# Cargar datos de prueba
npm run db:seed

# Crear una nueva migración
npx sequelize migration:generate --name add-descripcion-to-producto

# Crear un nuevo seed
npx sequelize seed:generate --name edificios
```

## Proyecto

```shell
# Levantar el proyecto, queda monitoreando los cambios
npm start

# Ejecutar los tests
npm test
```
