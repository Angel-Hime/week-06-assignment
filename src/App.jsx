// imports

import { useState } from "react";
import "./App.css";

import ImageModal from "./components/ImageModal";
import ImageToolbar from "./components/ImageToolbar";
import GalleryViewImage from "./components/GalleryViewImage";
import Nav from "./components/Nav";

//! DO NOT PUT ALL YOU CODE IN JUST APP.jsx
//! USE COMPONENTS
// - images container
// - single image
// - larger image
// - ui buttons (left and right)

// Start with a wire frame: build react app UI first then start coding

function App() {
  //TODO: state

  // effects
  // - fetch data from the API - https://week-6-api.vercel.app/api/images (array of objects id, title, url, alt) (REMEMBER THAT UNSPLASH IS AN OBJECT OF AN ARRAY OF OBJECTS SO YOU MUST USE data.results FOR UNSPLASH!!!!!)

  //functions (event handlers)
  // - when a user clicks an image (update state)
  // remember that you can feed handlers through to other components
  // - when a user presses a button that should switch the image (left and right)

  const [bigPicture, setBigPicture] = useState([]);
  const [biggerPicture, setBiggerPicture] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // function handleSearchClick() {
  //   //TODO: create a modal to display a search bar
  // }

  // function handleMinimizeClick() {
  //   setBiggerPicture(null);
  // }
  return (
    <>
      {/* super basic layout - REMEMBER TO MOVE THIS STUFF*/}
      {/* main div */}
      <div className="grid grid-cols-5 grid-rows-4">
        {/*  */}
        <Nav
          bigPicture={bigPicture}
          setBigPicture={setBigPicture}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          biggerPicture={biggerPicture}
          setBiggerPicture={setBiggerPicture}
        />
        <ImageToolbar bigPicture={bigPicture} setBigPicture={setBigPicture} />
        <GalleryViewImage
          bigPicture={bigPicture}
          setBigPicture={setBigPicture}
          biggerPicture={biggerPicture}
          setBiggerPicture={setBiggerPicture}
        />
      </div>

      {isModalOpen && (
        <ImageModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          biggerPicture={biggerPicture}
          setBiggerPicture={setBiggerPicture}
        />
      )}
    </>
  );
}

export default App;
