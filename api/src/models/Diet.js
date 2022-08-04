const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('diet', {
    //Nombre de la receta
    name: { 
      type: DataTypes.STRING,
      allowNull: false,
    }
});
};