import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Recipelist from './Recipelist';
import key from './config';
import axios from 'axios';
import ImageDisplay from './ImageDisplay';
import FoodArray from './FoodArray';


//============ANT UI============//
import 'antd/dist/antd.css';
import { Checkbox } from 'antd';
import { Button } from 'antd';
import { Layout } from 'antd';
import { Collapse } from 'antd';
import { Row, Col } from 'antd';
import { Icon } from 'antd';

//=============================//

//============ANT UI============//

const Panel = Collapse.Panel;

const { Header, Footer, Sider, Content } = Layout;

const protein = 'Add your proteins';

const dairy = 'Add your dairy';

const grains = 'Add your grains';

const veggies = 'Add your vegetables';

//=============================//



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
    apiList:[],

    resultsRecipe:[]

  }

  this.fetchRecipe = this.fetchRecipe.bind(this)
}

ingredientTheyClicked=(ingredient)=>{
  console.log(ingredient)
  let apiList = this.state.apiList
  
  //check whether or not ingredient exists inside our apiList array in state
  //hint: look at .includes OR .indexOf
  //if it ISNT in array, push it and setState
  //if it IS, remove it and setState (to remove look into splice)
  if (apiList.includes(ingredient)){
    let ingredientIndex = apiList.indexOf(ingredient)
    let apiListCopy = Array.from(this.state.apiList);
    
    //we need to splice out our ingredient we just found
    //splice follows the format of arrayToSplice.splice(whereToSpliceFrom, howManyThingsToSplice, ...shouldWeAddAnything?)
    //listCopy.splice(indexWeFound, 1)
    apiListCopy.splice(ingredientIndex, 1)
    this.setState({
      apiList: apiListCopy
    })
  }
 
  else{
    let apiListCopy = Array.from(this.state.apiList)
    apiListCopy.push(ingredient)
    console.log(apiList)
    this.setState({
      apiList: apiListCopy
    })
  }

}


fetchRecipe(event){
  event.preventDefault()

    // let selectedItems = this.apiList

    let url = 'https://api.edamam.com/search?q='+ this.state.apiList + '&app_id=' + key.APP_ID + '&app_key=' + key.APP_KEY

    axios.get(url)
    .then(result =>{
      console.log(result.data.hits)
      console.log(result)
      this.setState({
        resultsRecipe:result.data.hits
      })
    })
    .catch(error =>{
      console.log(error)
    })
}


  render() {

    return (
      <div className='App'>
        <Layout>
          <Header style={{ backgroundColor: '#fff1b8' }}>
          <img style={{maxWidth:'4%', padding:'5px'}} src="/images/burgerart.png"/>
          <Col span={12}><h1 style={{ color: 'black', fontFamily:'Leckerli One' }} >Fridgify</h1>
          </Col></Header>
            <Layout>
             <Content style={{ padding: '0 50px', backgroundColor: '#ffe58f' }}>
                <Col span={24}>
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

                    <Button onClick={this.fetchRecipe} style ={{margin: '10px'}}>Submit</Button>
                    </Col>


                    {/* <Col span={24}> */}
                      
                        {!!this.state.resultsRecipe.length && <ImageDisplay imageArray={this.state.resultsRecipe} />}
                      
                    {/* </Col> */}
                 

              </Content>
            </Layout>

             
              <Footer style={{ textAlign: 'center', backgroundColor: '#fff1b8' }}>
                Stan Gold ©2018 Created by Ant UED
                <div>
                
                  <Icon type="linkedin" style={{ fontSize: 30, color: '#08c'}}/>
                  <Icon type="twitter" style={{ fontSize: 30, color: '#08c'}}/>
                  <Icon type="instagram" style={{ fontSize: 30, color: '#08c'}}/>
                  
                  <a href="https://www.instagram.com/stangold/">Instagram</a>
                  <a href="https://www.linkedin.com/in/stan-gold/">LinkedIn</a>
                  <a href="https://www.linkedin.com/in/stan-gold/">Twitter</a>
                  
                </div>
              </Footer>
            </Layout>
         

      </div>


      

      
      
    );
  }
}

export default App;
