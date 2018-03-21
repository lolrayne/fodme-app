import React, {Component} from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';


class Image extends Component{
    render(){
        return(


                

                    <Col span={8}><a target="_blank" href={this.props.url}><img src={this.props.img}/></a>
                    <p title={this.props.title}>{this.props.title}</p>
                    
                    </Col>



            
        )
    }
}

export default Image;