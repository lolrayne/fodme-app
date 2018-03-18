import React from 'react';
import FoodArray from './FoodArray'

class Recipelist extends React.Component {
    render(){
        return (
            <li>
                <span>{this.props.text}</span>
                <input type = "checkbox" onClick={()=>this.props.ingredientTheyClicked(this.props.text)} style={{ margin:'5px' }}/>
            </li>
        )
    }
}

export default Recipelist;