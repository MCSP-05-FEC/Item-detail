import React, {Component} from 'react';

export default class Detail extends Component {
    constructor(props) {
      super(props);    
      this.state = { 
            prodName: "",
            size: "",
            material: "",
            features: "",
            cleaning: "",
            description: ""
        
        };     
    }
    
  

  
    
    
    render() {
   
    
      return (
        
            <div className={this.props.class}>
              <div id={"specifications"} style= {{"float": "left", "padding": "1em"}}>
                <div id={"name"} className={"spec"}>Product Name:{}</div>
                <hr/>
                <div id={"size"} className={"spec"}>Size:{}</div>
                <hr/>
                <div id={"material"} className={"spec"}>Material:{}</div>
                <hr/>
                <div id={"features"} className={"spec"}>Features:{}</div>
                <hr/>
                <div id={"cleaning"} className={"spec"}>Cleaning:{}</div>
  
              </div>
              <div id={"description"} style= {{"float": "left", "padding": "1em"}}>Description:{}</div>
  
            </div>
       
      );
    }  
  }
  
  


