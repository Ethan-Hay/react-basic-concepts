import React,{Component} from "react";

class Country extends Component{
    state = {
        name: 'United States',
        gold: 0
    }
    
    handleIncrement = () =>{
        console.log(this.state.gold);
        this.setState({gold: this.state.gold +1});
    }
    render(){
        return(<div>
            <div>
                {this.state.name}
            </div>
            <div>
                {this.state.gold}
            </div>
            <button onClick={this.handleIncrement}>+</button>
        </div>)
    }
}

export default Country;