import { galleryItems } from "./gallery-items.js";
// Change code below this line
const list = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class='gallery__item'>
     <a class='gallery__link' href='${original}'> 
     <img src='${preview}' data-source='${original}' alt='${description}'/>
     </a>
     </li>`
  )
  .join("");

list.insertAdjacentHTML("afterbegin", markup);

list.onclick = (event) => {
  event.preventDefault();
  const instance = basicLightbox.create(
    `<img width="1400" height="900" src='${event.target.dataset.source}'>`
  );
  instance.show();

  document.addEventListener("keydown", instanceClose);

  function instanceClose(event) {
    if (event.code === "Escape") {
      instance.close();
    }

    return document.removeEventListener("keydown", instanceClose);
  }
};
