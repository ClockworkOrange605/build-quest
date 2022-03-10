import React, { Component } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';


export class CollectionDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
    console.log(this.props.values)
  }

  render() {
    const { values, handleChange } = this.props;
    return (
      <div className='form'>
        <TextField
          variant='outlined'
          label='Collection Name'
          onChange={handleChange('name')}
          defaultValue={values.name}
        />
        <br/>
        <TextField
          variant='outlined'
          label='Symbol'
          onChange={handleChange('symbol')}
          defaultValue={values.symbol}
        />
        <br/>
        <label>Logo</label>
        <input
          onChange={handleChange('logo')}
          defaultValue={values.logo}
          type='file'
        />
        <br/>
        <TextField
          variant='outlined'
          label='Description'
          onChange={handleChange('description')}
          defaultValue={values.description}
        />
        <br/>
        <TextField
          variant='outlined'
          label='Twitter'
          onChange={handleChange('twitter')}
          defaultValue={values.twitter}
        />
        <br/>
        <TextField
          variant='outlined'
          label='Website'
          onChange={handleChange('website')}
          defaultValue={values.website}
        />
        <br/>
        <TextField
          variant='outlined'
          label='Discord'
          onChange={handleChange('discord')}
          defaultValue={values.discord}
        />
        <br/>
        <Button variant='outlined' onClick={this.continue}>Next</Button>
      </div>
    )
  }
}

export default CollectionDetails