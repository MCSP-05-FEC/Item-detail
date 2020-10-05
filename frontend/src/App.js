import React, {Component} from 'react';
// import logo from './logo.svg';
import Detail from './Detail-tab'


export default class App extends Component {
  constructor(props) {
    super(props);    
    this.state = { 
          detail: "show",
          ship: "hide",
          question: "hide",
          id: 10,
          prodInfo: null,
          detailS: "selected",
          shipS:"unselected",
          questionS:"unselected",
          buttonshow:true,
          
      
      };     
  }
  
// add method for each tab click
  clickDetail(){
    this.setState({detail: "show"})
    this.setState({ship: "hide"})
    this.setState({question: "hide"})
    this.setState({detailS: "selected"})
    this.setState({shipS:"unselected"})
    this.setState({questionS: "unselected"})
  }
  clickShip(){
    this.setState({ship: "show"})
    this.setState({detail: "hide"})
    this.setState({question: "hide"})
    this.setState({shipS: "selected"})
    this.setState({detailS:"unselected"})
    this.setState({questionS: "unselected"})
  }
  clickQuestion(){
    this.setState({question: "show"})
    this.setState({detail: "hide"})
    this.setState({ship: "hide"})
    this.setState({questionS: "selected"})
    this.setState({detailS:"unselected"})
    this.setState({shipS: "unselected"})
  }
  showMore(){
    this.setState({buttonshow: !this.state.buttonshow})
  }
  

  getOne(e){
    const id= this.state.id;
    fetch('/item/'+id)
    .then((res)=>{
      return res.json();
    }).then((data)=>{
      this.setState({prodInfo: data[0]})
      console.log(data[0]);
    })

  }
  
  componentDidMount(){  
   
  }
  render() {
    let buttonText;
    if(this.state.buttonshow===true){
      buttonText=<button type={"submit"} id={"show"}  className={this.state.detail} onClick={this.showMore.bind(this)}>Show More</button>
    }else{
      buttonText=<button type={"submit"} id={"show"}  className={this.state.detail} onClick={this.showMore.bind(this)}>Show Less</button>
    }
  
    return (
      <div id={"contain"}>
      <div className={'item-details'}>
      <button type={"submit"} value={"temp"} id={"temp"} onClick={this.getOne.bind(this)}>TEMP</button>
        <h2>About this item </h2>
        <div className={"product-tabs"}>
          <div className={"tabs"}>
            <button type={"button"} className={this.state.detailS} onClick={this.clickDetail.bind(this)}><div className={"tab"} >Details</div> </button>
            <button type={"button"}  className={this.state.shipS} onClick={this.clickShip.bind(this)}><div className={"tab"} >Shipping and Returns</div></button>
            <button  type={"button"} className={this.state.questionS} onClick={this.clickQuestion.bind(this)}><div className={"tab"}  >Q&A</div></button>
          </div>
         <hr/>
         </div>
         <Detail show={this.state.buttonshow} classD={this.state.detail} classS={this.state.ship} classQ={this.state.question}product={this.state.prodInfo} />
        {buttonText}
        </div>        
      </div>
    );
  }  
}

