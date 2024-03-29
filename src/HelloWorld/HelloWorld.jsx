
import {Component} from "react";
import { AppContext } from "../ContextApi/MainContext";
class HelloWorld extends Component {
    age = 15
    timer = null
    clickBody = () => {
        alert('body clicked ! ')
    }
    componentDidMount() {
        console.log('component mounted')
        //document.addEventListener('click', this.clickBody)
        //this.timer = setInterval(() => {
        //    console.log('a')
        //},1000)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('component updated')
    }

    componentWillUnmount() {
        console.log('our component is dead')
        document.removeEventListener('click', this.clickBody)
        clearInterval(this.timer)
    }

    render() {
        return (<>
            <AppContext.Consumer>
                {context=> (
                    <h1 style={(context.isDarkMode)?{color:'white'}:{color:'red'}}>Hello {this.props.lastName} {this.age>= 18 ? 'Adult' : 'Minor'}</h1>
                )}
            </AppContext.Consumer>
            </>)
    }
}
export default HelloWorld