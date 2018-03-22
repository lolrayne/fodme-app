//=======IMPORTS=======//
import React, {Component} from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';


class Image extends Component{
    render(){
        return(


                    //Image props passed through ImageDisplay component to display images, links and title of the recipe
                    <div>
                    <a target="_blank" href={this.props.url}><img style={{width:'100%', border:'1px solid black'}} src={this.props.img}/></a>
                    <p style={{textAlign:'center', fontWeight:'900'}} title={this.props.title}>{this.props.title.length > 30 ? this.props.title.slice(0,30)+'...':this.props.title}</p>
                    </div>
                    



            
        )
    }
}

export default Image;