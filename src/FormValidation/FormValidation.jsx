import { useRef, useState } from "react"

export default function FormValidation(){

    const nameField= useRef()
    const emailField= useRef()
    const messageField= useRef()
    const countryField= useRef()
    const acceptConditionsField= useRef(false)
    const [errors, setErrors] =useState([])

    const validationForm = () => {
        const nameValue = nameField.current.value
        const emailValue = emailField.current.value
        const messageValue = messageField.current.value 
        const countryValue = countryField.current.value
        const acceptConditionsValue = acceptConditionsField.current.checked
        let isFormValid = true

        if( nameValue.trim() === ''){
            setErrors( (prevState) => {
                return [...prevState, 'name required']
            })
            isFormValid = false
        }

        if( emailValue.trim() === ''){
            setErrors( (prevState) => {
                return [...prevState, 'email required']
            })
            isFormValid = false
        }else if(!emailValue.match(/^\S+@\S+\.\S+$/)) {
            setErrors(prevState => {
                return [...prevState, 'Email format is invalid']
            })
            isFormValid = false
        }

        if( messageValue.trim() === ''){
            setErrors( (prevState) => {
                return [...prevState, 'Message required']
            })
            isFormValid = false
        }

        if( countryValue.trim() === ''){
            setErrors( (prevState) => {
                return [...prevState, 'Country required']
            })
            isFormValid = false
        }

        if( !acceptConditionsValue){
            setErrors( (prevState) => {
                return [...prevState, 'Accept conditions should be checked']
            })
            isFormValid = false
        }

        return isFormValid
    }
      
    const handleSubmit = (e) =>{
        e.preventDefault()
        setErrors([])
        validationForm()
    }

    return <div className={"container-fluid w-75 mx-auto my-4 "}>
        {errors.length > 0 ?
            <div className="alert alert-danger" role="alert">
                <strong>Error</strong>
                <ul>
                    {errors.map((error,key) => <li key={key}>{error}</li> )}
                </ul>
            </div>
            :''
        }
       <form onSubmit={handleSubmit}>
            <h1>Contact form</h1>
            <hr/>
            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="name">Name</label>
                <input type="text" id="name" className="form-control" ref={nameField}/>
            </div>

            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="email">Email address</label>
                <input type="text" id="email" className="form-control" ref={emailField}/>
            </div>

            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea className="form-control" id="message" rows="4" ref={messageField}></textarea>
            </div>

            <div className="form-group mb-4">
                <label>Country</label>
                <label htmlFor="country"></label>
                <select className="form-control" id="country" ref={countryField}>
                    <option value=''>Select country</option>
                    <option value='MA'>Maroc</option>
                    <option value='DZ'>Algérie</option>
                    <option value='TN'>Tunisie</option>
                </select>
            </div>

            <div className="form-check mb-4">
                <div className="d-flex">
                    <input className="form-check-input me-2" type="checkbox" id="acceptAllConditions" ref={acceptConditionsField}/>
                    <label className="form-check-label" htmlFor="acceptAllConditions">
                        Accept all conditions
                    </label>
                </div>
            </div>

            <button type="submit" className="btn btn-primary w-100 mb-4">Submit</button>
        </form>
    </div>
}