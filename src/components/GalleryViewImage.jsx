export default function GalleryViewImage({ bigPicture }) {
  /* big image (conditional rendering) */
  function handleMouseOver() {
    console.log("Add the hovering modal to say 'enlarge' or display alt text");
  }

  return (
    <div className="max-h-1/2  bg-blue-400 row-start-3 row-end-5 col-start-1 col-end-6 z-0 justify-self-center">
      <img
        onMouseOver={() => handleMouseOver(bigPicture)}
        className="h-100 m-3 "
        src={bigPicture.url}
        // src={item.urls.thumb} />
        // we can do a smaller one with other dot notations
        alt={bigPicture.alt}
      />
    </div>
  );
}
