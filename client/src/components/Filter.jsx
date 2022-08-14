import React from "react";
import styles from '../css/FilterBar.module.css';

export default function Filter() {
    return (
    <div className={styles.filterDiet}>
        <div>
            <select name="filterDiets" id="filterDiets">
                <option value="all-diets">View all diets</option>
                <option value="filter-diets">Filter by diets</option>
            </select>
        </div>
    </div >
    )
}