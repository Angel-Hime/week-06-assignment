export default function Nav({ isSearchOpen, setIsSearchOpen }) {
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
          src="/icons/search.png"
          alt="Search For New Images"
        />
      </button>
    </nav>
  );
}
