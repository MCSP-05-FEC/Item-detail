import React, {Component} from 'react';

export default class Question extends Component {
    constructor(props) {
      super(props);    
      this.state = { 
          
        
        };     
    }
    
  
//method to set the state to the information recieved from the get request
  
    
    
    render() {
   
    
      return (
        
            <div className={this.props.class}>
                <div id={"questionNAnswer"}>Question and Answers </div>
                <div id={"qna"}>{this.props.product.qna}</div>
              
  
            </div>
       
      );
    }  
  }
  
  


