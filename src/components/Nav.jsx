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
    <nav className=" max-h-50">
      {/* SEARCH BUTTON */}
      <button
        className=" top-10 right-10 absolute bg-[#46424269] hover:bg-[#fcfafa6e] rounded-sm z-10"
        onClick={() => toggleSearchModal()}
      >
        <img
          className="min-h-6 min-w-6 max-h-8 max-w-8 p-2 hover:h-8"
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
