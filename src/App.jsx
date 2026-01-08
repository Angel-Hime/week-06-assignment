//! DO NOT PUT ALL YOU CODE IN JUST APP.jsx
//! USE COMPONENTS
// - images container
// - single image
// - larger image
// - ui buttons (left and right)

import { useEffect } from "react";

// imports

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
  // - when a user presses a button that should switch the image (left and right)

  return (
    <>
      {/* super basic */}

      <h1>Gallery</h1>
      <div>
        thumbnail container. showing images with .map (dont firget the key)
        return (
        <div>
          <h1>images here:</h1>
          {images.map((item) => (
            <img key={item.id} src={item.url} alt={item.alt} />
            // {images.map((item) => (
            //   <img key={item.id} src={item.urls.thumb} />
            // we can do a smaller one with other dot notations
          ))}
        </div>
        );
      </div>

      <div>big image or modal for focus image (conditional rendering)</div>
    </>
  );
}

export default App;
