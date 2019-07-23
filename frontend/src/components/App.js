import React from "react";

import "../styles.css";
import "../flickity.css";

import {
  Container,
  Header,
  Divider,
  Segment,
  Grid,
} from 'semantic-ui-react'

import Carousel from './Carousel';
import FactoidForm from "./FactoidForm";
import Factoids from "./Factoids";

import backend from '../apis/backend';

export default class App extends React.Component {
  state = {selected: null};
  constructor(props){
    super(props)
    this.factform_ref = React.createRef();
    this.factoids_ref = React.createRef();
    
  }
  updateSelection = async (sel)=>{
    let response = await backend.get(`/interest/${sel}/factoids`);
    this.factoids_ref.current.setFactoids(response.data)
    this.setState({selected: sel});
  }
  hiddenMsg(source, message, forget = true) {
    let src = source.toLowerCase().split("");
    let msg = message.toLowerCase().split("");
    let current = msg.shift();
    for (let i in source) {
      if (src[i] === current) {
        src[i] = src[i].toUpperCase();
        current = null;
        if (msg.length !== 0) {
          current = msg.shift();
        }
      }
    }
    let msg_received = msg.length === 0 && current === null;
    msg_received && console.log(message + " for considering me for this opportunity -Will");
    msg_received && console.log("a", msg_received, "statement...");
    if (!msg_received && forget) {
      return source;
    }
    return msg_received ? src.join("") : false;
  }
  
  render(){
    let title = this.hiddenMsg(
      'taxonomy of "extracurricular interests" which i engage with and keep in high regard that could be considered aesthetically pleasing when presented in a responsive web medium that others may interact and engage with as a means to appraise and assess my drive and abilities.',
      "thank you open drives",
      true
    );
    return (
      <div>
        <Segment inverted>
          <Header  as='h3' style={{fontVariant: 'small-caps', fontWeight: 100}}>{title}</Header>
          <Header as='h5' style={{ fontWeight: "100", fontStyle: "italic" }}>
            and <a href="https://github.com/will-garrett">other ergregious titles</a> by{" "}
            <a href="mailto:the+spam+folder@willgarrett.io?Subject=Your%20Super%20Long%20Title%20Gave%20Me%20a%20Headache%2C%20And%20I%27ve%20Come%20to%20Return%20The%20Favor">
              Will Garrett
            </a>
          </Header>
        </Segment>
        <Carousel updater={this.updateSelection}/>
        <Divider/>
        <Container>
          <Grid stackable>
            <Grid.Row>
            <Grid.Column computer={7} mobile={16} tablet={7}>
            <FactoidForm selected={this.state.selected}/>
            </Grid.Column>
            
            <Grid.Column computer={9} mobile={16} tablet={9}>
            <Factoids ref={this.factoids_ref} />
            </Grid.Column>
            </Grid.Row>
          </Grid>  
        </Container>
        <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '3em 0em' }}>
        <Container>
          Source on <a href="https://github.com/will-garrett/codetest">github</a>
          </Container>
        </Segment>
      </div>
    ); 
  }
  
}