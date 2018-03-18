import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Recipelist from './Recipelist';


//============ANT UI============//
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { Layout } from 'antd';
import { Collapse } from 'antd';
import { Row, Col } from 'antd';
import FoodArray from './FoodArray';
//=============================//

//============ANT UI============//

const Panel = Collapse.Panel;

const { Header, Footer, Sider, Content } = Layout;

const protein = 'Add your proteins';

const dairy = 'Add your dairy';

const grains = 'Add your grains';

const veggies = 'Add your vegetables';

//=============================//

class App extends Component {
constructor(){
  super()
  this.state = {
    proteinArray:
    [
      'chicken', 'fish', 'pork', 'veal', 'beef','tofu', 'shrimp', 'scallops', 'bacon', 'bologna'
    ],

    dairyArray: 
    [
      'mozzarella', 'milk', 'cream cheese', 'eggs', 'yogurt', 'sour cream', 'american cheese', 'paneer', 'whipped cream', 'half and half'
    ],

    grainsArray: 
    [
      'rice', 'pasta', 'flour','brown rice', 'bagel', 'bread', 'pretzel', 'baking powder', 'pancake mix', 'rolled oats'
    ],
    veggieArray: 
    [
      'lettuce', 'avocado', 'onion', 'garlic', 'potato', 'tomato', 'spinach', 'broccoli', 'carrot', 'celery'
    ],
    //list of selected 
    apiList:[]

  }
}

ingredientTheyClicked=(ingredient)=>{
  console.log(ingredient)
  let apiList = [];
  //check whether or not ingredient exists inside our apiList array in state
  //hint: look at .includes OR .indexOf
  //if it ISNT in array, push it and setState
  //if it IS, remove it and setState (to remove look into splice)
  if (ingredient.includes(false).push(apiList))
  this.setState(this.setState(apiList))
  else(ingredient.includes(true).splice(apiList))
  this.setState(this.setState(apiList))
}
  render() {

    return (
      <div className='App'>
        <Layout>
          <Header style={{ backgroundColor: '#fff1b8' }}><Col span={12}><h1 style={{ color: 'black' }} >Food Me App</h1></Col></Header>
            <Layout>
             <Content style={{ padding: '0 50px', backgroundColor: '#ffe58f' }}>
                <Col span={8}>
                    <Collapse accordion style={{backgroundColor: '#fff1f0'}}>
                        <Panel header="Protein Selection" key="1">
                          <p>{protein}</p>
                          <FoodArray ingredientArray={this.state.proteinArray} ingredientTheyClicked={this.ingredientTheyClicked}/>
                        </Panel>
                        <Panel header="Dairy Selection" key="2">
                          <p>{dairy}</p>
                          <FoodArray ingredientArray={this.state.dairyArray} ingredientTheyClicked={this.ingredientTheyClicked}/>
                        </Panel>
                        <Panel header="Grains Selection" key="3">
                          <p>{grains}</p>
                          <FoodArray ingredientArray={this.state.grainsArray} ingredientTheyClicked={this.ingredientTheyClicked}/>
                        </Panel>
                        <Panel header="Vegetables Selection" key="4">
                          <p>{veggies}</p>
                          <FoodArray ingredientArray={this.state.veggieArray} ingredientTheyClicked={this.ingredientTheyClicked}/>
                        </Panel>
                    </Collapse>
                    <Button style ={{margin: '10px'}}>Submit</Button>
                  </Col>
              </Content>
            </Layout>
              <Footer style={{ textAlign: 'center', backgroundColor: '#fff1b8' }}>
                Ant Design ©2018 Created by Ant UED
              </Footer>
            </Layout>
         

      </div>


      

      
      
    );
  }
}

export default App;
