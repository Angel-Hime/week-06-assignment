import { useEffect, useState } from "react";

export default function ImageToolbar({ setBigPicture }) {
  //const page = 1;
  //const searchInput = 'dog'; //placeholder --> this will be form value when search bar complete <-- remember this will be from a component
  const [images, setImages] = useState([]);
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
    getData(); // this needs to be call when the search button is clicked
  }, []);
  // - once it is fetched, put it in state

  function handleClick(item) {
    setBigPicture(item);
  }

  return (
    <>
      {/* thumbnail container. showing images with .map (dont forget the key) */}
      <div className="row-start-1 row-end-2 col-start-2 col-end-5 overflow-x-auto w-200 m-w-100 h-35 min-h-15 content-center-safe self-center justify-self-center rounded-2xl">
        {/* individual image div */}
        <div className="h-30 flex direction-flex-row gap-2 ml-10">
          {images.map((item) => (
            <img
              onClick={() => handleClick(item)}
              className="rounded-2xl hover:drop-shadow-2xl hover:drop-shadow-amber-950  hover:h-29 z-10 cursor-pointer  hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700"
              key={item.id}
              src={item.url}
              alt={item.alt}
            />
            //   <img key={item.id} src={item.urls.thumb} />
            // we can do a smaller one with other dot notations
          ))}
        </div>
      </div>
    </>
  );
}
