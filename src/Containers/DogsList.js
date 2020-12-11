import React, { Component } from "react";
import {apiResponse} from '../api'
import DogCard from "../Components/DogCard";

class DogsList extends Component {


  renderDog = () => {
   return  apiResponse.map(dogObj => <DogCard key={dogObj.id} dogObj={dogObj} />)
  }

  render() {
  return <div className="list">{this.renderDog()}</div>;
  }
}

export default DogsList;
