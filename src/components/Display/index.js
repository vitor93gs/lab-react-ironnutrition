import { FoodBox } from "../FoodBox";
import React from "react";

export function Display(props){
    return(
            <ul>
                {props.arr.map((current) =>{
                    return(
                        <li>
                        <FoodBox comida={current}/>
                        </li>
                    )
                })
                }
            </ul>
    )
}