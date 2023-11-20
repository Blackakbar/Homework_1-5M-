import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function MainPage() {
    const number = useSelector(state => state.number)

    const dispatch = useDispatch()

    const countNumberUp = () => {
        dispatch({
            type: 'COUNT_NUMBER_UP'
        })
    }

    const countNumberDown = () => {
        dispatch({
            type: 'COUNT_NUMBER_DOWN'
        })
    }

    return(
        <div className="container">
            <h1>{number}</h1>
            <div className="btn-container">
                <button className="btn" onClick={countNumberUp}>+</button>
                <button className="btn" onClick={countNumberDown}>-</button>
            </div>
        </div>
    )
}