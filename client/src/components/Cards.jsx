import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { getAll, orderByName, orderByScore } from "../redux/action";
import Pagination from "./Pagination";
import styles from "../css/Cards.module.css";

export default function Cards() {
  const dispatch = useDispatch();
  const stateOnlyRecipes = useSelector((state) => state.recipes);

  // Seteo Paginado
  const [, setOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [recipepage] = useState(9); // de posición 0 a 8

  const indexOfLast = currentPage * recipepage; // 9
  const indexOfFirst = indexOfLast - recipepage; // 0
  const current = stateOnlyRecipes.slice(indexOfFirst, indexOfLast);

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber); // seteo pagina actual en el numero de pagina
  };
  // Fin

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`);
    console.log(setCurrentPage(1));
  }
  function handleSortScore(e) {
    e.preventDefault();
    dispatch(orderByScore(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`);
  }
  // useEffect emula con una fc de callback component amount

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  return (
    <div>
      <div className={styles.sortby}>
        <select
          name="sortRecipes"
          id="sortRecipes"
          onChange={(e) => handleSort(e)}
        >
          <option value="">Sort elements - Alphabetically</option>
          <option value="sort-a-z">A to Z</option>
          <option value="sort-z-a">Z to A</option>
        </select>
        <select
          name="sortRecipes"
          id="sortRecipes"
          onChange={(e) => handleSortScore(e)}
        >
          <option value="">Sort elements - Health Score</option>
          <option value="sort-health-up">Min- Max</option>
          <option value="sort-health-down">Max- Min</option>
        </select>
      </div>
      <div>
        <Pagination
          recipepage={recipepage}
          stateOnlyRecipes={stateOnlyRecipes.length}
          pagination={pagination}
        />
      </div>
      <div className={styles.cardcontainer}>
        {current.length &&
          current.map((therecipes, i) => (
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
