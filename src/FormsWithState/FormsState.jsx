import { useEffect, useRef, useState } from "react"

export default function FormsState(){

    // Using State
    // const [formValue,setFormValues] = useState({
    //     name:'', country : 'MA', age : '', condition : false
    // })

    // const handleChange = (e) => {
    //     const currentTarget = e.currentTarget
    //     const id = currentTarget.id
    //     let value = currentTarget.value

    //     if (currentTarget.type === 'checkbox') {
    //         value = currentTarget.checked
    //     }
    //     setFormValues(prevState => {
    //         return {...prevState, ...{[id]: value}}
    //     })
    // }

    // Using Ref
    const inputNameRef = useRef()
    const inputAgeRef = useRef()
    const inputCountryRef = useRef()
    const inputConditionsRef = useRef()

    useEffect(() =>{
        inputNameRef.current.value = "akroubi"
    },[])
    const handleButton = (e) => {
        e.preventDefault()
        console.log(inputNameRef.current.value)    
        console.log(inputAgeRef.current.value)

    }

    return <div className={'container my-4'}>  
            <form>
                <div className="form-group">
                    <label>Name</label>
                    {/* <input type="text" id="name" className="form-control" onChange={handleChange}></input> */}
                    <input type="text" id="name" className="form-control" ref={inputNameRef}></input>
                </div>
                <div className="form-group">
                    <label>Age</label>
                    {/* <input type="text" id="age" className="form-control" onChange={handleChange}></input> */}
                    <input type="text" id="age" className="form-control" ref={inputAgeRef}></input>

                </div>
                <div className="form-group">
                    <label>Country</label>
                    {/* <select className="form-control" id="country" onChange={handleChange}> */}
                    <select className="form-control" id="country" ref={inputCountryRef}>
                        <option value="MA">Maroc</option>
                        <option value="ALG">Algerie</option>
                        <option value="OTHERS">Other</option>
                    </select>
                </div>
                <div className="form-check">
                    {/* <input htmlFor="accept" type="checkbox" id="accept" className="form-check-input" onChange={handleChange}></input> */}
                    <input htmlFor="accept" type="checkbox" id="accept" className="form-check-input" ref={inputConditionsRef}></input>
                    <label className="form-check-label">Accept our rules</label>
                </div>
                
                <div className="form-group">
                    <button onClick={handleButton} className="btn btn-primary">Save</button>
                </div>
            </form>
    </div>
}