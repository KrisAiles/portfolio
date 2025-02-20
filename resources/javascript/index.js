// Assign id's to variables
const bodyId = document.getElementsByTagName("body")[0];
const backgroundContainer = document.getElementById("background-container");
const mainContent = document.getElementById("page-container");
const mainContentHeader = document.getElementById("page-container-header");
const serverOffline = document.getElementById("server-offline");
const serverStarted = document.getElementById("server-started");
const formInput = document.forms["contact-form"];
const formInputId = document.getElementById("contact-form");
const formOutputContainer = document.getElementById("form-output");
const formOutputContent = document.getElementById("form-output-content");
const clearOutput = document.getElementById("reset");

// Identify what page is active
let loadAnimation;

if (bodyId.id === "load-animation") {
  loadAnimation = true;
} else {
  loadAnimation = false;
}
console.log(loadAnimation);

// Display main content if no animation set
if (!loadAnimation) {
  mainContent.style.transform = "none";
}

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
function pageLoadAnimation() { 
  setTimeout(function () {
    serverOffline.style.display = "block"; 
    setTimeout(function () {
      serverOffline.style.display = "none";
      serverStarted.style.display = "block";
      setTimeout(function () {
        serverStarted.style.display = "none";
        mainContent.style.animation = "slide 1s forwards";
      }, 2000);
    }, 2000);
  }, 2000);
};


if (loadAnimation) {
  pageLoadAnimation();
};
// This is the end of the page load animation sequence

// Display form data
formInput.addEventListener("submit", function (e) {
  e.preventDefault();

  formInputId.style.display = "none";
  formOutputContainer.style.display = "flex";

  const formData = {
    name: this.name.value,
    email: this.email.value,
    message: this.message.value
  }

  const formOutput = `
    <p>Name: ${formData.name}<br><br>
    Email: ${formData.email}<br><br>
    Message: ${formData.message}</p>
  `;

  formOutputContent.innerHTML = formOutput;

  this.name.value = "";
  this.email.value = "";
  this.message.value = "";
});

clearOutput.addEventListener("click", function (e) {
  e.preventDefault();

  formInputId.style.display = "flex";
  formOutputContainer.style.display = "none";
  formOutputContent.innerHTML = "";
});
// This is the end of display form data