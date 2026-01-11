export default function ImageModal({ biggerPicture, setIsModalOpen }) {
  document.onkeydown = (push) => {
    if (push.key === "Escape") {
      setIsModalOpen(false);
    }
  };
  return (
    //TODO: create a modal to display image in full screen
    <div
      // onKeyDown={() => handleEsc}
      id="imageModal"
      className="block fixed z-1000 left-0 top-0 w-screen h-screen overflow-auto "
    >
      <section className="relative grid grid-cols-3 grid-rows-3 content-center">
        <img
          className="col-start-1 col-end-4 row-start-1 row-end-4 justify-self-center max-w-screen max-h-screen"
          src={biggerPicture.urls.full}
          alt={biggerPicture.alt_description}
        />
        <button
          className="top-10 left-10 absolute bg-[#46424269] rounded-sm cursor-pointer 
          hover:drop-shadow-2xl hover:drop-shadow-violet-500 hover:bg-[#cbc2c269]
          focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 focus:drop-shadow-2xl     focus:drop-shadow-violet-500"
          onClick={() => setIsModalOpen(false)}
        >
          <img
            className="min-h-6 min-w-6 max-h-8 max-w-8 p-2"
            src="/icons/scale-down.png"
            alt="minimize"
          />
        </button>
      </section>
    </div>
  );
}
