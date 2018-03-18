import React from 'react'
import 'antd/dist/antd.css';
import Recipelist from './Recipelist'

class FoodArray extends React.Component{

    render(){

        let ingredientList = this.props.ingredientArray;
        
        let ingredientJSX = ingredientList.map((ingredient) => {
            return <Recipelist text={ingredient} ingredientTheyClicked={this.props.ingredientTheyClicked}/>
        });
        

        return(

            <span>

                {ingredientJSX}

            </span>
        )
    }
}
export default FoodArray;