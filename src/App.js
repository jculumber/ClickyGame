import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import images from "./images.json";
import "./App.css";

class App extends Component {
  // Setting this.state.images to the images json array
  state = {
    images,
    currentScore: 0,
    topScore: 0,
    correctIncorrect: "",
    clicked: []
  };

  randomizeImages = imagesArray => {
    // Randomize the images within the array using Fisher-Yates shuffle algorithm
    for (let i = imagesArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [imagesArray[i], imagesArray[j]] = [imagesArray[j], imagesArray[i]];
    }
    return imagesArray;
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <NavBar>
          <div className="col-4 text-center">
          <a class="navbar-brand" href="/"><h2><b>Clicky Game</b></h2></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          </div>
          <div className="col-4 text-center">Click an image to begin!</div>
          <div className="col-4 text-center">
            Score:
            0
             | Top Score:
            0
            </div>

        </NavBar>
        <Header>
          <h1><b>Clicky Game!</b></h1>
          <h5>Click on an image to earn points, but don't click on any more than once!</h5>
        </Header>
        
          {this.state.images.map(image => (
            <ImageCard
              randomizeImages={this.randomizeImages}
              id={image.id}
              key={image.id}
              name={image.name}
              image={image.image}
              occupation={image.occupation}
              location={image.location}
            />
          ))}
        
        <Footer>
          <div className="bottom navbar-brand">
            <img alt="react" style={{ height: 60, marginRight: 10, marginLeft: 10 }} src="https://i.pinimg.com/originals/49/1e/79/491e79255c0f295fd777b895c82495e8.jpg"></img>
            <b>Clicky Game!</b>
          </div>
        </Footer>
      </Wrapper>
    );
  }
}

export default App;
