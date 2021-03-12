//adding an image blob with fetch --- done
//need to add something to handle errors --- done
//convert the blob into the format that the dom element expects
console.log('about to fetch  a rainbow');

//using js async and await features to allow us to handle promises
catchRainbow()
  .then(response => {
    console.log('Hey it works');
  })
  .catch(error => {
    console.log('error!');
    console.error(error);
  });

async function catchRainbow() {
  const response = await  fetch('rainbow.jpg');
  const blob = await response.blob();
  document.getElementById('rainbow').src =  URL.createObjectURL(blob);
}

/* fetch('rainbow.jpg').then(response => {
   console.log(response);
   return response.blob();
 }).then(blob => {
   console.log(blob);
   document.getElementById('rainbow').src = URL.createObjectURL(blob);
 })*/

//fetching multiple images
const filenames = [
  'phone-boot.jpeg',
  'waterfall-bali.jpg',
  'coffee.jpg',
  'boat.jpg'
];

catchImages(filenames)
  .then(response => {
    console.log('multiple images works fine');
  })
  .catch(error => {
    console.log('error!');
    console.error(error);
  });
async function catchImages(filenames) {
  for (let filename of filenames) {
    const response = await fetch(filename);
    const blob = await response.blob();
    const img = document.createElement('img');
    img.src = URL.createObjectURL(blob);
    img.width = '200';
    img.style = 'margin:15';
    document.body.append(img);
  }
}

catchPoem()
  .then(poem => {
    document.getElementById('poem').innerText = poem;
    console.log('Hey it works');
  })
  .catch(error => {
    console.log('error!');
    console.error(error);
  });

async function catchPoem() {
  const response = await fetch('poem.txt');
  return await response.text();
}
