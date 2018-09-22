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
    images
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const images = this.state.images.filter(image => image.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ images });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <NavBar>
          <a class="navbar-brand" href="/"><b>Clicky Game</b></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          
            <div class>Click an image to begin!</div>
            <div>
              "Score: "
              "0"
              " | Top Score: "
              "0"
            </div>
          
        </NavBar>
        <Header>
          <h1>Clicky Game!</h1>
          <h2>Click on an image to earn points, but don't click on any more than once!</h2>
        </Header>
        {this.state.images.map(image => (
          <ImageCard
            removeFriend={this.removeFriend}
            id={image.id}
            key={image.id}
            name={image.name}
            image={image.image}
            occupation={image.occupation}
            location={image.location}
          />
        ))}
        <Footer>
          <div className="bottom">
            "Clicky Game! "
            <img alt="react" src="logo.svg"></img>
          </div>
        </Footer>
      </Wrapper>
    );
  }
}

export default App;
