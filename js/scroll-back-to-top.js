//const element = document.querySelector(".back-to-top");

//element.addEventListener("click", function () {
//  window.scrollTo({ top: 0, behavior: "smooth" });
//});

//window.addEventListener("scroll", function () {
  //if (window.scrollY === 0) {
   // element.classList.remove("active");
  //} else {
 //   element.classList.add("active");
 // }
//});

let element = document.querySelector(".back-to-top")

element.addEventListener("click", function() {
  window.scrollTo({top: 0,})
})

window.addEventListener("scroll", function() {
  if (window.scrollY === 0) {
    element.classList.remove("active");
  } else {
    element.classList.add("active");
  }
})
