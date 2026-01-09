export default function Nav({
  bigPicture,
  setIsModalOpen,

  setBiggerPicture,
}) {
  function toggleModal() {
    setIsModalOpen(true);
    setBiggerPicture(bigPicture);
  }

  return (
    <nav className="row-start-1 row-end-2 col-start-1 col-end-2 max-h-50">
      {/* NEED TO ADD IN A SEARCH BUTTON */}

      {/* Button to fullscreen image */}

      {bigPicture.url ? (
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
      ) : null}
    </nav>
  );
}
