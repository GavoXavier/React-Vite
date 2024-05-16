// import React, {useState} from 'react';

// function Cars(){

//     const [cars, setCars] = useState({year:2024,
//                                       make:"Mercedeces",
//                                         model:"S-Class",});

//         function handleYerChange(e){
//             setCars(c=> ({...cars, year:e.target.value}));
//         }
//         function handleMakeChange(e){
//             setCars(c=> ({...cars, make:e.target.value}));
//         }
//         function handleModelChange(e){
//             setCars(c=> ({...cars, model:e.target.value}));
//         }                                

//     return(
//         <div>
//             <p>Fav car: {cars.year} {cars.make} {cars.model} </p>


//             <input type='number' value={cars.year} onChange={handleYerChange}/><br/>
//             <input type='text' value={cars.make} onChange={handleMakeChange}/><br/>
//             <input type='text' value={cars.model}onChange={handleModelChange}/><br/>
//         </div>
//     );
// }
// export default Cars




import React, {useState} from 'react';

function Cars(){
    const [foods, setFoods] = useState(["Apple", "Banana", "Cherry", "Date", "Elderberry"]);
    function handleAdd(){
        const newFood = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value = '';
        setFoods(f =>[...f, newFood]);
    }

    function handleremoveFood(){

    }

    return(
        <div>
            <h2>My Fav Foods</h2>
            <ul>
                {foods.map((food, index) =><li key={index}>{food}</li>)}
            </ul>
            <input type='text' id='foodInput' placeholder="Enter food name"/ >
            <button onClick={handleAdd}>Add Food</button>
        </div>
    )



  
}
export default Cars;