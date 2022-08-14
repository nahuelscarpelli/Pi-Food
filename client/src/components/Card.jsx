import React from "react";
import {Link} from 'react-router-dom'
import styles from "../css/Card.module.css";

export default function Card({ image, title, diets }) {
  return (
    <div>
      <div className={styles.infocontainer}>
        <div>
          <img className={styles.imgperfil} src={image} alt="RecipeImage" />
        </div>
        <div>
          <h2 className={styles.titlerecipe}>{title}</h2>
        </div>
        <div className={styles.infocardwidth}>
          <p>Diets: </p>
          <span>{diets}</span>
        </div>
        <div className={styles.buttondetail}>
          <Link to='/recipe:id'>More Details</Link>
        </div>
      </div>
    </div>
  );
}
