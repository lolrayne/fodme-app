import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//============ANT UI============//
import 'antd/dist/antd.css';
import { Collapse } from 'antd';
import { Menu, Dropdown, Button, Icon, message } from 'antd';
import { Row, Col } from 'antd';
//=============================//

//============ANT UI============//

const Panel = Collapse.Panel;

const protein = 'Add your proteins';

const dairy = 'Add your dairy';

const grains = 'Add your grains in your fridge';

const veggies = 'Add your vegetables in your fridge';

//=============================//

class App extends Component {

  render() {

    return (
      <div>
        <row>
          <Col span={12}><h1>Food Me App</h1></Col>
        </row>

        <row>
          <Col span={8}>
          <Collapse accordion>
              <Panel header="Protein Selection" key="1">
                <p>{protein}</p>
              </Panel>
              <Panel header="Dairy selection" key="2">
                <p>{dairy}</p>
              </Panel>
              <Panel header="Grains selection" key="3">
                <p>{grains}</p>
              </Panel>
              <Panel header="Vegetables selection" key="4">
                <p>{veggies}</p>
              </Panel>
          </Collapse>
          </Col>
         </row>

      </div>


      

      
      
    );
  }
}

export default App;
