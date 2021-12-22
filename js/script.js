const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  
  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;
  
  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();

var textArray = [
  '#fortnite',
  '# # #',
  'ABCDEFG',
  'Ala ma kota',
  '❤',
  'Mama',
  'tata',
  '2+2=4',
  'cześć',
  '<3',
  '🐶',
  '🐈',
  '💩',
  '🦊',
  '☁',
  '🛸',
  '🛸',
  '🛸',
  'MAMA',
  ' # ',
  '҉',
  '҈',
  'Ѿ',
  '🌞'
];

var randomIndex = Math.floor(Math.random()*textArray.length);
document.getElementById("chalk").innerHTML = textArray[randomIndex];
document.getElementById("chalk").style.transform = "rotate("+(Math.floor(Math.random() * 361))+"deg)";


var sumFactors = new Array();
var index = 0;
for(var i=0;i<9;i++)
for(var j=i;j<12;j++)
{
  sumFactors[index] =  new Array(i+1+' +',i+2+' +',~~((j+6)/2),Math.round((j+8)/2)+i);
  index++;
}

function run() {
  $('#loader').load('container/container.html', function() {
    
    const elementFirst = document.getElementById("firstPart");
    const elementSecond = document.getElementById("secondPart");
    const elementFixed = document.getElementById("fixedPart");
    const elementSum = document.getElementById("sum");
    const elementEquals = document.getElementById("equals");
    const elementBin = document.getElementById("bin");
    
    var random = Math.floor(Math.random()*sumFactors.length);
    
    var elementValues = sumFactors[random];
    
    if(elementValues==='undefined') 
    {
      console.log('ev:'+elementValues);
      elementValues = sumFactors[Math.floor(Math.random()*sumFactors.length)];
      console.log('ev:'+elementValues);
    }
    elementFirst.textContent = elementValues[0];
    elementSecond.textContent = elementValues[1];
    elementFixed.textContent = elementValues[2];
    elementSum.textContent = elementValues[3];
    
    //
    elementFirst.addEventListener("dragstart", function(event) {
      drag(event)
    }, false);
    
    //
    /*elementFirst.addEventListener('ondragover', function(event) {
      allowDrop(event)
    }, false);*/
    
    //
    elementSecond.addEventListener("dragstart", function(event) {
      drag(event)
    }, false);
    
    //
    /*elementSecond.addEventListener('ondragover', function(event) {
      allowDrop(event)
    }, false);*/
    
    //
    elementBin.addEventListener("dragleave", function(event) {
      drop(event)
    }, false);
    
    elementBin.addEventListener('ondragover', function(event) {
      allowDrop(event)
    }, false);
    
    function allowDrop(ev) {
      ev.preventDefault();
    }
    
    function drag(ev) {
      ev.dataTransfer.setData("text", ev.target.id);
    }
    
    function drop(ev) {
      ev.preventDefault();
      //var data = ev.dataTransfer.getData("text");
      var data = ev.dataTransfer.getData("text/plain");
      var temp = document.getElementById(data);
      console.log("data:"+data);
      console.log("temp:"+temp);
      if(
        (parseInt(elementFirst.textContent)+parseInt(elementSecond.textContent)+parseInt(elementFixed.textContent)
        -parseInt(temp.textContent))==parseInt(elementSum.textContent)) 
        {
          elementSum.style.backgroundColor = "lime";
          elementFirst.style.backgroundColor = "lime";
          elementSecond.style.backgroundColor = "lime";
          elementFixed.style.backgroundColor = "lime";
          elementEquals.textContent = "=";
          document.getElementById("container").classList.remove('container');
          document.getElementById("container").classList.add('containerWithout'+data);
          document.getElementById(data).remove();
        }
        
    }
  });
}


