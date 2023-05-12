import { galleryItems } from "./gallery-items.js";
// Change code below this line
const list = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class='gallery__item'>
     <a class='gallery__link' href='${original}'> 
     <img src='${preview}' alt='${description}'/>
     </a>
     </li>`
  )
  .join("");

list.insertAdjacentHTML("afterbegin", markup);

list.addEventListener("click", simpleLightboxFunc);

function simpleLightboxFunc(event) {
  event.preventDefault();
  const instance = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionsDelay: 250,
  });
}
