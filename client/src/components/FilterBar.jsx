import React from 'react';
import styles from '../css/FilterBar.module.css';
import Search from './Search.jsx';
import SortBy from './Sort.jsx'
import FilterDiet from './Filter.jsx'

export default function FilterBar({ onSearch }) {
    return (
        <div className={styles.filterbar}>
            <div>
                <Search />
            </div>
            <div>
                <FilterDiet />
            </div>
            <div>
                <SortBy />
            </div>
        </div>
    )
}