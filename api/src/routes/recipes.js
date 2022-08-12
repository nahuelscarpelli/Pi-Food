const { Router } = require('express');
const router = Router();

const { getRecipes, getRecipeById, createRecipe } = require('../controllers/recipe.controller.js');

router.get('/', getRecipes);
router.get('/:idReceta', getRecipeById);
router.post('/', createRecipe);

module.exports = router;