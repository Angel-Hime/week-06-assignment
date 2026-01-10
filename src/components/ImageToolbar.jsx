import { useEffect } from "react";

export default function ImageToolbar({
  setBigPicture,
  searchQuery,
  bigPicture,
  images,
  setImages,
  setBiggerPicture,
  setIsModalOpen,
  submitSearch,
  setSubmitSearch,
  page,
  setTotalPages,
}) {
  // - fetch data from the API - https://week-6-api.vercel.app/api/images (array of objects id, title, url, alt) (REMEMBER THAT UNSPLASH IS AN OBJECT OF AN ARRAY OF OBJECTS SO YOU MUST USE data.results FOR UNSPLASH!!!!!)

  //placeholder --> this will be form value when search bar complete <-- remember this will be from a component

  useEffect(() => {
    async function getData() {
      //   const response = await fetch(
      //     `https://week-6-api.vercel.app/api/${import.meta.env.VITE_API_KEY}`
      //   );
      const currentPage = page;
      const searchInput = searchQuery;
      console.log(searchInput);
      const url = `https://api.unsplash.com/search/photos?page=${currentPage}&query=${searchInput}&client_id=${
        import.meta.env.VITE_API_KEY
      }`;
      console.log(url);
      const response = await fetch(url); //!MAKE SURE TO CHANGE OUR .ENV
      console.log(response);
      const data = await response.json();
      //   setImages(data);
      setImages(data.results); //! MAKE SURE TO USE THIS
      console.log(data.results);
      setTotalPages(data.total_pages);
    }
    getData();
  }, [
    searchQuery,
    setImages,
    submitSearch,
    setSubmitSearch,
    page,
    setTotalPages,
  ]);
  // - once it is fetched, put it in state

  function handleKeyDown(item) {
    if (event.key === "Enter") {
      handleClick(item);
    }
  }

  function handleClick(item) {
    // console.log({ bigPicture });

    console.log({ bigPicture });
    setBiggerPicture(item);
    setIsModalOpen(true);
  }

  function handleGalleryView(item) {
    setBigPicture(item);
  }

  return (
    <>
      {/* thumbnail container. showing images with .map (dont forget the key) */}
      <div
        className="row-start-1 row-end-2 col-start-2 col-end-5 overflow-x-auto  m-w-200 h-35 min-h-15 content-center-safe self-center justify-self-center rounded-2xl 
        mt-20
        cursor-pointer
        focus:outline-2 focus:  outline-offset-2 focus:outline-violet-500 focus:drop-shadow-violet-500
        shadow-2xl shadow-violet-300"
      >
        {images ? (
          <>
            {/* individual image div */}
            <div className="h-30 flex direction-flex-row gap-2 ml-5 mr-5">
              {images.map((item) => (
                <img
                  tabIndex={"0"}
                  onKeyDown={() => handleKeyDown(item)}
                  onClick={() => handleClick(item)}
                  onMouseEnter={() => handleGalleryView(item)}
                  onMouseLeave={() => handleGalleryView}
                  onFocus={() => handleGalleryView(item)}
                  className="rounded-2xl z-10  cursor-zoom-in 
                  hover:drop-shadow-2xl hover:drop-shadow-violet-500 hover:h-29 
                  focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 focus:drop-shadow-2xl  
                  focus:drop-shadow-violet-500
                  focus:h-29"
                  key={item.id}
                  alt={item.alt_description}
                  src={item.urls.thumb}
                />
              ))}
            </div>{" "}
          </>
        ) : (
          <div
            className=" h-35 flex direction-flex-row gap-2 ml-5 mr-5 self-center justify-self-center rounded-2xl 
            shadow-2xl shadow-violet-300"
          >
            <p className="text-violet-400 self-center text-sm font-serif md:text-3xl p-10 text-center">
              Enter Search Term Using The Search Function...
            </p>
          </div>
        )}
      </div>
    </>
  );
}
