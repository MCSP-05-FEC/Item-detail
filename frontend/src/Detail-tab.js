import React, {Component, Fragment} from 'react';
import Shipping from './Shipping-tab'
import Question from './Question-tab'

export default class Detail extends Component {
    constructor(props) {
      super(props);    
      this.state = { 
           
        
        };     
    }
    
  

  
    
    
    render() {
   
      let details;
      if(this.props.product=== null){
        details= <div></div>
      }else{
        details= 
        <Fragment>
        <div className={this.props.classD}>
        <div id={"specifications"}><h3><b>Specifications</b></h3>
          <div id={"name"} className={"spec"}><b>Product Name:</b>{this.props.product.name}</div>
          <hr/>
          <div id={"size"} className={"spec"}><b>Size:</b>{this.props.product.size}</div>
          <hr/>
          <div id={"material"} className={"spec"}><b>Material:</b>{this.props.product.material}</div>
          <hr/>
          <div id={"features"} className={"spec"}><b>Features:</b>{this.props.product.features}</div>
          <hr/>
          <div id={"cleaning"} className={"spec"}><b>Cleaning:</b>{this.props.product.cleaning}</div>
        </div>
        <div id={"description"} ><h3><b>Description</b></h3>{this.props.product.description}</div>
      </div>
          <Shipping  class={this.props.classS} product={this.props.product}/>
          <Question  class={this.props.classQ} product={this.props.product}/>
      </Fragment>
 
      }
    
      return (
        <div id={"tabcontent"}> 
        {details}
        </div>
        
           
      );
    }  
  }
  
  


