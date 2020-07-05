import React, { Component } from "react";
import {ImageContentStyle} from './style.js';
import BannerSection from '../BannerSection';

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default class ImageContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSelectedFile, config, title } = this.props;
    return (
      <ImageContentStyle className=" box-container">
        <h2>{title}</h2>
        
        <div className="image-content-wrapper">
         <CKEditor
                    editor={ ClassicEditor }
                    data=""
                    onInit={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log(data);
                    } }
                    // onBlur={ ( event, editor ) => {
                    //     console.log( 'Blur.', editor );
                    // } }
                    // onFocus={ ( event, editor ) => {
                    //     console.log( 'Focus.', editor );
                    // } }
            
            />

            <BannerSection
             handleSelectedFile={handleSelectedFile}
             config={config}
            />

            </div>
        
      </ImageContentStyle>
    );
  }
}
