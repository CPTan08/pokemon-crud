// simple-pokemon.model.js

"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class SimplePokemon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SimplePokemon.init(
    {
      name: {
        type: DataTypes.STRING,
        // unique:true,
        validate: {
          notEmpty: true, // sequelize validation only, don't allow empty strings
        },
      },
      japaneseName: {
        type: DataTypes.STRING,
      },
      baseHP: {
        type: DataTypes.INTEGER,
      },
      category: {
        type: DataTypes.STRING,
      },
      nameWithJapanese: {
        type: DataTypes.VIRTUAL,
        get() {
          return `${this.name} ${this.japaneseName}`;
        },
        set(value) {
          throw new Error("Do not try to set the `nameWithJapanese` value!");
        },
      },
    },
    {
      sequelize,
      // modelName: "SimplePokemon",
      tableName: "Simple_Pokemon",
      indexes: [
        {
          unique: true,
          fields: ["name"],
        },
      ],
      underscored: true,
    }
  );
  return SimplePokemon;
};
