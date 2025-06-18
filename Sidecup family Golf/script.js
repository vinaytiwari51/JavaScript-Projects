const cursor = document.querySelector(".cursor")
const blurCr = document.querySelector(".blur")

document.addEventListener("mousemove", (dets) => {
// console.log(dets);

cursor.style.left = dets.x + "px"
cursor.style.top = dets.y + "px"
blurCr.style.left = dets.x - 250 + "px";
blurCr.style.top = dets.y - 250 + "px";

})


const h4all = document.querySelectorAll("#nav span");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    cursor.style.scale = 3;
    cursor.style.border = "1px solid #fff";
    cursor.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    cursor.style.scale = 1;
    cursor.style.border = "0px solid #95C11E";
    cursor.style.backgroundColor = "#95C11E";
  });
});

gsap.to(".nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
      trigger: ".nav",
      scroller: "body",
    //   markers:true,
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
  });

  gsap.to(".main-section", {
    backgroundColor: "#000",
    scrollTrigger: {
      trigger: ".main-section",
      scroller: "body",
      // markers: true,
      start: "top -25%",
      end: "top -70%",
      scrub: 2,
    },
  });

  gsap.from(".about #img-left #img-right,.text", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".about",
      scroller: "body",
      // markers:true,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });
  gsap.from(".images", {
    scale: 0.8,
    // opacity:0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".images",
      scroller: "body",
      // markers:false,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });
  gsap.from("#img-left", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#img-left",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  gsap.from("#img-right", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#img-right",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  