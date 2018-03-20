import React, {Component} from 'react';

import 'antd/dist/antd.css';


class ImageDisplay extends Component {
    render(){

        let imageDisplay = this.props.apiList;

        let imageDisplayJSX = imageDisplay.map((imageData)=>{
            return <ImageDisplay image={imageData}/>
        });

        return(
            <span>

                 {imageDisplayJSX}

            </span>
        )
    }
}

export default ImageDisplay;