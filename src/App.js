import React, { Component } from 'react';

import { Jumbotron, Button } from 'react-bootstrap';

import logo from './logo.svg';
import langloisimage from './img/langlois-bridge-589px.jpg';
import parisimage from './img/entrance-paris-796px.jpg';
import rooftopsimage from './img/rooftops-1882-640px.jpg';
import orchardimage from './img/orchard-arles-612px.jpg';
import yellowhouseimage from './img/yellow-house-619px.jpg';

import './App.css';

import Clock from './Clock.js';
import PrimaryNav from './PrimaryNav.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PrimaryNav name="Van Gogh Collection" />
        <Clock />

        <p className="App-intro">
          Vancouver, Canada
        </p>

        <div className="App-image">
          <img src={langloisimage} alt="langlois bridge"/>
          <div className="image-info">
          <a 
            href="http://krollermuller.nl/en/vincent-van-gogh-bridge-at-arles-pont-de-langlois#Bridge%20at%20Arles%20(Pont%20de%20Langlois)"
            target="blank">            
            Langlois Bridge
          </a>
          <p>Arles - March 1888 (oil) - Kröller-Müller Museum</p>
          </div>          
        </div>

        <div className="App-image" >
          <img src={parisimage} alt="entrance to paris"/>
          <div className="image-info">
          <a 
            href="https://www.vangoghmuseum.nl/en/collection/d0420V1962"
            target="blank">            
            Gate in the Paris Ramparts
          </a>
          <p>Paris - Summer 1887 (watercolor) - Van Gogh Museum</p>
          </div>
       </div>

        <div className="App-image" >
          <img src={rooftopsimage} alt="Rooftops"/>
          <div className="image-info">
          <a 
            href="http://vangoghletters.org/vg/letters/let251/letter.html"
            target="blank">            
            Rooftops
          </a>
          <p>The Hague, 1882 (watercolor)</p>
          </div>
       </div>

        <div className="App-image" >
          <img src={orchardimage} alt="orchard"/>
          <div className="image-info">
          <a 
            href="http://www.vangoghmuseum.nl/en/search/collection?q=orchard&artist=Vincent+van+Gogh&place=Arles&type=painting"
            target="blank">            
            Orchard in Blossom
          </a>
          <p>Arles, April 1889 (oil on canvas) - Van Gogh Museum</p>
          </div>
       </div>

        <div className="App-image" >
          <img src={yellowhouseimage} alt="Yellow House"/>
          <div className="image-info">
          <a 
            href="http://www.vangoghmuseum.nl/en/collection/s0032V1962"
            target="blank">            
            The Yellow House
          </a>
          <p>Arles, September 1888 (oil on canvas) - Van Gogh Museum</p>
          </div>
       </div>



        <footer>
          <div className="footerNav">
            <img src={logo} className="App-logo" alt="logo" />

            <br/>
            <Button
              bsSize="xsmall"
              bsStyle="info"
              href="https://github.com/facebookincubator/create-react-app"
              target="blank">          
              Built with React
            </Button>
            <br/>

            <a href="https://www.github.com/anderson2">Rob Anderson, 2016</a>
          </div>
        </footer>

      </div>
    );
  }
}

export default App;
