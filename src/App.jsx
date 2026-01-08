// imports

import { useEffect, useState } from "react";
import "./App.css";
//! DO NOT PUT ALL YOU CODE IN JUST APP.jsx
//! USE COMPONENTS
// - images container
// - single image
// - larger image
// - ui buttons (left and right)

// Start with a wire frame: build react app UI first then start coding

function App() {
  //TODO: state
  // - variable to store API image data
  // - variable to current image
  const [images, setImages] = useState([]);
  // effects
  // - fetch data from the API - https://week-6-api.vercel.app/api/images (array of objects id, title, url, alt) (REMEMBER THAT UNSPLASH IS AN OBJECT OF AN ARRAY OF OBJECTS SO YOU MUST USE data.results FOR UNSPLASH!!!!!)

  //const page = 1;
  //const searchInput = 'dog'; //placeholder --> this will be form value when search bar complete <-- remember this will be from a component

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://week-6-api.vercel.app/api/${import.meta.env.VITE_API_KEY}`
      );
      // const response = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${searchInput}&client_id=${import.meta.env.VITE_API_KEY}`); //!MAKE SURE TO CHANGE OUR .ENV

      const data = await response.json();
      setImages(data);
      // setImages(data.results); //! MAKE SURE TO USE THIS
    }
    getData();
  }, []);
  // - once it is fetched, put it in state

  //functions (event handlers)
  // - when a user clicks an image (update state)
  // remember that you can feed handlers through to other components
  // - when a user presses a button that should switch the image (left and right)

  return (
    <>
      {/* super basic */}
      <div className="grid grid-cols-3 grid-rows-2">
        <h1>Gallery</h1>
        <div className="row-start-1 row-end-2 col-start-2 col-end-3 overflow-scroll max-w-200 left">
          thumbnail container. showing images with .map (dont forget the key)
          <div className="h-30 flex direction-flex-row gap-2 m-2">
            {images.map((item) => (
              <img
                className="p-2 bg-amber-200 rounded-2xl hover:drop-shadow-2xl hover:drop-shadow-amber-950 hover:h-29"
                key={item.id}
                src={item.url}
                alt={item.alt}
              />
              // {images.map((item) => (
              //   <img key={item.id} src={item.urls.thumb} />
              // we can do a smaller one with other dot notations
            ))}
          </div>
        </div>

        <div>big image or modal for focus image (conditional rendering)</div>
      </div>
    </>
  );
}

export default App;
