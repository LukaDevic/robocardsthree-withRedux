import React, { Component } from "react";

class CounterButton2 extends Component {
  constructor(props) {
           super(props);
    this.state =              
    
    
           {
      count:                  5
    };
  }

  shouldComponentUpdate(nextProps,     nextState) {
    if (this.state.count !==     nextState.count) {



      return true;
    }
    return false;
  }

//   updateCount = () => {
//     this.setState(state => {
//       return { count: this.state.count + 1 };
//     });
//   };

  render() {
    console.log("counter");
    
    
    
    
    return (
      <button 
                                              id="counter" 
      color={this.props.color} 
      onClick={()=> this.setState(state=>                        ({count: this.state.count + 1}))}>
        
        
        
        Count: {this.state.count}
      </button>
    );
  }
}

export default CounterButton2;
