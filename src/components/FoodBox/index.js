import React from "react"

export function FoodBox(props){
    const comida = props.comida

    return (
        <div className="box">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-128x128">
                        <img src={comida.image} alt="food"/>
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                        <strong>{comida.name}</strong> <br />
                        <small>{comida.calories} cal</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input" value="1" />
                        </div>
                        <div className="control">
                            <button className="button is-info" >
                            +
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
