import React from "react";

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
          <h4>More Details</h4>
        </div>
      </div>
    </div>
  );
}
