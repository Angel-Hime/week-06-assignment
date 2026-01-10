export default function GalleryViewImage({ bigPicture }) {
  /* big image (conditional rendering) */

  return (
    <div className="max-h-1/2 row-start-3 row-end-5 col-start-1 col-end-6 z-0 justify-self-center">
      {/* conditional on the url having data fed into the bigPicture state from the object array */}
      {bigPicture.urls ? (
        <img
          className="h-100"
          // src={bigPicture.url}
          src={bigPicture.urls.raw}
          alt={bigPicture.alt_description}
        />
      ) : null}
    </div>
  );
}
