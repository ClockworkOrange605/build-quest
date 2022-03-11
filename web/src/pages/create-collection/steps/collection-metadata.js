import React, { Component } from "react";
import "./collection-metadata.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ProjectCard } from "./../../../components/project-card/project-card";

export class CollectionMetadata extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
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
                    <div className="step-index">2/3</div>
                        <ProjectCard projectInfo={projectInfo} />
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
                        <div className="row">
                            <TextField
                                variant="outlined"
                                label="Number of NFTs in collection"
                                onChange={handleChange("numberOfNFTs")}
                                defaultValue={values.numberOfNFTs}
                            />
                        </div>
                        <div className="btns">
                            <Button variant="outlined" onClick={this.back}>
                                Back
                            </Button>
                            <Button variant="contained" onClick={this.continue}>
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
