import { useState } from "react"

export default function Fruits() {
    const [fruit,setFruit] = useState('')
    const [FruitList,setFruitList] = useState([])

    const displayFruits = () => FruitList.map((f,key) => <li key={key}>{f}</li>)
    
    const handleInput = () => {
        const newfruit = document.querySelector('#fruit').value
        setFruit(newfruit)
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        setFruitList([...FruitList,fruit])
    }
    
    return <>
        <span>
            <input  type="text" id="fruit" placeholder="Add name.." onChange={handleInput}></input>
            <button onClick={handelSubmit}>Add</button>
        </span>
        <h1>Fruits : </h1>
        <ul>{displayFruits()} </ul>
    </>
    
}