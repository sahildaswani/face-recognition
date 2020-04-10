import React, { Component } from 'react';
import Particles from 'react-particles-js';
import particleOptions from "./ParticleOptions"
import Clarifai from "clarifai"
import './App.css';
import Naviation from "./Components/Navigation/Navigation";
import Logo from "./Components/Logo/Logo";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import Rank from "./Components/Rank/Rank";
import FaceRecognition from "./Components/FaceRecognition/FaceRecognition"
import SignIn from "./Components/SignIn/SignIn"
import Register from "./Components/Register/Register"

const app = new Clarifai.App({
  apiKey: '8c32231c65c241d5a1e690c28f5d1319'
 });


class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imgURL: '',
      box: null,
      route:'signin',
      isSignedIn: false
    };
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onButtonSubmit = () => {
    this.setState({imgURL: this.state.input})
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => {
        this.displayFaceBox(this.calculateFaceLocation(response));
      })
      .catch(() => {
        alert("Invalid URL")
        document.getElementById("input").value = ""
      })
  }

  calculateFaceLocation = (data) => {
    const objectArray = data.outputs[0].data.regions

    const boundingBox = []

    objectArray.forEach(element => {
      const Box = element.region_info.bounding_box
      boundingBox.push(Box);
    });

    const image = document.getElementById("img");
    const width = Number(image.width);
    const height = Number(image.height);
    const calculatedBox = {};
    
    for (let i = 0; i < boundingBox.length; i++) {
      const element = boundingBox[i];

      const calculation = {
        topRow: Number(element.top_row * height),
        leftCol: Number(element.left_col * width),
        bottomRow: Number(height - element.bottom_row * height),
        rightCol: Number(width - element.right_col * width)
      }
      calculatedBox[i] = calculation;
    }

    return calculatedBox
  }

  displayFaceBox = (box) => {
    this.setState({box: box})
  }
  
  onRouteChange = (route) => {
    this.setState({route: route}, () => {
      if (route === "signin" || route === "register"){
        this.setState({isSignedIn: false})
      } else {
        this.setState({isSignedIn: true})
      }
    })
  }

  navigateRoute = (route) => {
    switch (route) {
      case 'signin':
        return <SignIn onRouteChange={this.onRouteChange}/>
      
      case 'register':
        return <Register onRouteChange={this.onRouteChange}/>

      default:
        return(
          <div>
            <Logo />
            <Rank />
            <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
            <FaceRecognition imgURL={this.state.imgURL} box={this.state.box}/>
          </div>
        );
    }
  }

  render() {
    return (
      <div className="App">
        <Particles className="particles"
          params={particleOptions}
        />
        <Naviation onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn}/>
        {this.navigateRoute(this.state.route)}
        
      </div>
    );
  }
}

export default App;
