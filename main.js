// Variables and Constants
const mobileNav = $(".mobile-nav");
const hamburgerMenu = $(".mobile-nav svg");
const previousSlide = $(".backward-arrow");
const nextSlide = $(".forward-arrow");
const slidersContent = $(".slider-content");
const sliderBackground = $("#slider-background-img");

let activeSlide = 0;
let $window = $(window);
let blackBackground = $("<div class='black'></div>");
let mobileScreen;

// @First page load
$(document).ready(function () {
  checkWidth();
  $(window).resize(checkWidth);
});

for (let i = 1; i < slidersContent.length; i++) {
  $(slidersContent[i]).css("display", "none");
}

// Hamburger menu
hamburgerMenu.click(function () {
  mobileNav.toggleClass("open");
  if (mobileNav.hasClass("open")) {
    blackBackground.insertBefore(mobileNav);
    $("body").css("overflow", "hidden");
  } else {
    $(".black").remove();
  }
});


previousSlide.click(previous_slide); // when previous arrow clicked

nextSlide.click(next_slide); // when next arrow clicked

// when left or right arrow keyboard's keys pressed
$("body").keydown(function (e) {
  if (e.keyCode == 37) {
    // left
    previous_slide();
  } else if (e.keyCode == 39) {
    // right
    next_slide();
  }
});

// Display previous slide
function previous_slide() {
  if (activeSlide == 0) {
    activeSlide = 2;
  } else {
    activeSlide--;
  }

  display(activeSlide);
  animateSlideBackground();
  sliderBackground.css(
    "background-image",
    mobileScreen
      ? `url("./images/mobile-image-hero-${activeSlide + 1}.jpg")`
      : `url("./images/desktop-image-hero-${activeSlide + 1}.jpg")`
  );
}

// Display next slide
function next_slide() {
  if (activeSlide == 2) {
    activeSlide = 0;
  } else {
    activeSlide++;
  }

  display(activeSlide);
  animateSlideBackground();
  sliderBackground.css(
    "background-image",
    mobileScreen
      ? `url("./images/mobile-image-hero-${activeSlide + 1}.jpg")`
      : `url("./images/desktop-image-hero-${activeSlide + 1}.jpg")`
  );
}

// Show choosen slide
function display(slideNumber) {
  for (let i = 0; i < slidersContent.length; i++) {
    i == slideNumber
      ? $(slidersContent[i]).css("display", "flex")
      : $(slidersContent[i]).css("display", "none");
  }
}

// Check screen width for background image changing
function checkWidth() {
  var windowsize = $window.width();
  if (windowsize > 640) {
    mobileScreen = false;
  } else {
    mobileScreen = true;
  }
  sliderBackground.css(
    "background-image",
    mobileScreen
      ? `url("./images/mobile-image-hero-${activeSlide + 1}.jpg")`
      : `url("./images/desktop-image-hero-${activeSlide + 1}.jpg")`
  );
}

// Animate slide content
function animateSlideBackground() {
  $("section:nth-child(1)").addClass("active");
  setTimeout(() => {
    $("section:nth-child(1)").removeClass("active");
  }, 700);
}
