import React, { Component } from 'react';
import BannerSection from '../Components/Common/BannerSection';
import ImageContent from '../Components/Common/ImageContent';
import {Input} from "../utils/Input";
import { HomePageStyle } from './style';
import {
    checkValidity
} from "../utils/common";

 const controls = {
    title: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: '',
            name: 'title'
        },
        value: '',
        label: 'Page Title',
        validation: {
            required: true
        },
        touched: false,
        valid: true,
    },
     bannerImage : {
        name: 'bannerImage',
        fileError: '',
        fileName: '',
        title: 'Upload Banner Image',
        file: null
     },
     uploadPhoto : {
        name: 'uploadPhoto',
        fileError: '',
        fileName: '',
        title: 'Upload Photo',
        file: null
     }
 }

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            controls: controls,
        };
    }

    handleSelectedFile = (event) => {
        const updatedControls = { ...this.state.controls };
        let MAX_UPLOAD_SIZE = 2;
        let reader = new FileReader();
        const name = event.target.name;
        const file = event.target.files[0];
        const fileType = ['image/jpeg', 'image/png'];
        // if ((file && file.size / (1024 * 1024)) > MAX_UPLOAD_SIZE) {
        //     this.setState({ fileError: `Max upload size should be ${MAX_UPLOAD_SIZE} MB` });
        //     return;
        // }
        if (file && !fileType.includes(file.type)) {
            updatedControls[name].fileError = 'Only jpeg and png images are allowed.';
            this.setState({ controls: updatedControls });
            return;
        }
        console.log("file", file);
        if(file !== undefined) {
            updatedControls[name].file = file;
            updatedControls[name].fileName = file.name;
            updatedControls[name].fileError = '';
            reader.onloadend = () => {
                this.setState({ controls: updatedControls });
            }
            reader.readAsDataURL(file);
        } else {
            updatedControls[name].file = '';
            updatedControls[name].fileName = '';
            updatedControls[name].fileError = 'No File Selected';
            this.setState({ controls: updatedControls });
        }
        
    }


    inputChangedHandler = (event, controlName, elementType) => {
        let inputValue = null;
        if (elementType == "checkbox") {
            inputValue = event.target.checked;
        } else {
            inputValue = event.target.value;
        }
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: inputValue,
                valid: checkValidity(
                    inputValue,
                    this.state.controls[controlName].validation
                ),
                touched: true
            }
        };
        this.setState({ controls: updatedControls });
    };

    render() {

        const { controls } = this.state;
        return (
            <HomePageStyle>
                <Input
                        className="page-title"
                        elementType={controls.title.elementType}
                        elementConfig={controls.title.elementConfig}
                        value={controls.title.value}
                        invalid={!controls.title.valid}
                        shouldValidate={controls.title.validation}
                        touched={controls.title.touched}
                        label={controls.title.label}
                        changed={event =>
                            this.inputChangedHandler(
                                event,
                                "title",
                                controls.title.elementType
                            )
                        }
                    />
                <BannerSection 
                  handleSelectedFile={this.handleSelectedFile}
                  config={controls.bannerImage}
                />
                <div className="dfs"></div>
                <ImageContent 
                  handleSelectedFile={this.handleSelectedFile}
                  config={controls.uploadPhoto}
                  title="Image Content Section"
                />
            </HomePageStyle>
        )
    }
}

export default HomePage;
