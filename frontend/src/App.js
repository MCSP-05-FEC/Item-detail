import React, {Component} from 'react';
// import logo from './logo.svg';
import Detail from './Detail-tab'
import Shipping from './Shipping-tab'
import Question from './Question-tab'

export default class App extends Component {
  constructor(props) {
    super(props);    
    this.state = { 
          detail: "show",
          ship: "hide",
          question: "hide",
          id: 10,
          prodInfo: null

      
      };     
  }
  
// add method for each tab click
  clickDetail(e){
    this.setState({detail: "show"})
    this.setState({ship: "hide"})
    this.setState({question: "hide"})
  }
  clickShip(e){
    this.setState({ship: "show"})
    this.setState({detail: "hide"})
    this.setState({question: "hide"})
  }
  clickQuestion(e){
    this.setState({question: "show"})
    this.setState({detail: "hide"})
    this.setState({ship: "hide"})
  }

  getOne(e){
    const id= this.state.id;
    fetch('/item/'+id)
    .then((res)=>{
      return res.json();
    }).then((data)=>{
      this.setState({prodInfo: data[0]})
     
    })

  }
  
  componentDidMount(){  
   
  }
  render() {
 
   
    return (
      <div id={"contain"}>
      <div className={'item-details'}>
      <button type={"submit"} value={"temp"} onClick={this.getOne.bind(this)}>TEMP</button>
        <h2>About this item </h2>
        <div className={"product-tabs"}>
          <div className={"tabs"}>
            <div className={"tab"} onClick={this.clickDetail.bind(this)}>Details</div>
            <div className={"tab"} onClick={this.clickShip.bind(this)}>Shipping & Returns</div>
            <div className={"tab"}  onClick={this.clickQuestion.bind(this)}>Q&A</div>
          </div>
          <hr/>
        </div>        
         <Detail  classD={this.state.detail} classS={this.state.ship} classQ={this.state.question}product={this.state.prodInfo} />
      </div>
      </div>
    );
  }  
}

