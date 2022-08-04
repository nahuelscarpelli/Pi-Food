const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    //Nombre de la receta
    name: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    //resumen de la receta
    summary: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    //Ranking
    score: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    //Nivel de "comida saludable"
    healthScore:{ 
      type: DataTypes.FLOAT,
      allowNull: false,
    // imágen de la comida
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // pasos de receta
    steps: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    // identificar que es de DB y que es de API
    createInDb:{ 
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },

  });
};
