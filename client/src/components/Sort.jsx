// import { React, useState } from "react";
// import styles from "../css/FilterBar.module.css";
// import { useDispatch } from "react-redux";
// import { orderByName, orderByScore } from "../redux/action";


// export default function Sort() {
//     const dispatch = useDispatch();
//     const [,setOrder] = useState('');
//     const [,setCurrentPage] = useState(1);
   
//     function handleSort(e){
//         e.preventDefault();
//         dispatch(orderByName(e.target.value))
//         setCurrentPage(1);
//         setOrder(`Ordenado ${e.target.value}`)  
//         console.log(setCurrentPage(1))
//     };
//     function handleSortScore(e){
//         e.preventDefault();
//         dispatch(orderByScore(e.target.value))
//         setCurrentPage(1);
//         setOrder(`Ordenado ${e.target.value}`)
//     }
//     return (
//         <div className={styles.sortby}>
//             <select name="sortRecipes" id="sortRecipes" onChange={(e)=>handleSort(e)}>
//                 <option value="">Sort elements - Alphabetically</option>
//                 <option value="sort-a-z">A to Z</option>
//                 <option value="sort-z-a">Z to A</option>
//             </select>
//             <select name="sortRecipes" id="sortRecipes" onChange={(e)=>handleSortScore(e)}>
//                 <option value="">Sort elements - Health Score</option>
//                 <option value="sort-health-up">Min- Max</option>
//                 <option value="sort-health-down">Max- Min</option>
//             </select>
//         </div>
//     )
// }

