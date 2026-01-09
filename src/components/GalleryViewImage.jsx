export default function GalleryViewImage({ bigPicture }) {
  /* big image (conditional rendering) */
  function handleMouseOver(bigPicture) {
    console.log(bigPicture.alt_description); //make this show the alt text on hover
  }

  return (
    <div className="max-h-1/2 row-start-3 row-end-5 col-start-1 col-end-6 z-0 justify-self-center">
      {bigPicture ? (
        <img
          onMouseOver={() => handleMouseOver()}
          className="h-100"
          // src={bigPicture.url}
          src={bigPicture.urls.raw}
          alt={bigPicture.alt_description}
        />
      ) : null}
    </div>
  );
}
