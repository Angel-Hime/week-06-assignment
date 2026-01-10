REFLECTION

Ultimately, I think I would be grateful to know if there was just a more efficient way of doing what I have done please.

With the search bar I was only really able to do 'active' searching, which loaded new pictures as you type but I understand that this means continuous requests and would ultimately cause things to run slowly in practice. I would be grateful for some notes as to how I could do a single search bar which would provide images only when the submit event takes place.

I had to use event.key for tabbing through and opening with enter or minimizing with space. I read that the 'event' part of this is depricated code; however, I couldn't find any other way to do it during my searches; I think the problem that I came across in my research was that there was a lot of older js common code and not js module code.

REQUIREMENTS AND STRETCH GOALS

🎯 Implement the useState hook to manage gallery state (e.g. selected image). - determining which image we are looking at

    ✔️ Images shown in the toolbar can be enlarged by clicking on them

🎯 Use useEffect for initial fetching of images from an external API. - unsplash but do the week-6-vercel api link

    ✔️ Images from the API are obtained and used in the App

🎯 Return JSX from multiple components (e.g., an ImageItem component for each image and a Gallery component to display them).

    ✔️ Nav, ImageToolbar, ImageModal, GalleryViewImage, PENDING: SearchBar

🎯 Use the .map() function to render an array of images dynamically - map through them show them in toolbar

    ✔️ Images from the API are shown in the toolbar

🎯 Implement functionality to display a larger version of an image when its thumbnail is clicked. - on click to make modal

    ✔️ Version 1.0. - Images hovered over can be shown on the main screen as enlarged versions
    ✔️ Version 2.0 - Images are displayed in a modal as full screen image

🎯 Ensure all images have meaningful alt text. - alt text is there!

    ✔️ The alt text is already in the API, I have used it for all images

🎯 Ensure basic keyboard navigation for image selection (e.g., thumbnails should be focusable and activatable with Enter/Space).

    ✔️ Aria tagging for the layers of the toolbar and tab, enter to fullscreen an image from the toolbar, and escape to escape fullscreen

🏹 Use useEffect and the dependancy array to update the images when the user types in an input field.

    ✔️ - onChange used to construct an active search bar for this stretch goal

🏹 Set up an Unsplash application that you can fetch from your React app.

    ✔️ - I have the API so I think I did this?

🏹 Use .env to hide your API keys and tokens from the code.

    ✔️ - API key is in .env and .env is in the .gitignore

🏹 Style the application excellently, using grid or flex and positioning.

    ✔️ - make it look good with tailwindcss

ATTRIBUTIONS

scale up
<a href="https://www.flaticon.com/free-icons/full-screen" title="full screen icons">Full screen icons created by Freepik - Flaticon</a>

scale down
<a href="https://www.flaticon.com/free-icons/shrink" title="shrink icons">Shrink icons created by Mayor Icons - Flaticon</a>

search
<a href="https://www.flaticon.com/free-icons/searching-bar" title="searching bar icons">Searching bar icons created by Wahyu.Setyanto - Flaticon</a>

SOURCES
