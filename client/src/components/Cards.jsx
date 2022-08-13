import React, { useEffect } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { obtener } from "../redux/action";

import styles from "../css/Cards.module.css";

export default function Cards() {
  const dispatch = useDispatch();
  const stateOnlyRecipes = useSelector((state) => state.recipes);

  // useEffect emula con una fc de callback component amount

  useEffect(() => {
    dispatch(obtener());
  }, [dispatch]);

  return (
    <div>
      <h2>Henry's Recipes List</h2>
      <div className={styles.cardcontainer}>
        {stateOnlyRecipes.length &&
          stateOnlyRecipes.map((therecipes, i) => (
            <Card
              key={i}
              image={therecipes.image}
              title={therecipes.title}
              score={therecipes.score}
              healthScore={therecipes.healthScore}
              diets={therecipes.diets.join(" · ")}
              summary={therecipes.summary}
              instructions={therecipes.instructions}
            />
          ))}
      </div>
    </div>
  );
}
