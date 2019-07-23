import React from 'react';

class Error extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hasError : false
        }
    }
    componentDidCatch(error, info){
        this.setState({hasError:true})
    }
    render(){
        if(this.state.hasError){
            return <h1>Oooops. That is not good</h1>
        }
        return this.state.children
    }
}

export default Error;
