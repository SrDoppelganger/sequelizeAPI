import { Sequelize } from "sequelize";
import db from '../db.js';

export default db.define('client',{
  id:{
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  nome:{
    type: Sequelize.STRING,
    allowNull: false
  },
  email:{
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  endereco:[{
    rua:{ 
      type: Sequelize.STRING,
      allowNull: false
    },
    numero:{
      type: Sequelize.INTEGER
    },
    bairro:{
      type: Sequelize.STRING,
      allowNull: false
    },
    complemento:{
      type: Sequelize.STRING
    }
  }],
  telefone:{
    type: Sequelize.STRING,
    allowNull: false
  },
  CPF:{
    type: Sequelize.STRING(11),
    allowNull: false,
    unique: true
  }
})