import { Sequelize } from "sequelize";
import db from '../db.js';

export default db.define('book',{
  id:{
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  titulo:{
    type: Sequelize.STRING,
    allowNull: false
  },
  autor:{
    type: Sequelize.STRING,
    allowNull: false
  },
  genero:{
    type: Sequelize.STRING,
    allowNull: false
  },
  ano:{
    //TODO pensar no melhor tipo de dado
  },
  disponivel:{
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
});