import React from "react";

class DogCard extends React.Component {
  
  state ={
    clicked: false
  }

  handleClick = () => {
    console.log("clicked")
    this.setState((prevState)=> ({clicked: !prevState.clicked}))
  }

  renderDetails = () =>{
    if(this.state.clicked){
      return <h2>Bark!</h2>
    }
  }

 render(){
  return (
    <div className="card">
      <span className="content">
        <h2 >{this.props.dogObj.name}</h2>
        {this.renderDetails()}
        <img alt="" src={this.props.dogObj.img} />
      </span>
      <span className="bark">
        <button onClick={this.handleClick}>Bark</button>
      </span>
    </div>
  );
  }
}

export default DogCard;
