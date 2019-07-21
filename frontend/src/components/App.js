import React from "react";

import "../styles.css";
import "../flickity.css";

import {
  Container,
  Header,
  Icon,
  Image,
  Item,
  Label,
  Menu,
  Segment,
  Step,
  Table,
} from 'semantic-ui-react'

import Carousel from './Carousel';
import FactoidForm from "./FactoidForm";
import Factoids from "./Factoids";

export default class App extends React.Component {
  
  constructor(props){
    super(props);
    this.selected = null;
    this.factoids_ref = React.createRef();
  }
  updateSelection(sel){
    console.log("App", sel);
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
      'taxonomy of "things" which i am interested in and keep in high regard that could be considered aesthetically pleasing when presented in a responsive web medium that others may interact and engage with as a means to appraise and assess my drive and abilities.',
      "thank you open drives",
      true
    );
    return (
      <div className="App">
        <Header  as='h5' style={{fontVariant: 'small-caps', fontWeight: 100}}>{title}</Header>
        <Header as='h5' style={{ fontWeight: "100", fontStyle: "italic" }}>
          and <a href="https://github.com/will-garrett">other ergregious titles</a> by{" "}
          <a href="mailto:the+spam+folder@willgarrett.io?Subject=Your%20Super%20Long%20Title%20Gave%20Me%20a%20Headache%2C%20And%20I%27ve%20Come%20to%20Return%20The%20Favor">
            Will Garrett
          </a>
        </Header>
        
        <Carousel updater={this.updateSelection}/>
        <Container>
          <FactoidForm />
          <Factoids ref={this.factoids_ref} factoids={this.factoids}/>
        </Container>
        <h5>
          Source on <a href="https://github.com/will-garrett/codetest">github</a>
        </h5>
        
      </div>
    ); 
  }
  
}
