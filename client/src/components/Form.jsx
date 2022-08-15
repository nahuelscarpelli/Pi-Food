import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postRecipe, getdiets } from '../redux/action'
import styles from '../css/Form.module.css'

export default function Form() {
    const dispatch = useDispatch();
    const diets = useSelector((state) => state.diets);

    const [input, setInput] = useState({
        title: "",
        sumary: "",
        healthScore: "",
        instructions: "",
        diets: []
    })

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function handleSelect(e) {
        setInput({
            ...input,
            diets: [...input.diets, e.target.value]
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(input)
        dispatch(postRecipe(input))
        alert("Created suscessfully")
        setInput({
            title: "",
            sumary: "",
            healthScore: "",
            instructions: "",
            diets: []
        })
    }

    useEffect(() => {
        dispatch(getdiets());
    },)

    return (
        <div className={styles.createform}>
            <h2>Complete the form to add a new breed of dog</h2>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div className={styles.inputformcreate}>
                    <input type="text" placeholder='Title' value={input.title} name='title' onChange={(e)=>handleChange(e)}/>
                </div>
                <div>
                    <div className={styles.inputformcreate}>
                        <input type="text" placeholder='Sumary' value={input.sumary} name='sumary' onChange={(e)=>handleChange(e)}/>
                    </div>
                </div>
                <div>
                    <div className={styles.inputformcreate}>
                        <input type="number" placeholder='healthScore' value={input.healthScore} name='healthScore' onChange={(e)=>handleChange(e)}/>
                    </div>
                </div>
                <div className={styles.inputformcreate}>
                    <input type="text" placeholder='instructions' value={input.instructions} name='instructions' onChange={(e)=>handleChange(e)}/>
                </div>
                <div className={styles.inputformcreate}>
                    <select onChange={(e) => handleSelect(e)}>
                        <option disabled selected>Select diets</option>
                        {diets.map((tem) => {
                            <option value={tem.name}>{tem.name}</option>
                        })}
                    </select>
                </div>
                <div>
                    <button type='submit'>Create Recipe</button>
                </div>
            </form>
            <Link to='/home'><p>Back</p></Link>
        </div>
    )
}