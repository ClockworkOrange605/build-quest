import React, { Component } from "react";

import { ProjectCard } from "./../../../components/project-card/project-card";

// import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import "./collection-metadata.scss";

export class CollectionMetadata extends Component {
  render() {
    const { values, handleChange, prevStep, nextStep } = this.props

    const sampleData = {
      ...values,
      logo: "https://drive.google.com/uc?id=1R4_xVHLZrrPHnHQvtQ7Uw13y88vsGmbS",
      header: "https://drive.google.com/uc?id=1R4_IsUYIaKvn6Z7M_Xk-_kkZPHdiCkck",
    }

    return (
      <div className="bg">
        <div className="form">
          <div className="img-left card-step">
            <div className="step-index">2/3</div>
            <ProjectCard
              projectInfo={sampleData}
            />
          </div>
          <div className="right">
            <h1 className="title-extra-bold">Collection Data</h1>
            <div className="row metadata">
              <h3>Upload Metadata:</h3>
              <input
                onChange={handleChange("metadata")}
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
