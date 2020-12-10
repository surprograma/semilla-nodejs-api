import { Model, DataTypes } from 'sequelize';

export default class User extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: DataTypes.STRING
      },
      {
        sequelize,
        modelName: 'user'
      }
    );
  }
}
