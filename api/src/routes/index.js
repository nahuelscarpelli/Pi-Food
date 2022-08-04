const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require ('axios')

const recipe = require('./recipe.js');
const recipes = require('./recipes.js');
const diet = require('./diets.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const gerApiInfo = async () => {
    const apiUrl = await axios.get()
}

module.exports = router;
