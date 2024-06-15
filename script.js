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

// var main = document.querySelector("#page1");
// var cursor = document.querySelector("#cursor");

// main.addEventListener("mousemove", function (dets) {
//   gsap.to("#cursor", {
//     y: dets.y,
//     x: dets.x,
  
  
//   });
 
// })




// // page1
// gsap.to("#name2", {
//   y: -1600,
//   delay: 1,
//   duration: 2,


//   scrollTrigger: {
//     trigger: "#name1",
//     scroller: "body",
//     start: "top 10%",
//     scrub: true,
//   },
// });

// gsap.to("#name1", {
//   y: 1000,
//   delay: 1,
//   duration: 2,

//   scrollTrigger: {
//     trigger: "#name1",
//     scroller: "body",
//     start: "top 10%",
//     scrub: true,
//   },
// });

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

// gsap.to("#job", {
//   opacity: 0,
//   x: 350,
//   color: "white",
//   scrollTrigger: {
//     trigger: "#job",
//     scroller: "body",
//     start: "top 10%",
//     scrub: true,
//   },
// });

// gsap.to("#job1", {
//   opacity: 0,
//   x: 350,
//     scale: 3,
//   color:"white",
//   scrollTrigger: {
//     trigger: "#job1",
//     scroller: "body",
//     start: "top 10%",
//     scrub: true,
//   },
// });

// gsap.to("nav ul", {
//   opacity: 0,
//   y:30,

//   color: "white",
//   scrollTrigger: {
//     trigger: "#job1",
//     scroller: "body",
//     start: "top 10%",
//     scrub: true,
//   },
// });

// gsap.from("#navBar", {

//     y: -650,
//     x: 650,
//     opacity:0,
 
  

//   color: "white",
//   scrollTrigger: {
//     trigger: "#job1",
//     scroller: "body",
//     start: "top 10%",
//     scrub: true,
//   },
// });