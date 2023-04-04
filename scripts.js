console.log(document.title);


//1.
document.querySelector("#gen-1").innerHTML = 'Generasión 1 Pokimon'

//2.

document.querySelector('.infocard-list').style.backgroundColor = 'aquamarine';

//3. 

console.log(location.href);

//4. 

console.log(location.hostname);

//5. Get a NodeList of all .img-fixed img-sprite elements.

let imagen = document.querySelectorAll('img.img-fixed img-sprite');

console.log(imagen);

//6.  

let images = document.querySelectorAll('img')

images.forEach(img => {
    img.setAttribute('src', 'https://media.giphy.com/media/2v170e71aanfi/giphy.gif');
  });

//*Premium:*
//7.
// document.querySelectorAll('div.infocard a.itype flying').style.backgroundColor = 'blue'; 

