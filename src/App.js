import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import Login from './components/Login';

import {
  BrowserRouter as 
  Router, 
  Route, 
  Switch} from 'react-router-dom';
import ListSong from './components/ListSong';
import NavBar from './components/NavBar';
import CreateSong from './components/CreateSong';
import ViewSong from './components/ViewSong';
import Player from "./components/Player";


function App() {

  const [songs] = useState([
    {
      title: "Black Swan",
      artist: "BTS - Map Of ",
      img_src: "../pics/Black-swan.jpg",
      src: "../songs/Black Swan.mp3"
    },
    {
      title: "Dandelions",
      artist: "Ruth B",
      img_src: "../pics/Dandelions.jpg",
      src: "../songs/Dandelions.mp3"
    },
    {
      title: "Better",
      artist: "Khalid",
      img_src: "../pics/Better.jpg",
      src: "../songs/Better.mp3"
    },
    {
      title: "Baby",
      artist: "Justin Bieber",
      img_src: "../pics/Baby.jpg",
      src: "../songs/Baby.mp3"
    },
    {
      title: "Rare",
      artist: "Selena Gomez",
      img_src: "../pics/rare.jpg",
      src: "../songs/Rare.mp3"
    },
    {
      title: "Positions",
      artist: "Ariana Grande",
      img_src: "../pics/Positions.jpg",
      src: "../songs/Positions.mp3"
    },
    {
      title: "Love Story",
      artist: "Indila",
      img_src: "../pics/LoveStory.jpg",
      src: "../songs/Love Story.mp3"
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);

  return (
    <><div>
      <Router>
        <NavBar />
        <div className="container">
          <Switch>

            <Route path="/" exact component={ListSong}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/songs" component={ListSong}></Route>
            <Route path="/add-song/:id" component={CreateSong}></Route>
            <Route path="/view-song/:id" component={ViewSong}></Route>
            {/*<Route path = "/update-song/:id" component = {UpdateSong}></Route>*/}
          </Switch>
        </div>
      </Router>
    </div>
    <Fragment>
        <div className="App">
          <Player
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            nextSongIndex={nextSongIndex}
            songs={songs} />
        </div>
      </Fragment></>
    
  );
}

export default App;
