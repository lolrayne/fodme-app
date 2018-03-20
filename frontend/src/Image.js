import React, {Component} from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';


class Image extends Component{
    render(){
        return(

            <div>
                <Row>
                    <Col span={12}>
                        <img src={this.props.img}/>
                    </Col>

                    <Col span={12}>
                        <a href={this.props.url}>click me</a>
                    </Col>

                </Row>

            </div>
        )
    }
}

export default Image;