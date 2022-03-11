import React, { Component } from "react";
import "./collection-details.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import formImg from "./../../../assets/form-img.jpg";

export class CollectionDetails extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, handleChange } = this.props;
        const formComplete = !!(
            values.name &&
            values.symbol &&
            values.logo &&
            values.description &&
            values.twitter &&
            values.discord &&
            values.website
        );
        return (
            <div className="bg">
                <div className="form">
                    <div className="img-left">
                        <img src={formImg} className="form-img"></img>
                    </div>
                    <div className="right">
                        <h1 className="title-extra-bold">Collection Details</h1>
                        <div className="first">
                            <TextField
                                variant="outlined"
                                label="Collection Name"
                                onChange={handleChange("name")}
                                defaultValue={values.name}
                                className="name"
                            />
                            <br />
                            <TextField
                                variant="outlined"
                                label="Symbol"
                                onChange={handleChange("symbol")}
                                defaultValue={values.symbol}
                                className="symbol"
                            />
                            <br />
                        </div>
                        <div className="second">
                            <h3>Select Logo:</h3>
                            <input
                                onChange={handleChange("logo")}
                                defaultValue={values.logo}
                                type="file"
                            />
                        </div>
                        <TextField
                            variant="outlined"
                            label="Description"
                            multiline
                            rows={2}
                            onChange={handleChange("description")}
                            defaultValue={values.description}
                            className="description"
                        />
                        <div className="forth">
                            <TextField
                                variant="outlined"
                                label="Twitter"
                                onChange={handleChange("twitter")}
                                defaultValue={values.twitter}
                                className="forth-field"
                            />
                            <TextField
                                variant="outlined"
                                label="Discord"
                                onChange={handleChange("discord")}
                                defaultValue={values.discord}
                                className="forth-field"
                            />
                        </div>
                        <TextField
                            variant="outlined"
                            label="Website"
                            onChange={handleChange("website")}
                            defaultValue={values.website}
                            className="website"
                        />
                        <div className="btn-container">
                            <Button
                                variant="contained"
                                onClick={this.continue}
                                className="next"
                                disabled={!formComplete}
                            >
                                Next
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CollectionDetails;
