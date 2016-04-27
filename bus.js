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

var income = document.getElementById("income").getContext("2d");
new Chart(income).Bar(barData);

var barData = {
	labels : allPics[i],
	datasets : [
		{
			fillColor : "#48A497",
			strokeColor : "#48A4D1",
			data : allPics.timesShown[i]
		},
		{
			fillColor : "rgba(73,188,170,0.4)",
			strokeColor : "rgba(72,174,209,0.4)",
			data : allPics.timesClicked[i]
		}

	]
}

var counter = 0;

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

function appendDivs(){
  var divOne = document.getElementById('divOne');
  var divTwo = document.getElementById('divTwo');
  var divThree = document.getElementById('divThree');

  divOne.innerHTML = '';
  divTwo.innerHTML = '';
  divThree.innerHTML = '';

  var imgOne = document.createElement('img');
  var arrayElement = makeRandomImage();
  imgOne.src = allPics[arrayElement].filePath;
  imgOne.id = allPics[arrayElement].imageName;
  allPics[arrayElement].timesShown++;
  divOne.appendChild(imgOne);

  var imgTwo = document.createElement('img');
  var arrayElementTwo = makeRandomImage();
  while (arrayElementTwo === arrayElement) {
    arrayElementTwo = makeRandomImage();
  }
  imgTwo.src = allPics[arrayElementTwo].filePath;
  imgTwo.id = allPics[arrayElementTwo].imageName;

  allPics[arrayElementTwo].timesShown++;
  divTwo.appendChild(imgTwo);

  var imgThree = document.createElement('img');
  var arrayElementThree = makeRandomImage();
  while (arrayElementThree === arrayElementTwo || arrayElementThree === arrayElement) {
    arrayElementThree = makeRandomImage();
  }
  imgThree.src = allPics[arrayElementThree].filePath;
  imgThree.id = allPics[arrayElementThree].imageName;

  allPics[arrayElementThree].timesShown++;
  divThree.appendChild(imgThree);
}

function clickHandler(event){
  console.log(event.target.id);
  counter++;
  for(i = 0; i < allPics.length; i++){
    if(allPics[i].imageName === event.target.id){
      allPics[i].timesClicked++;
    }
  }
  appendDivs();
}

if(counter < 25){
  appendDivs();
} else{
  var divBut = document.getElementById('clickMore');
  var butOne = document.createElement('button');
  butOne.innerHTML('See Results!');
  divBut.appendChild(butOne);
      // add events attached to two buttons
      // those events should have event handlers
}



var el = document.getElementById('divOne');
el.addEventListener('click', clickHandler);

// var elButton = document.getElementById('results');
// elButton.addEventListener('click', buttonHandler);

appendDivs();
