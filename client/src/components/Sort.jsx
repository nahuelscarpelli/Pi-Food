import React from "react";
import styles from "../css/FilterBar.module.css";

export default function Sort() {
    return (
        <div className={styles.sortby}>
            <select name="sortRecipes" id="sortRecipes">
                <option value="sort-a-z">Sort elements by A to Z</option>
                <option value="sort-z-a">Sort elements by Z to A</option>
                <option value="sort-health">Sort elements by Health Score</option>
            </select>
        </div>
    )
}

