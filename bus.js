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

var counter = 0;

function ImageObject(imageName, filePath){
  this.imageName = imageName;
  this.filePath = filePath;
  this.timesShown = 0;
  this.timesClicked = 0;
  allPics.push(this);
}

ImageObject.prototype.incrementTimesShown = function() {
  return timesShown += 1;
};

//making a random number
function makeRandomImage(){
  return Math.floor(Math.random() * allPics.length);
}


//function for generating pictures into the empty div elements
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
  if(counter < 25){
    appendDivs();
  }
  else if(counter === 25){
    clickSet();
  }
  // clickSet();
  // appendDivs();
}

function clickSet(){

document.getElementById('clickMore').style.visibility = 'visible';
document.getElementById('showGraph').style.visibility = 'visible';
  var imgDivs = document.getElementsByClassName('imgDiv');
  imgDivs[0].style.display = 'none';
  imgDivs[1].style.display = 'none';
  imgDivs[2].style.display = 'none';
}

function newTriesHandler(){
  counter = 0;
  var imgDivs = document.getElementsByClassName('imgDiv');
  imgDivs[0].style.display = 'inline-flex';
  imgDivs[1].style.display = 'inline-flex';
  imgDivs[2].style.display = 'inline-flex';
  document.getElementById('showGraph').style.visibility = 'hidden';
  document.getElementById('clickMore').style.visibility = 'hidden';
  appendDivs();
}

//setting up local storage
(function checkStorage(){
  if(localStorage.imgData){
    console.log('data exists');
    var parsedImageData = JSON.parsed(localStorage.imgData);
    for( var i = 0; i < allPics.length; i++){
      parsedImageData[i].incrementTimesShown = function() {
        return timesShown += 1;
      };
    }
    allPics = parsedImageData;
  } else{
    console.log('storage does not exist');
  }
})();

//rendering the canvas chart
function renderChart(){
  var names = [];
  var xClicked = [];
  console.log('hey cutie pie');
  for (i = 0; i < allPics.length; i++){
    names.push(allPics[i].imageName);
    xClicked.push(allPics[i].timesClicked);
  }

  var data = {
    labels: names,
    datasets: [
      {label: 'times clicked',
      backgroundColor:'#ff8000',
      strokeColor:'#ff8000',
      data: xClicked,
    }],
  };

  var ctx = document.getElementById('myChart');
  var myChart = new Chart(ctx, {
    type:'bar',
    data: data,
    // options :{
    //   responsive:false
  });
}

localStorage.setItem('imgData', JSON.stringify(allPics));

// generating new random images after each click
var el = document.getElementById('divOne');
el.addEventListener('click', clickHandler);
var elTwo = document.getElementById('divTwo');
elTwo.addEventListener('click', clickHandler);
var elThree = document.getElementById('divThree');
elThree.addEventListener('click', clickHandler);

//click event to give user 25 new clicks
var clickEl = document.getElementById('clickMore');
clickEl.addEventListener('click', newTriesHandler);
var elChart = document.getElementById('showGraph');
elChart.addEventListener('click', renderChart);

appendDivs();
// renderChart();
