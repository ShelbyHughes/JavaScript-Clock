var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;

// Getting it to show the current time on the page
var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours
	  if (hours >= noon)
	  {
		  meridian = "PM";
	  }

	  if (hours > noon)
	  {
		  hours = hours - 12;
      }
        // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function() 
{
  var time = new Date().getHours();
  var messageText;
  var image = "url('/img/skysawakw.jpg')";

  var timeEventJS = document.getElementById("timeEvent");
  var imageJS = document.getElementById('Image');
  
  if (time == settime)
  {
    image = "url('img/set-a-timer-on-google-slide(1).jpg')";
    messageText = "Set time!";
  }
  else if (time == wakeuptime)
  {
    image = "url('img/how-to-wake-up-early.png')";
    messageText = "Wake up!";
  }
  else if (time == lunchtime)
  {
    image ="url('img/out_to_lunch-900x675.jpg')";
    messageText = "Let's have some lunch!";
  }
  else if (time == naptime)
  {
    image = "url('img/naptime.jpg')";
    messageText = "Sleep tight!";
  }
  else if (time < noon)
  {
    image = "url('img/Good-Morning-Wishes-1.jpg')";
    messageText = "Good morning!";
  }
  else if (time >= evening)
  {
    image = "url('img/goodnight.jpeg')";
    messageText = "Good night!";
  }
  else
  {
    image = "url('img/goodafternoon.jpg')";
    messageText = "Good afternoon!";
  }

  console.log(messageText); 
  timeEventJS.innerText = messageText;
  imageJS.src = image;
  
  showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval( updateClock, oneSecond);


var setButton = document.getElementById("setTimeButton");

var setEvent = function()
{
    if (settime < 0) 
    {
        settime = new Date().getHours();
        setTimeButton.innerText = "Times Up!";
        setTimeButton.style.backgroundColor = "#0A8DAB";
    }
    else
    {
        settime = -1;
        setTimeButton.innerText = "Set Time!";
        setTimeButton.style.backgroundColor = "#222";
    }
};

setButton.addEventListener("click", setEvent);
setEvent(); 


// Activates Wake-Up selector
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function()
{
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


// Activates Lunch selector
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");

var lunchEvent = function()
{
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);


// Activates Nap-Time selector
var napTimeSelector =  document.getElementById("napTimeSelector");

var napEvent = function()
{
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);
 