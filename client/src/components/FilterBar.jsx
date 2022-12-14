import React from 'react';
import styles from '../css/FilterBar.module.css';
import Search from './Search.jsx';
import FilterDiet from './Filter.jsx'

export default function FilterBar({ onSearch }) {
    return (
        <div className={styles.filterbar}>
            <h2 className={styles.filterbar}>Henry's Recipes List</h2>
            <div>
                <Search />
            </div>
            <div>
                <FilterDiet />
            </div>
        </div>
    )
}