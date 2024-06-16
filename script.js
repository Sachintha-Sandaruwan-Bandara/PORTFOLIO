// // var tl = gsap.timeline();

// // tl.to("#box", {
// //   opacity: 0.5,
// //   x: 500,
// //   rotation: 360,
// //   delay: 1,
// //   duration: 1,
// // //   repeat: -100,
// // //   yoyo: true,
// //   scale: 8,
// //   borderRadius: "50%",
// //   backgroundColor: "purple",
// // });

// // tl.from("h1", {
// //   duration: 1,
// //   opacity: 0,
// //   y: 30,
// //   color: "purple",
// //   stagger: 0.3,
// // });

// //nav

// curser follower
var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");

main.addEventListener("mousemove", function (dets) {
  gsap.to("#cursor", {
    y: dets.y,
    x: dets.x,
  });
});


// Get all elements with the class name 'cursorBold'
const elements = document.querySelectorAll(".cursorBold");

// Loop through each element and add event listeners
elements.forEach(element => {
  element.addEventListener('mouseenter', function() {
    // Set styles for hover
    // cursor.style.height = "50px";
    // cursor.style.width = "50px";
     gsap.to(cursor, { duration: 0.5, scale:6 });
  });

  element.addEventListener('mouseleave', function() {
    // Reset styles when not hovering
 gsap.to(cursor, { duration: 0.5,scale:1 });
  });
});

var options = {
  animate: true,
  patternWidth: 500,
  patternHeight: 500,
  grainOpacity: 0.20,
  grainDensity: 1,
  grainWidth: 1,
  grainHeight: 1,
  zindex:1,
};
grained("#main", options);





//add styles when cursor hover

// // page1
gsap.to("#greet", {
  y: -500,
  delay: 1,
  duration: 2,ease: "bounce",

  scrollTrigger: {
    trigger: "#greet",
    scroller: "body",
    start: "top 3%",
    scrub: true,
    
  },
});

gsap.to("#name", {
  y: 1000,
  delay: 1,
  duration: 2,

  scrollTrigger: {
    trigger: "#greet",
    scroller: "body",
    start: "top 3%",
    scrub: true,
  },
});

// // gsap.to("#image", {
// //     scale: 5,
// //     x: 500,
// //     y:500,
// //      scrollTrigger: {
// //     trigger: "#page2",
// //     scroller: "body",
// //     start: "top 100%",
// //     scrub: true,
// //   },
// // });

gsap.to("#job1", {
  opacity: 0,
  x: -350,
  scale:10,
  color: "white",
  scrollTrigger: {
  scroller: "body",
    start: "top 3%",
    scrub: true,
  },
});

gsap.to("#job2", {
  opacity: 0,
  x: 350,
    scale: 10,
  color:"white",
  scrollTrigger: {
   scroller: "body",
    start: "top 3%",
    scrub: true,
  },
});

// gsap.to("nav ul", {
//   opacity: 0,
//   y:500,

 
//   scrollTrigger: {
   
//     scroller: "body",
//     start: "top 0%",
//     scrub: true,
//   },
// });

// gsap.to("nav ul", {

//     y: 900,
//     x: -600,
    

//   color: "white",
//   scrollTrigger: {
//     trigger: "#greet",
//     scroller: "body",
//     start: "top 0%",
//     scrub: true,
//   },
// });


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex - 1].style.display = "block";
  // dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}