import React, { Component } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';


export class CollectionMetadata extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
    console.log(this.props.values)
  }

  render() {
    const { values, handleChange } = this.props;
    return (
      <div className='form'>
        <label>Upload Metadata</label>
        <input
          onChange={handleChange('metadata')}
          defaultValue={values.metadata}
          type='file'
        />
        <br/>
        <TextField
          variant='outlined'
          label='Number of NFTs in collection'
          onChange={handleChange('numberOfNFTs')}
          defaultValue={values.numberOfNFTs}
        />
        <br/>
        <Button variant='outlined' onClick={this.continue}>Next</Button>
      </div>
    )
  }
}

export default CollectionMetadata