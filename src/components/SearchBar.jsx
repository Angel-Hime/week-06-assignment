export default function SearchBar({
  setIsSearchOpen,
  //   searchQuery,
  setSearchQuery,
  //   setSubmitSearch,
}) {
  //   function search() {
  //     event.preventDefault();
  //     setSearchQuery();
  //     console.log(`You Searched For: '${searchQuery}'`);
  //     setSubmitSearch(true);
  //     // const query = formData.get("query");
  //     //we need to get this value into our api url in the ImageToolbar component
  //     // handleChange(query);
  //   }
  //   function handleChange() {
  //      //this currently shows the previous value; I need to figure out how to delay the posting so the change effects the value immediately - onChange
  //   }

  return (
    <div className="block fixed z-1000 top-1/4 w-screen h-25 overflow-auto bg-[#e83232ba]">
      <section className="relative grid grid-cols-3 grid-rows-2 content-center">
        <form
          onSubmit={() => setIsSearchOpen(false)}
          id="searchForm"
          className="col-start-1 col-end-4 row-start-2 row-end-3 self-center justify-self-center w-1/2 min-w-1/5 max-w-screen"
        >
          <div className="flex flex-row gap-2">
            <input
              onChange={(e) => setSearchQuery(e.target.value)}
              //  searches as you type
              name="query"
              required={true}
              placeholder="Search for new images..."
              className="bg-white w-1/2  placeholder:ml-10 "
            ></input>
            {/* submit closes modal instead of submitting form to anything*/}
            <button
              type="submit"
              className="bg-[#4bbb9769] hover:bg-[#fcfafa6e] rounded-sm pl-2 pr-2"
            >
              Search
            </button>
          </div>
        </form>
        {/* <button
          className="top-5 left-10 absolute bg-[#dfd6d669] hover:bg-[#fcfafa6e] rounded-sm z-10"
          
        >
          ❌
        </button> */}
      </section>
    </div>
  );
}
