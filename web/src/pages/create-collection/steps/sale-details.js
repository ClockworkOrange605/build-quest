import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ProjectCard } from "./../../../components/project-card/project-card";
import InputAdornment from "@mui/material/InputAdornment";
import './sale-details.scss'

export class SaleDetails extends Component {
    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    };

    submit = (e) => {
        e.preventDefault();
        this.props.submit();
    };

    render() {
        const { values, handleChange } = this.props;
        const projectInfo = {
            name: values.name,
            description: values.description,
        };
        return (
            <div className="bg">
                <div className="form">
                    <div className="img-left card-step">
                        <ProjectCard projectInfo={projectInfo} />
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
                                            ether
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                        <div className="date">
                            <label>Sale Start Date (UTC)</label>
                            <TextField
                                variant="outlined"
                                onChange={handleChange("saleStartDate")}
                                defaultValue={values.saleStartDate}
                                type="datetime-local"
                            />
                        </div>
                        <TextField
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
                        />
                        <br />
                        <div className="btns">
                            <Button variant="outlined" onClick={this.back}>
                                Back
                            </Button>
                            <Button variant="contained" onClick={this.submit}>
                                Submit
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SaleDetails;
