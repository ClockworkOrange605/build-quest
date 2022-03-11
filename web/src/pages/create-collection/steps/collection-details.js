import React, { Component } from "react";
import "./collection-details.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import formImg from "./../../../assets/form-img.jpg";
import InputAdornment from "@mui/material/InputAdornment";
import TwitterIcon from "@mui/icons-material/Twitter"
import { SvgIcon } from "@mui/material";

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
            values.header &&
            values.description
        );
        return (
            <div className="bg">
                <div className="form">
                    <div className="img-left">
                        <div className="step-index white">1/3</div>
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
                            <TextField
                                variant="outlined"
                                label="Symbol"
                                onChange={handleChange("symbol")}
                                defaultValue={values.symbol}
                                className="symbol"
                            />
                        </div>
                        <div className="second">
                            <TextField
                                variant="outlined"
                                label="Collection Logo URL"
                                onChange={handleChange("logo")}
                                defaultValue={values.logo}
                                className='input-field'
                            />
                            <TextField
                                variant="outlined"
                                label="Collection Header URL"
                                onChange={handleChange("header")}
                                defaultValue={values.header}
                                className='input-field'
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
                                onChange={handleChange("twitter")}
                                defaultValue={values.twitter}
                                className="forth-field"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <TwitterIcon color="disabled" className="icon"/>
                                            @
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                variant="outlined"
                                onChange={handleChange("discord")}
                                defaultValue={values.discord}
                                className="forth-field"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SvgIcon color="disabled" className="icon">
                                            <path xmlns="http://www.w3.org/2000/svg" d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                                            </SvgIcon>

                                            discord.gg/
                                        </InputAdornment>
                                    ),
                                }}
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
