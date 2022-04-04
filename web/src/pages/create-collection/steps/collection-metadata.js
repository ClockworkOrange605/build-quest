import React, { Component } from "react";

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import { ProjectCard } from "./../../../components/project-card/project-card";

// import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import "./collection-metadata.scss";

export class CollectionMetadata extends Component {
  render() {
    const { values, handleChange, prevStep, nextStep } = this.props

    return (
      <div className="bg">
        <div className="form">
          <div className="img-left card-step">
            <div className="step-index">2/3</div>
            <ProjectCard
              projectInfo={values}
            />
          </div>
          <div className="right">
            <h1 className="title-extra-bold">Collection Tokens</h1>
            <Alert severity="warning">
              <AlertTitle>Warning</AlertTitle>
              Tokens uploading not working in this demo
            </Alert>
            <div className="metadata">
              <h3>Upload Metadata:</h3>
              <input
                // onChange={handleChange("metadata")}
                defaultValue={values.metadata}
                type="file"
              />
            </div>
            {/* <div className="row">
              <TextField
                variant="outlined"
                label="Number of NFTs in collection"
                onChange={handleChange("numberOfNFTs")}
                defaultValue={values.numberOfNFTs}
              />
            </div> */}
            <div className="btns">
              <Button variant="outlined" onClick={prevStep}>
                Back
              </Button>
              <Button variant="contained" onClick={nextStep}>
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CollectionMetadata;
