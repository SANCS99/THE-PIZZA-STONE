
import React from "react";
import Pizza from '../components/Pizza'
import pizzas from '../pizzadata'
export default function Homescreen(){
    return(
        <div>
            <div className="row">
                {pizzas.map(pizza=>{
                    return <div className="col-md-4 p-3">
                        <div>
                            <Pizza pizza={pizza}/>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}