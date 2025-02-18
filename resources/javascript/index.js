// Assign id's to variables
const contentTransition = document.getElementById("home-container");
const serverOffline = document.getElementById("server-offline");
const serverStarted = document.getElementById("server-started");
// Get the scroll width of the screen
const screenWidth = document.documentElement.scrollWidth;
const screenHeight = document.documentElement.scrollHeight;
// Set display to none to prevent it being seen till the transition starts
contentTransition.style.display = "none";
// Set the screen width for mobile responsive design
const mobileWidth = 800;

// Check if the site is being viewed on a mobile size display and if so stop the animation
if(screenWidth <= mobileWidth) {
    contentTransition.style.animation = "none";
    contentTransition.style.display = "flex";
};

// This is the start of the page load animation sequence
// Check if the display is bigger than a mobile display and if so run the animation at set time intervals
if(screenWidth > mobileWidth) {
    setTimeout(function () {
        serverOffline.style.display = "block"; 
    }, 2000);
};
if(screenWidth > mobileWidth) {
    setTimeout(function () {
        serverStarted.style.display = "block";
    }, 4000);
};
if(screenWidth > mobileWidth) {
    setTimeout(function () {
        serverOffline.style.display = "none";
    }, 4000);
};
if(screenWidth > mobileWidth) {
    setTimeout(function () {
        serverStarted.style.display = "none";
    }, 6000);
};
if(screenWidth > mobileWidth) {
    setTimeout(function() {
        contentTransition.style.display = "flex";
    }, 6000);
};
// This is the end of the page load animation sequence