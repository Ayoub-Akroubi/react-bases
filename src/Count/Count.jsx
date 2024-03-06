/*import { Component } from "react";

export default class Count extends Component{
    constructor(props){
        super(props);
        this.state = {
            counter : 0
        }
    }

    componentDidMount(){
        console.log('component mounted')
    }

    componentDidUpdate(prevState){
        if (prevState.counter != this.state.counter) {
            console.log('component updated')
        }
    }

    handleClick = () =>{
        this.setState(
            pr =>{
                return {
                    counter : pr.counter+1
                }
            }
        )
    }


    render(){
        return <div>
                <button onClick={this.handleClick}>Click to incremment</button>
                Il y a {this.state.counter} secounds
            </div>
    }
}*/

import { useEffect } from "react"
import { useState } from "react"

export default function Count(){

    //hooks
    //useState
    const [counter,setCount] = useState(0)

    //useEffect
    useEffect(()=>{
        console.log('component did mounted')
        // return () => {

        // }
    },[])

    useEffect(()=>{
        console.log('component did updated')
    },[counter])

    const handleClick = () => {
        setCount(prevState =>{
            return prevState+1;
        })
    }

    return <div>
        <button onClick={handleClick}>Click to incremment</button>
        Il y a {counter} secounds
    </div>
}