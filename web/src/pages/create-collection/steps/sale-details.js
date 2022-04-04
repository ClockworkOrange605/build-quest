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

    return (
      <div className="bg">
        <div className="form">
          <div className="img-left card-step">
            <div className="step-index">3/3</div>
            <ProjectCard
              projectInfo={values}
            />
          </div>
          <div className="right">
            <h1 className="title-extra-bold">Contract Details</h1>
            <div className="first">
              <TextField
                required disabled
                variant="outlined"
                label="Collection Name"
                defaultValue={values.name}
                className="name"
              />
              <TextField
                required disabled
                variant="outlined"
                label="Symbol"
                defaultValue={values.symbol}
                className="symbol"
              />
            </div>
            {/* <hr /> */}
            <div className="second">
              <TextField
                required
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
              <TextField
                required
                variant="outlined"
                label="Expected Blocks Between Mints"
                onChange={handleChange("targetBlocksPerSale")}
                defaultValue={values.targetBlocksPerSale}
                type="number"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {
                        values.targetBlocksPerSale &&
                        `~ ${values.targetBlocksPerSale * 0.25} minutes`
                      }
                    </InputAdornment>
                  )
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
