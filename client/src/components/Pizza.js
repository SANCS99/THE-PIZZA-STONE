import React ,{useState} from "react";

export default function Pizza({pizza}) {
const[quantity, setquantity]=useState(1)
const[varient, setvarient]=useState('small')

    return(
        <div style={{margin:"100px"}}className="shadow-lg p-3 mb-5 bg-white rounded">
            <h4>{pizza.name}</h4>
            <img src={pizza.image} className="img-fluid" style={{height:'200px' , width:'200px'}}/>

                    <div className="flix-container">
                        <div className="w-100 m-1">
                            <p>Varients</p>
                            <select className="form-control" value ={varient} onChange={(e)=>{setvarient(e.target.value)}}>
                                {pizza.varients.map(varient=>{
                                    return<option value={varient}>{varient}</option>
                                })}
                            </select>
                        </div>

                        <div className="w-100 m-1">
                            <p>Quantity</p>
                                <select className="form-control" value ={quantity} onChange={(e)=>{setquantity(e.target.value)}}>
                                  {[...Array(10).keys()].map((x ,i)=>{

                                        return <option value={i+1}>{i+1}</option>
                                  })}  
                                </select>
                         </div>
                    </div>              
                        
                                  <div className="flix-container">
                                        <div className="m-1 w-100">
                                            <h5>Price : {pizza.prices[0][varient] * quantity}</h5>
                                        </div>
                                        <div>
                                            <button className="btn">ADD TO CART</button>
                                        </div>
                                  </div>
                        

                    

        </div>
    )
}