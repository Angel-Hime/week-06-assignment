export default function SearchBar({
  setIsSearchOpen,
  //   searchQuery,
  setSearchQuery,
  setPage,
  page,
  //   setSubmitSearch,
}) {
  function handlePrevPage() {
    setPage(page + 1);
  }
  function handleNextPage() {
    setPage(page - 1);
  }
  return (
    <div
      className=" row-start-2 row-end-3 col-start-2 col-end-5 z-1000 h-25 rounded-2xl mt-10 shadow-2xl shadow-violet-300 
    drop-shadow drop-shadow-violet-300
    grid grid-cols-5 grid-rows-3 items-center overflow-hidden"
    >
      {/*page left*/}
      <button
        className="col-start-1 col-end-2 row-start-2 row-end-3 bg-[#d8d0d0cf] p-2 rounded-2xl cursor-pointer 
        hover:bg-[#d8d0d0] hover:shadow-2xl hover:shadow-violet-500 
        focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 focus:shadow-2xl     focus:shadow-violet-500 text-sm md:w-20 self-center justify-self-center"
        onClick={() => handlePrevPage}
      >
        {" "}
        Prev Page{" "}
      </button>
      <button
        className="col-start-5 col-end-6 row-start-2 row-end-3 bg-[#d8d0d0cf] p-2 rounded-2xl cursor-pointer 
      hover:bg-[#d8d0d0] hover:shadow-2xl hover:shadow-violet-500 
        focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 focus:shadow-2xl     focus:shadow-violet-500 text-sm md:w-20 self-center justify-self-center"
        onClick={() => handleNextPage}
      >
        {" "}
        Next Page{" "}
      </button>
      {/*page right*/}
      <section className="w-vw col-start-2 col-end-5 row-start-2 row-end-3">
        <form
          onSubmit={() => setIsSearchOpen(false)}
          id="searchForm"
          className="w-vw self-center justify-self-center min-w-1/5 max-w-200 "
        >
          <div className="bg-white rounded-2xl w-vw p-1 flex flex-row gap-4 justify-center  focus:outline-offset-0 focus:outline-white">
            <input
              onChange={(e) => setSearchQuery(e.target.value)}
              //  searches as you type
              name="query"
              required={true}
              placeholder="Search for new images..."
              className=" w-4/5 md:w-8/12 p-2 rounded-2xl "
            ></input>
            {/* submit closes modal instead of submitting form to anything*/}
            <button
              type="submit"
              className="bg-[#d8d0d0cf] pl-2 pr-2 rounded-2xl cursor-pointer 
            hover:bg-[#d8d0d0] hover:shadow-2xl hover:shadow-violet-500 
              focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 focus:shadow-2xl     focus:shadow-violet-500 text-sm md:w-20"
            >
              Search
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
