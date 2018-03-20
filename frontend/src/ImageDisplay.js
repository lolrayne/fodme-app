import React, {Component} from 'react';
import Image from './Image'


import 'antd/dist/antd.css';


class ImageDisplay extends Component {
    render(){

        let imageDisplay = this.props.imageArray;

        let imageDisplayJSX = imageDisplay.map((imageData)=>{
            return <Image img={imageData.recipe.image}
                          url={imageData.recipe.url}
                          ingredientDetails={imageData.recipe.ingredients}/>
                          
        });

        return(
            <span>

                 {imageDisplayJSX}

            </span>
        )
    }
}

export default ImageDisplay;