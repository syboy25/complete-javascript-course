"use strict";
$("h1").text("What It Do");
$("h1").addClass("big-title margin-50");
$("button ").html("<em>Click Me</em>");

$("h1").click(() => {
  $("h1").css("color", "black");
});

// for (let i = 0; i < 5; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function () {
//     document.querySelector("h1").style.color = "purple";
//   });
// }
// // $("button").click(() => {
//   $("h1").hide();
// });

$("button").on("click", () => {
  $("h1").animate({ opacity: 0.5 });
});
$(document).keydown((event) => {
  $("h1").text(event.key);
});

$("button").on("mouseover", () => {
  $("button").css("color", "red");
});
