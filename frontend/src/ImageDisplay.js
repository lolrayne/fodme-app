import React, {Component} from 'react';
import Image from './Image'
import { Row, Col } from 'antd';


import 'antd/dist/antd.css';


class ImageDisplay extends Component {
    render(){

        let imageDisplay = this.props.imageArray;

        let imageDisplayJSX = imageDisplay.map((imageData)=>{
            return  <Col lg={6} xs={24} md={12} ><Image img={imageData.recipe.image}
                          url={imageData.recipe.url}
                          title={imageData.recipe.label}
                                                        />
                    </Col>      
        });

        return(
            
                // <span>
               <Row gutter={{md:16, lg:16}}>
                 {imageDisplayJSX}
                </Row>
                // </span>
            
        )
    }
}

export default ImageDisplay;