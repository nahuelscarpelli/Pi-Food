import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipesByName } from "../redux/action";
import "../css/FilterBar.module.css";

export default function Search() {
  const dispatch = useDispatch();
  const [nameRecipe, setNameRecipe] = useState("");
  

  function handleInput(e) {
    setNameRecipe(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault(e);
       if(nameRecipe){
           dispatch(getRecipesByName(nameRecipe));
          setNameRecipe("");    
    }
  }

  return (
    <React.Fragment>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input
          className="input-search"
          type="text"
          placeholder="Search..."
          value={nameRecipe}
          onChange={(e)=>handleInput(e)}
        />
        <button className="btn-search" type="submit">
          Search
        </button>
      </form>
    </React.Fragment>
  );
}
