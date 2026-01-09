// imports

import { useState } from "react";
import "./App.css";

import ImageModal from "./components/ImageModal";
import ImageToolbar from "./components/ImageToolbar";
import GalleryViewImage from "./components/GalleryViewImage";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";

function App() {
  //TODO: state

  //functions (event handlers)
  // - when a user clicks an image (update state)
  // remember that you can feed handlers through to other components
  // - when a user presses a button that should switch the image (left and right)

  const [bigPicture, setBigPicture] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("pictures");
  const [images, setImages] = useState([]);
  const [biggerPicture, setBiggerPicture] = useState([]);
  const [submitSearch, setSubmitSearch] = useState(false);

  // function handleSearchClick() {
  //   //TODO: create a modal to display a search bar
  // }

  // function handleMinimizeClick() {
  //   setBiggerPicture(null);
  // }
  return (
    <>
      {/* main div */}

      <div className="grid grid-cols-5 grid-rows-4">
        {/*  */}
        {!isModalOpen ? (
          <>
            <Nav
              bigPicture={bigPicture}
              setBigPicture={setBigPicture}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              biggerPicture={biggerPicture}
              setBiggerPicture={setBiggerPicture}
              isSearchOpen={isSearchOpen}
              setIsSearchOpen={setIsSearchOpen}
            />
            <ImageToolbar
              submitSearch={submitSearch}
              setSubmitSearch={setSubmitSearch}
              bigPicture={bigPicture}
              setBigPicture={setBigPicture}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              images={images}
              setImages={setImages}
              isModalOpen={isModalOpen}
              biggerPicture={biggerPicture}
              setBiggerPicture={setBiggerPicture}
              setIsModalOpen={setIsModalOpen}
            />
          </>
        ) : null}
      </div>

      {isSearchOpen && (
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          isSearchOpen={isSearchOpen}
          setIsSearchOpen={setIsSearchOpen}
          setSubmitSearch={setSubmitSearch}
        />
      )}
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
