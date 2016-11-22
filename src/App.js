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
            Bridge at Arles (Pont de Langlois)
          </a>
          <p>March 1888 (oil) - Kröller-Müller Museum</p>
          </div>          
        </div>

        <div className="App-image" >
          <img src={parisimage} alt="entrance to paris"/>
          <div className="image-info">
          <a 
            href="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Vincent_Van_Gogh_04.JPG/1280px-Vincent_Van_Gogh_04.JPG"
            target="blank">            
            Entrance to Paris
          </a>
          <p>Vincent van Gogh, 1886 (watercolor)</p>
          </div>
       </div>

        <div className="App-image" >
          <img src={rooftopsimage} alt="Rooftops"/>
          <div className="image-info">
          <a 
            href="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Vincent_Willem_van_Gogh_016.jpg/1280px-Vincent_Willem_van_Gogh_016.jpg"
            target="blank">            
            Rooftops
          </a>
          <p>Vincent van Gogh, 1882 (watercolor)</p>
          </div>
       </div>

        <div className="App-image" >
          <img src={orchardimage} alt="orchard"/>
          <div className="image-info">
          <a 
            href="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Bloeiende_boomgaard_-_s0038V1962_-_Van_Gogh_Museum.jpg/1280px-Bloeiende_boomgaard_-_s0038V1962_-_Van_Gogh_Museum.jpg"
            target="blank">            
            Orchard in Blossom
          </a>
          <p>Vincent van Gogh, 1889 (oil)</p>
          </div>
       </div>

        <div className="App-image" >
          <img src={yellowhouseimage} alt="Yellow House"/>
          <div className="image-info">
          <a 
            href="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Vincent_van_Gogh_-_The_yellow_house_%28%27The_street%27%29.jpg/1280px-Vincent_van_Gogh_-_The_yellow_house_%28%27The_street%27%29.jpg"
            target="blank">            
            Yellow House in Arles
          </a>
          <p>Vincent van Gogh, 1888 (oil on canvas)</p>
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
