function counter_fn() {
  const counter = document.getElementById("cntr");
  
  if (counter === null || counter === undefined) {
    return;
  }
  
  let count = 0;
  count = parseInt(counter.innerHTML);
  count = count + 1;
  counter.innerHTML = count;
}

let header = document.querySelector(".navbar");
let content = document.querySelector(".margin-top-me");


function stickyHeader() {
  if (header === null || header === undefined) {
    return;
  }

  if (content === null || content === undefined) {
    return;
  }

  let sticky = header.offsetTop;

  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    content.classList.add("top-padding");
  } else {
    header.classList.remove("sticky");
    content.classList.remove("top-padding");
  }
}

function initLightbox() {
  const targetItem = document.getElementById('lightbox-container');
  const imageset = parseInt(targetItem.getAttribute('data-imageset'));

  if(targetItem === null || targetItem === undefined){
    return;
  }

  for (let id = 0; id < imageset; id++) {
    let imageId = id + 1;
    targetItem.appendChild(lightbox(imageId));
  }
  
}

function lightbox(id) {
  const targetItem = document.getElementById('lightbox-container');

  if(targetItem === null || targetItem === undefined){
    return;
  }

  const imageset = parseInt(targetItem.getAttribute('data-imageset'));
  const defaultPath = '../../asset/image/';
  const mainPath = targetItem.getAttribute('data-mainlocate');
  const subPath = targetItem.getAttribute('data-sublocate');
  const imagePath = defaultPath + mainPath + '/' + subPath + '/' + id + '.jpg';


  const container = document.createElement('div');
  container.className = 'col-6 col-md-3 col-lg-2';

  const link = document.createElement('a');
  link.href = '#img' + id;

  const image = document.createElement('img');
  image.className = 'thumb';
  image.src = imagePath;
  const lightbox = document.createElement('div');
  lightbox.className = "lightbox";
  lightbox.id = 'img' + id;

  const prevButton = document.createElement('a');
  prevButton.className = "light-btn btn-prev";

  if(id === 1) {
    prevButton.href = '#img' + imageset;
  }
  else if (id === imageset) {
    prevButton.href = '#img' + (imageset - 1);
  }
  else {
    prevButton.href = '#img'+ (id - 1);
  }
  prevButton.innerHTML = '&lt;';

  const clostButton = document.createElement('a');
  clostButton.href = '#_';
  clostButton.className = "btn-close";

  const lightboxImage = document.createElement('img');
  lightboxImage.src = imagePath;

  const nextButton = document.createElement('a');
  nextButton.className = "light-btn btn-next";

  if (id === imageset) {
    nextButton.href = '#img' + 1;
  }
  else {
    nextButton.href = '#img'+ (id + 1);
  }
  nextButton.innerHTML = '&gt;';

  container.appendChild(link);
  container.appendChild(lightbox);
  link.appendChild(image);
  lightbox.appendChild(prevButton);
  lightbox.appendChild(clostButton);
  lightbox.appendChild(lightboxImage);
  lightbox.appendChild(nextButton);

  return container;
}

window.onload = function () {
  counter_fn();
  initLightbox();
};;

window.onscroll = function () {
  stickyHeader();
};