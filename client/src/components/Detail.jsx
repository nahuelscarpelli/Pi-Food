import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/Detail.module.css'

export default function Detail({ image, title, diet, instructions , healthScore, score }) {

    return (
        <div>
            <div className={styles.infocontainer}>
                <div><img className={styles.imgperfil} src={image} alt='recipeimage' /></div>
                <div><h2 className={styles.titlerecipe}>{title}</h2></div>
                <div className={styles.infocardwidth}>
                    <p>Diet: </p>
                    <span>{diet}</span>
                    <p>Score: {score}</p>
                    <p>Health Score: {healthScore}</p>
                </div>
                <div><h3>Steps: {instructions}</h3></div>
                <Link to='/home'><span>Back</span></Link>
            </div>
        </div>
    )
}