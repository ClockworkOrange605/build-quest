import React, { Component } from 'react'
import CollectionDetails from './steps/collection-details'
import CollectionMetadata from './steps/collection-metadata';
import SaleDetails from './steps/sale-details';

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
      step: step - 1,
      logo: ''
    });
  }

  handleChange = input => e => {
    this.setState({[input]: e.target.value})
  }

  submit = () => {
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
          <CollectionMetadata
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 3:
        return(
          <SaleDetails
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            submit={this.submit}
          />
        )
    }
  }
}

export default CreateCollection
