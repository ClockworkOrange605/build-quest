import React, { Component } from 'react'
import CollectionDetails from './steps/collection-details'

export class CreateCollection extends Component {

  state = {
    step: 1,
    name: '',
    symbol: '',
    logo: '',
    description: '',
    twitter: '',
    website: '',
    discord: '',
    metadata: '',
    numberOfNFTs: 0,
    startingPrice: 0,
    saleStartDate: '',
    targetTimeBetweenMints: 0
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  }

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  }

  handleChange = input => e => {
    this.setState({[input]: e.target.value})
  }

  render() {
    const { step } = this.state;
    const { name, symbol, logo, description, twitter, website, discord, metadata, numberOfNFTs, startingPrice, saleStartDate, targetTimeBetweenMints } = this.state;
    const values = { name, symbol, logo, description, twitter, website, discord, metadata, numberOfNFTs, startingPrice, saleStartDate, targetTimeBetweenMints };

    switch(step){
      case 1:
        return(
          <CollectionDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 2:
        return(
          <h1>2</h1>
        )
      case 3:
        return(
          <h1>3</h1>
        )
    }
  }
}

export default CreateCollection
