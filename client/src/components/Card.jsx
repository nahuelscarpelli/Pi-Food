import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/Card.module.css";

export default function Card({ id, image, title, diets }) {
  return (
    <div>
      <div className={styles.infocontainer}>
        <div className={styles.cardclearfix}>
          <div className={styles.cardbody}>
            <h2 className={styles.titlerecipe}>{title}</h2>
            <strong>Diets: </strong><span>{diets}</span>
          </div>
          <div>
            <br />
            <Link className={styles.buttondetail} to={`/recipes/${id}`}>
              Read
            </Link>
          </div>
        </div>
        <div>
          <img className={styles.imgperfil} src={image} alt="RecipeImage" />
        </div>
      </div>
    </div>
  );
}
