import { useState } from "react"

export default function Form() {

    const [name,setName] = useState('')
    const [age, setAge] = useState('')

    const handleName = () => {
        const name = document.querySelector('#name').value
        setName(name)
    }

    const handleAge = () => {
        const age = document.querySelector('#age').value
        setAge(age)
    }

    const handleClick = (e) => {
        e.preventDefault()
        console.log({name,age})
    }

    return <div>
        <input type="text" onChange={handleName} id="name" placeholder="name" />
        <input type="number" onChange={handleAge} id="age" placeholder="age" />
        <input type="button" onClick={handleClick} value="submit"/>
    </div>
    
}