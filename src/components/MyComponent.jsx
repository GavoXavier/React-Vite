// import React from 'react'
// import { useState } from 'react'
// const [name, setName] = useState("Patrick");
// const [age, setAge] = useState(0);
// const [isEmployed, setIsEmployed] = useState(false);

// const updateName = () => {
// setName("Spongebob");
// }
// const incrementAge = () => {
    
//     setAge(age + 1);
// }

// const toggleEmployed = () => {
// setIsEmployed(!isEmployed);
// }



// return(
// <div>
// <p>Name:{name}</p>
// <button onClick={updateName}>Update Name</button>

// <p>Age:{age}</p>
// <button onClick={incrementAge}>Increment Age</button>

// <p>Is employed:{isEmployed ? "Yes": "No"}</p>
// <button onClick={toggleEmployed}>Toggle</button>

// </div>
// )

import React, {useState} from 'react';
function MyComponent(){
    const [name, setName] = useState("");
    const [payment, setPayment] = useState("   ");
    const [shipping, setShipping] = useState("   ");

    function handleNameChange(event){
        setName(event.target.value);
    }
function handlePaymentChange(event){
    setPayment(event.target.value);}


    function handleShippingChange(event){
        setShipping(event.target.value);
    }


    return(
<div>
<input value={name} onChange={handleNameChange} />
<p>{name}</p>

<select value={payment} onChange={handlePaymentChange}>
    <option value="">Select</option>
    <option value="credit">Credit card</option>
    <option value="debit">Debit card</option>
    <option value="paypal">Paypal</option>
    <option value="cash">Cash</option>
</select>

<p> Payment: {payment}</p>

<label>
    <input type="radio" value="Pick up"
     checked={shipping === "Pick up"} onChange={handleShippingChange} />
    Pick up
    </label> <br/>

<label>
    <input type="radio" value="delivery" checked={shipping === "delivery"} onChange={handleShippingChange} />
    delivery
</label>
<p>Shipping {shipping}</p>




</div>


    )

}
export default MyComponent