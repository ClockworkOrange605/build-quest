import React, { Component } from "react";

import { ProjectCard } from "./../../../components/project-card/project-card";

import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import "./sale-details.scss";

export class SaleDetails extends Component {
  render() {
    const { values, handleChange, prevStep, nextStep } = this.props

    const formComplete = !!(values.startingPrice && values.targetBlocksPerSale)

    const sampleData = {
      ...values,
      logo: "https://drive.google.com/uc?id=1R4_xVHLZrrPHnHQvtQ7Uw13y88vsGmbS",
      header: "https://drive.google.com/uc?id=1R4_IsUYIaKvn6Z7M_Xk-_kkZPHdiCkck",
    }

    return (
      <div className="bg">
        <div className="form">
          <div className="img-left card-step">
            <div className="step-index">3/3</div>
            <ProjectCard
              projectInfo={sampleData}
            />
          </div>
          <div className="right">
            <h1 className="title-extra-bold">Sale Details</h1>
            <div className="first">
              <TextField
                variant="outlined"
                label="Starting Price"
                onChange={handleChange("startingPrice")}
                defaultValue={values.startingPrice}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      Ξ
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            {/* <div className="date">
              <label>Sale Start Date (UTC)</label>
              <TextField
                variant="outlined"
                onChange={handleChange("saleStartDate")}
                defaultValue={values.saleStartDate}
                type="datetime-local"
              />
            </div> */}
            {/* <TextField
              variant="outlined"
              label="Target Time Between Mints"
              onChange={handleChange("targetTimeBetweenMints")}
              defaultValue={values.targetTimeBetweenMints}
              type="number"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    minutes
                  </InputAdornment>
                ),
              }}
            /> */}
            <TextField
              variant="outlined"
              label="Expected Blocks Between Mints"
              onChange={handleChange("targetBlocksPerSale")}
              defaultValue={values.targetBlocksPerSale}
              type="number"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    ~ {values.targetBlocksPerSale * 0.25} minutes
                  </InputAdornment>
                )
              }}
            />
            <div className="btns">
              <Button variant="outlined" onClick={prevStep}>
                Back
              </Button>
              <Button
                disabled={!formComplete}
                variant="contained"
                onClick={nextStep}
              >
                Deploy{/* Collection */}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SaleDetails;
