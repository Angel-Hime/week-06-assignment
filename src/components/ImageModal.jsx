export default function ImageModal({ biggerPicture, setIsModalOpen }) {
  return (
    //TODO: create a modal to display image in full screen
    <div className="block fixed z-1000 left-0 top-0 w-screen h-screen overflow-auto bg-amber-100">
      <section className="relative self-center">
        <img src={biggerPicture.url} alt={biggerPicture.alt} />
        <span
          className="absolute min-h-6 min-w-6 max-h-8 max-w-8"
          onClick={() => setIsModalOpen(false)}
        >
          <img
            className=" min-h-6 min-w-6 max-h-8 max-w-8 p-2 hover:h-8"
            src="public/icons/scale-down.png"
            alt="minimize"
          />
        </span>
      </section>
    </div>
  );
}
