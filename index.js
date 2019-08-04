// console.log('uuid: ', uuidv4());
console.log('hey man!');
console.log(window.location.pathname);

const route = window.location.pathname.split('/').pop();
const homeBlock = document.querySelector('#home');
const galleryBlock = document.querySelector('#gallery');
const imageBlock = document.querySelector('#image');

console.log(route)
if (route === '' || route === '/' || route === 'home') {
  // show home
  console.log('homeBlock: ', homeBlock);
  homeBlock.style = 'display: block';
}

fetch('http://localhost:3000/images')
  .then(res => res.json())
  .then(images => { 
    console.log(images);
    // const div = document.createElement('div');
    images.forEach(image => {
      const img = document.createElement('img');
      img.setAttribute('src', image.src);
      document.body.appendChild(img);
    });

  });

window.onpopstate = () => {
  console.log(window.location.pathname);
  // contentDiv.innerHTML = routes[window.location.pathname];
}