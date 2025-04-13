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
const close = document.getElementsByClassName("close");
const projectContainer = document.getElementsByClassName("project-container");
const showFullscreenButton = document.getElementsByClassName("project-button");
const backToTopButton = document.getElementById("back-to-top");
const mathSolution = document.getElementById("addition");

// Check to see if the page is index.html
let loadAnimation;

if (bodyId.id === "load-animation") {
  loadAnimation = true;
} else {
  loadAnimation = false;
};

// Display main content if no animation set
if (!loadAnimation) {
  mainContent.style.transform = "none";
};

// Get screen size details
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const fullScreenHeight = window.screen.height;
const fullScreenWidth = window.screen.width;

// Set the height of the background container based on the screen width/height ratio
const setBackgroundHeight = Math.ceil(fullScreenWidth / 100 * 50.5);
backgroundContainer.style.minHeight = setBackgroundHeight + "px";

// Set display to none to prevent it being seen till the transition starts
mainContent.style.animation = "none";

// Set the screen width for mobile responsive design
const mobileWidth = 800;

// Check if the site is being viewed on a mobile size display and if so remove header
if(fullScreenWidth <= mobileWidth) {
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

// This is the start of display form data on contact page
const num1 = Math.ceil(Math.random() * 9);
const num2 = Math.ceil(Math.random() * 9);
const solution = num1 + num2;

if (bodyId.id === "contact") {
  mathSolution.innerHTML = `What is ${num1} + ${num2}?`;
  formInput.addEventListener("submit", function (e) {
    //e.preventDefault();
    console.log(this.solution.value);
    if (Number(this.solution.value) === solution) {
      formInputId.style.display = "none";
    formOutputContainer.style.display = "flex";
  
    const formData = {
      name: this.name.value,
      email: this.email.value,
      message: this.message.value
    };
  
    const formOutput = `
      <p>Name: ${formData.name}<br><br>
      Email: ${formData.email}<br><br>
      Message: ${formData.message}</p>
    `;
  
    formOutputContent.innerHTML = formOutput;
  
    this.name.value = "";
    this.email.value = "";
    this.message.value = "";
    this.solution.value = "";
  } else {
    alert(`${num1} + ${num2} isn't ${this.solution.value}`);
  };
});
    
  clearOutput.addEventListener("click", function (e) {
    e.preventDefault();
  
    formInputId.style.display = "flex";
    formOutputContainer.style.display = "none";
    formOutputContent.innerHTML = "";
  });
};

// This will close a fullscreen item by setting it's display to none and open project overviews by setting display to flex
function hideFullScreen(e) {
  e.preventDefault();

  const closeFullscreen = this.parentElement;

  closeFullscreen.style.display = "none";

  for (let i = 0; i < projectContainer.length; i++) {
    projectContainer[i].style.display = "flex";
  };
};

Array.from(close).forEach(function(item) {
  item.addEventListener("click", hideFullScreen);
});

// This will show layer on overview when mouse hovers
function showLayer(e) {
  e.preventDefault();

  const showLayer = this.lastElementChild;
  showLayer.style.display = "flex";
};

Array.from(projectContainer).forEach(function(item) {
  item.addEventListener("mouseover", showLayer);
});

// This will hide layer on overview when mouse leaves
function hideLayer(e) {
  e.preventDefault();

  const hideLayer = this.lastElementChild;
  hideLayer.style.display = "none";
};

Array.from(projectContainer).forEach(function(item) {
  item.addEventListener("mouseout", hideLayer);
});

// This will open a fullscreen item by setting it's display to flex and close project overviews by setting display to none
function showFullscreen(e) {
  e.preventDefault();
  console.log(this);
  console.log(this.parentElement.parentElement);
  console.log(this.parentElement.parentElement.nextElementSibling);
  const showFullscreen = this.parentElement.parentElement.nextElementSibling;
  console.log(showFullscreen);
  showFullscreen.style.display = "flex";
  if (fullScreenWidth <= mobileWidth) {
    window.scroll({
      top: 100,
      left: 0,
      behavior: "smooth",
    });
  } else {
    window.scroll({
      top: 300,
      left: 0,
      behavior: "smooth",
    });
  };
  for (let i = 0; i < projectContainer.length; i++) {
    projectContainer[i].style.display = "none";
  };
};

Array.from(showFullscreenButton).forEach(function(item) {
  item.addEventListener("click", showFullscreen);
});

// This will control the back to top button
let showOn;

if (fullScreenWidth <= mobileWidth) {
  showOn = 25;
} else {
  showOn = 125;
};

function backToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
};

backToTopButton.addEventListener("click", backToTop);

function showBackToTopButton() {
  if(document.documentElement.scrollTop > showOn || document.body.scrollTop > showOn) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  };
};

document.addEventListener("scroll", showBackToTopButton);