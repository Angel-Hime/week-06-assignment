export default function ImageModal({ biggerPicture, setIsModalOpen }) {
  return (
    //TODO: create a modal to display image in full screen
    <div className="block fixed z-1000 left-0 top-0 w-screen h-screen overflow-auto bg-[#fcfafaba]">
      <section className="relative grid grid-cols-3 grid-rows-3 content-center">
        <img
          className="col-start-1 col-end-4 row-start-1 row-end-4 justify-self-center max-w-screen max-h-screen"
          src={biggerPicture.urls.raw}
          alt={biggerPicture.alt_description}
        />
        <button
          className="top-10 left-10 absolute bg-[#46424269] hover:bg-[#fcfafa6e] rounded-sm z-10"
          onClick={() => setIsModalOpen(false)}
        >
          <img
            className="min-h-6 min-w-6 max-h-8 max-w-8 p-2 hover:h-8"
            src="public/icons/scale-down.png"
            alt="minimize"
          />
        </button>
      </section>
    </div>
  );
}
