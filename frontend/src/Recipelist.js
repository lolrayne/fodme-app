import React from 'react';
import 'antd/dist/antd.css';
import { Checkbox } from 'antd';

class Recipelist extends React.Component {
    render(){
        return (
            <li>
                <span>{this.props.text}</span>
                <Checkbox onClick={()=>this.props.ingredientTheyClicked(this.props.text)} style={{ margin:'5px' }}></Checkbox>
            </li>
        )
    }
}

export default Recipelist;