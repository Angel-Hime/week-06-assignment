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

  const [bigPicture, setBigPicture] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("frog");
  const [images, setImages] = useState([]);
  const [biggerPicture, setBiggerPicture] = useState([]);
  const [submitSearch, setSubmitSearch] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState([]);

  //   //TODO: create a modal to display a search bar

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
              page={page}
              setPage={setPage}
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
              setTotalPages={setTotalPages}
            />

            <GalleryViewImage
              bigPicture={bigPicture}
              biggerPicture={biggerPicture}
              setBiggerPicture={setBiggerPicture}
              images={images}
              isSearchOpen={isSearchOpen}
            />
            {isSearchOpen && (
              <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                isSearchOpen={isSearchOpen}
                setIsSearchOpen={setIsSearchOpen}
                setSubmitSearch={setSubmitSearch}
                page={page}
                setPage={setPage}
                setTotalPages={setTotalPages}
                totalPages={totalPages}
              />
            )}
          </>
        ) : null}
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
