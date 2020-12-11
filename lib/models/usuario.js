import { Model, DataTypes } from 'sequelize';

export default class Usuario extends Model {
  static init(sequelize) {
    return super.init(
      {
        nombre: DataTypes.STRING
      },
      {
        sequelize,
        modelName: 'Usuario'
      }
    );
  }
}
