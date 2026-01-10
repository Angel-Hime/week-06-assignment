export default function Nav({
  //   bigPicture,
  //   setIsModalOpen,
  isSearchOpen,
  setIsSearchOpen,
  //   setBiggerPicture,
}) {
  //   function toggleModal() {
  //     setIsModalOpen(true);
  //     setBiggerPicture(bigPicture);
  //   }
  function toggleSearchModal() {
    if (isSearchOpen) {
      setIsSearchOpen(false);
    } else if (!isSearchOpen) {
      setIsSearchOpen(true);
    }
  }
  return (
    <nav className="col-start-1 col-end-2 row-start-1 row-end-2 max-h-50">
      {/* SEARCH BUTTON */}
      <button
        className="top-10 left-10 md:top-25 md:left-20 absolute bg-[#d8d0d0cf] rounded-sm cursor-pointer 
        hover:bg-[#d8d0d0] hover:drop-shadow-2xl hover:drop-shadow-violet-500 
        focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 focus:drop-shadow-2xl     focus:drop-shadow-violet-500"
        onClick={() => toggleSearchModal()}
      >
        <img
          className="h-10 md:h-20 p-2 "
          src="public/icons/search.png"
          alt="Enlarge Image"
        />
      </button>
      {/* Button to fullscreen image */}
      {/* {bigPicture.urls ? (
        <button
          className=" top-10 left-10 absolute bg-[#46424269] hover:bg-[#fcfafa6e] rounded-sm z-10"
          onClick={() => toggleModal()}
        >
          <img
            className="min-h-6 min-w-6 max-h-8 max-w-8 p-2 hover:h-8"
            src="public/icons/scale_up.png"
            alt="Enlarge Image"
          />
        </button>
      ) : null} */}
    </nav>
  );
}
