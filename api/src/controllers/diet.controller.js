const { Diet } = require("../db.js");
const axios = require("axios");
const { YOUR_API_KEY, URL } = process.env;

let diets = [
  {
    name: "gluten free",
  },
  {
    name: "ketogenic",
  },
  {
    name: "vegetarian",
  },
  {
    name: "lacto ovo vegetarian",
  },
  {
    name: "vegan",
  },
  {
    name: "pescatarian",
  },
  {
    name: "paleolithic",
  },
  {
    name: "primal",
  },
  {
    name: "whole 30",
  },
  {
    name: "dairy free",
  },
  {
    name: "fodmap friendly",
  },
];

function getDiets(req, res, next) {
  //     const resAxios = await axios.get(`${URL}/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=100`);
  //     const { results } = resAxios.data ;
  //     if (results.length > 0) {
  //         let diets = await results?.map((result) => {
  //             return {
  //                 diets: result.diets?.map(element => element),
  //             }
  //         })
  //     return response;
  // }

  Diet.findAll()
    .then((response) => {
      if (response.length > 0) {
        return res.json(response).status(200);
      } else {
        Diet.bulkCreate(diets)
          .then((response) => {
            return res.json(response);
          })
          .catch((error) => next(error));
      }
    })
    .catch((error) => next(error));
}

module.exports = {
  getDiets,
};
