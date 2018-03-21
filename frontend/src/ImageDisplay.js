import React, {Component} from 'react';
import Image from './Image'
import { Row, Col } from 'antd';


import 'antd/dist/antd.css';


class ImageDisplay extends Component {
    render(){

        let imageDisplay = this.props.imageArray;

        let imageDisplayJSX = imageDisplay.map((imageData)=>{
            return  <Col span={6}><Image img={imageData.recipe.image}
                          url={imageData.recipe.url}
                          title={imageData.recipe.label}
                                                    />
                    </Col>      
        });

        return(
            
                // <span>
               <Row>
                 {imageDisplayJSX}
                </Row>
                // </span>
            
        )
    }
}

export default ImageDisplay;