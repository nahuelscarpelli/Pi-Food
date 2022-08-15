import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../css/Detail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../redux/action";

export default function Detail(props) {
  const dispatch = useDispatch();
  const recipedetail = useSelector((state) => state.details) || [];

  useEffect(() => {
    dispatch(getDetail(props.match.params.id))
}, [dispatch])

  return (
    <div>
      <div className={styles.infocontainer}>
        <div>
          <img
            className={styles.imgperfil}
            src={recipedetail.image}
            alt="recipeimage"
          />
        </div>
        <div>
          <h2 className={styles.titlerecipe}>{recipedetail.title}</h2>
        </div>
        <div className={styles.infocardwidth}>
          <p>Diet: </p>
          <span>{recipedetail.diets}</span>
          <p>Summary: {recipedetail.summary}</p>
          <p>Dish Types: {recipedetail.dishTypes}</p>
          <p>Health Score: {recipedetail.healthScore}</p>
        </div>
        <div>
          <h3>Steps: {recipedetail.instructions}</h3>
        </div>
        <Link to="/home">
          <span>Back</span>
        </Link>
      </div>
    </div>
  );
}
