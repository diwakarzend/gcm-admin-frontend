import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import {BannerStyle} from './style.js';
import Alert from "@material-ui/lab/Alert";

export default class BannerSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { config, preview, handleSelectedFile } = this.props;
    const {name, title, fileName, fileError, file } = config || {};
    const url = file && URL.createObjectURL(file);
    return (
      <BannerStyle className="upload-banner box-container">
        <h2>{title}</h2>

        <label htmlFor={name}>
          <input
            style={{ display: "none" }}
            id={name}
            name={name}
            onChange={(e) => handleSelectedFile(e)}
            type="file"
          />
          {url && 
            <figure>
                <img className="thumbnail" src={url} alt="thumbnail" />
            </figure>}
          {fileName && <span className="file-name">{fileName}</span>}
          <Button
            color="secondary"
            variant="contained"
            component="span"
            startIcon={<CloudUploadIcon />}
          >
            Upload
          </Button>
        </label>
      {fileError && <Alert severity="error">{fileError}</Alert>}
      </BannerStyle>
    );
  }
}
