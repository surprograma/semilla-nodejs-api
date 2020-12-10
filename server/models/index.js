import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import Configs from '../config/config';

const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';
const config = Configs[env];

function initSequelize() {
  return config.use_env_variable
    ? new Sequelize(process.env[config.use_env_variable])
    : new Sequelize(config.database, config.username, config.password, config);
}

const sequelize = initSequelize();

const db = {};

fs.readdirSync(__dirname)
  .filter((file) => (
    file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  ))
  .forEach((file) => {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const model = require(path.join(__dirname, file)).default;
    model.init(sequelize);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
