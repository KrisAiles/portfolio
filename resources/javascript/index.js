// Assign id's to variables
const backgroundContainer = document.getElementById("background-container");
const mainContent = document.getElementById("page-container");
const mainContentHeader = document.getElementById("page-container-header");
const serverOffline = document.getElementById("server-offline");
const serverStarted = document.getElementById("server-started");

// Get screen size details
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const fullScreenHeight = window.screen.height;
const fullScreenWidth = window.screen.width;
console.log(screenWidth);
console.log(fullScreenWidth);

// Set the height of the background container based on the screen width/height ratio
const setBackgroundHeight = Math.ceil(screenWidth / 100 * 50.5);
backgroundContainer.style.minHeight = setBackgroundHeight + "px";

// Set display to none to prevent it being seen till the transition starts
mainContent.style.animation = "none";

// Set the screen width for mobile responsive design
const mobileWidth = 800;

// Check if the site is being viewed on a mobile size display and if so remove header
if(screenWidth <= mobileWidth) {
    mainContentHeader.style.display = "none";
    mainContent.style.borderRadius = "0 0 10px 10px";
};

// This is the start of the page load animation sequence
setTimeout(function () {
  serverOffline.style.display = "block"; 
}, 2000);

setTimeout(function () {
  serverStarted.style.display = "block";
}, 4000); 

setTimeout(function () {
  serverOffline.style.display = "none";
}, 4000);

setTimeout(function () {
  serverStarted.style.display = "none";
}, 6000);

setTimeout(function() {
  mainContent.style.animation = "slide 1s forwards";
}, 6000);
// This is the end of the page load animation sequence