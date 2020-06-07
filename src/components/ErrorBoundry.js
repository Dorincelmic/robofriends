import React,{Component} from 'react';

class ErrorBoundry extends Component{
constructor(props){
    super(props);
    this.state={
        haserrors: false,
    }
}
componentDidCatch(error,info){
this.setState=({haserrors: true});
}

render(){
    if(this.state.haserrors){
        return <h1>Oops...Something went wrong!</h1>
    }
    return this.props.children;
}

}

export default ErrorBoundry;