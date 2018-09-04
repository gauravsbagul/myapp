import React, { Component } from 'react';


class ErrorBoundary extends Component{

    state = {
        hasError: false,
        errorMassage: ''
    }
    componentDidCatch = (error, info)=> {
            this.setState({hasError: true, errorMassage: error});
    }
    render() {
        if(this.state.hasError) {
            return  <h1> {this.state.errorMassage}</h1>;
        } else {
            return this.props.chidren;
        }      
    }
}
export default ErrorBoundary;