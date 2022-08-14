import React from "react";
import styles from "../css/FilterBar.module.css";
import { filterRecipesByDiet } from "../redux/action";
import { useDispatch } from "react-redux";

export default function Filter() {
  const dispatch = useDispatch();


  function handleFilterValue(e) {
    e.preventDefault(e);
    dispatch(filterRecipesByDiet(e.target.value));
  }

  return (
    <div className={styles.filterDiet}>
      <div>
        <select
          name="filterDiets"
          id="filterDiets"
          onChange={(e) => handleFilterValue(e)}
        >
          <option value="All">View all diets</option>
          <option value="gluten free">Gluten Free</option>
          <option value="ketogenic">Ketogenic</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="lacto ovo vegetarian">Lacto-Ovo-Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="pescatarian">Pescatarian</option>
          <option value="paleolithic">Paleolithic</option>
          <option value="primal">Primal</option>
          <option value="whole 30">Whole 30</option>
          <option value="dairy free">Dairy free</option>
          <option value="fodmap friendly">Fodmap friendly</option>
        </select>
      </div>
    </div>
  );
}
