const { Sequelize, Model, DataTypes } = require('sequelize');

const DISCOUNT_TABLE = 'discounts';

const DiscountSchema = {
  id: {
    type: DataTypes.UUID, // Usamos UUID como tipo de dato para el ID
    defaultValue: Sequelize.UUIDV4, // Genera un UUID automáticamente
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  percentage: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0, // El porcentaje no puede ser negativo
      max: 100, // El porcentaje no puede ser mayor a 100
    },
  },
  start_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  end_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true, // Por defecto, el descuento está activo
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'create_at',
    defaultValue: Sequelize.literal('NOW()'),
  },
};

class Discount extends Model {
  static associate(models) {
    // Un descuento puede aplicarse a varios productos
    this.hasMany(models.Product, {
      as: 'products',
      foreignKey: 'discountId',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: DISCOUNT_TABLE,
      modelName: 'Discount',
      timestamps: false,
    };
  }
}

module.exports = { DISCOUNT_TABLE, Discount, DiscountSchema };
