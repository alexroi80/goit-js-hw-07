import { galleryItems } from "./gallery-items.js";
// Change code below this line
const list = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class='gallery__item'>
     <a class='gallery__link' href='${original}'> 
     <img class = 'gallery__image' src='${preview}' data-source='${original}' alt='${description}'/>
     </a>
     </li>`
  )
  .join("");

list.insertAdjacentHTML("afterbegin", markup);

list.onclick = (event) => {
  event.preventDefault();
  console.log(event.target.nodeName);
  if (event.target.nodeName !== "IMG"){
    return;
  }
  const lightbox = basicLightbox.create(
    `<img width="1400" height="900" src='${event.target.dataset.source}'>`, {
      onShow: () => document.addEventListener("keydown", instanceClose),
      onClose: () => document.removeEventListener("keydown", instanceClose),
    });

  lightbox.show();


  function instanceClose(event) {
    if (event.code === "Escape") {
      lightbox.close();
    }
  }
};
