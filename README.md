# Repositorio semilla: API NodeJS

¡Bienvenidx! En este repositorio encontrarás una plantilla (de las infinitas posibles) para crear una API utilizando NodeJS. Las principales tecnologías que utilizamos son:

- [NodeJS](https://nodejs.org/es/): entorno de ejecución para JavaScript.
- [ExpressJS](https://expressjs.com/): framework para crear aplicaciones web.
- [Sequelize](https://sequelize.org/master/): ORM (object-relational mapping) para interactuar con una base SQL desde objetos JavaScript.
- [PostgreSQL](https://www.postgresql.org/): base de datos SQL.
- [Jest](https://jestjs.io/): framework para escribir tests.

## Prerrequisitos - para instalar antes de empezar

Vas a necesitar un IDE o al menos un editor de texto que coloree la sintaxis. Recomendamos utilizar [Visual Studio Code](https://code.visualstudio.com/) - que se lleva muy bien con proyectos JavaScript - enriquecido con los siguientes plugins:

- [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Test explorer](https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-test-explorer)
- [Jest test adapter](https://marketplace.visualstudio.com/items?itemName=kavod-io.vscode-jest-test-adapter)

Para ejecutar el código es necesario tener instalado NodeJS en su versión 14 (lts/fermium). Para esto recomendamos utilizar el manejador de versiones [`nvm`](https://github.com/nvm-sh/nvm), aunque también podés instalarlo manualmente siguiendo las instrucciones adecuadas para tu sistema operativo.

Por último, se incluye un archivo de [Docker Compose](https://docs.docker.com/compose/) con todo lo necesario para instalar y configurar las bases de datos en PostgreSQL (una para desarrollo y otra para test). Si por algún motivo no querés usar Docker, vas a tener que instalar PostgreSQL y ejecutar el script `docker/init/crear-db.sh` en tu entorno.

## Configuración inicial del proyecto

Asumiendo que ya configuraste todos los prerrequisitos, y que vas a utilizar Docker, estos son los comandos que deberías ejecutar la primera vez que trabajes en el proyecto:

```shell
# Instala, configura y levanta las bases de datos.
# El flag -d (daemon) hace que la ejecución continue incluso luego de reiniciar la máquina.
docker-compose up -d

# Copia las variables de entorno necesarias para acceder a las bases de datos.
cp .env.example .env

# Instala las dependencias Node del proyecto.
npm install

# Ejecuta las migraciones iniciales para las bases de dev y test.
npm run db:init
NODE_ENV=test npm run db:init
```

De manera opcional, también podés cargar unos datos de prueba que vienen incluido en el proyecto. A medida que el desarrollo continue, se podrían seguir agregando datos que ayuden en las pruebas manuales. Ejecutar este comando:

```shell
# (Opcional) Carga los datos de prueba en la base de desarrollo.
npm run db:seed
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
