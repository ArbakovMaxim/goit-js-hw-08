import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const allGalleryEl = document.querySelector('.gallery');

const galleryEl = galleryItems.map(galleryItem => {

return      `<div>
            <a class="gallery__item" href="${galleryItem.original}">
                <img class="gallery__image" 
                    src="${galleryItem.preview}" 
                    alt="" title="${galleryItem.description}" />
            </a>
            </div>`
}).join('');

allGalleryEl.insertAdjacentHTML("afterbegin", galleryEl);

const lightbox = new SimpleLightbox('.gallery a', {captionDelay : 250});


//закрытие с помощью Escape

window.addEventListener("keydown", closeModalKeydown);

function closeModalKeydown(event){
    if(event.code !== "Escape"){
    return
    }
    lightbox.close()
  }