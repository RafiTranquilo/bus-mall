var allPics = [];

var bag = new ImageObject('bag', 'images/bag.jpg');
var banana = new ImageObject('banana', 'images/banana.jpg');
var bathroom = new ImageObject('bathroom', 'images/bathroom.jpg');
var boots = new ImageObject('boots', 'images/boots.jpg');
var breakfast = new ImageObject('breakfast', 'images/breakfast.jpg');
var bubblegum = new ImageObject('bubblegum', 'images/bubblegum.jpg');
var chair = new ImageObject('chair', 'images/chair.jpg');
var cthulhu = new ImageObject('cthulhu', 'images/cthulhu.jpg');
var dogDuck = new ImageObject('dog-duck', 'images/dog-duck.jpg');
var dragon = new ImageObject('dragon', 'images/dragon.jpg');
var pen = new ImageObject('pen', 'images/pen.jpg');
var petSweep = new ImageObject('pet-sweep', 'images/pet-sweep.jpg');
var scissors = new ImageObject('scissors', 'images/scissors.jpg');
var shark = new ImageObject('shark', 'images/shark.jpg');
var sweep = new ImageObject('sweep', 'images/sweep.png');
var tauntaun = new ImageObject('tauntaun', 'images/tauntaun.jpg');
var unicorn = new ImageObject('unicorn', 'images/unicorn.jpg');
var usb = new ImageObject('usb', 'images/usb.gif');
var waterCan = new ImageObject('water-can', 'images/water-can.jpg');
var wineGlass = new ImageObject('wine-glass', 'images/wine-glass.jpg');

function ImageObject(imageName, filePath){
  this.imageName = imageName;
  this.filePath = filePath;
  this.timesShown = 0;
  this.timesClicked = 0;
  allPics.push(this);
}

ImageObject.prototype.incrementTimesShown = function() {
  return this.timesShown += 1;
};

function makeRandomImage(){
  return Math.floor(Math.random() * allPics.length);
}

var divOne = document.getElementById('divOne');
var divTwo = document.getElementById('divTwo');
var divThree = document.getElementById('divThree');

var imgOne = document.createElement('img');
var arrayElement = makeRandomImage();
imgOne.src = allPics[arrayElement].filePath;
divOne.appendChild(imgOne);

var imgTwo = document.createElement('img');
var arrayElementTwo = makeRandomImage();
while (arrayElementTwo === arrayElement) {
  arrayElementTwo = makeRandomImage();
}
imgTwo.src = allPics[arrayElementTwo].filePath;
divTwo.appendChild(imgTwo);

var imgThree = document.createElement('img');
var arrayElementThree = makeRandomImage();
while (arrayElementThree === arrayElementTwo && arrayElement) {
  arrayElementThree = makeRandomImage();
}
imgThree.src = allPics[arrayElementThree].filePath;
divThree.appendChild(imgThree);

var elClick = document.getElementById('divOne').addEventListener('click', clickCount());

function clickCount(){
  this.timesClicked + 1;
  // console.log(this.timesClicked);
}
