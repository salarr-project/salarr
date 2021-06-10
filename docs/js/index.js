function counter_fn() {
  var counter = document.getElementById("cntr");
  var count = 0;
  count = parseInt(counter.innerHTML);
  count = count + 1;
  counter.innerHTML = count;
}
window.onload = counter_fn;

window.onscroll = function () {
  stickyHeader();
};

let header = document.querySelector(".navbar");
let content = document.querySelector(".margin-top-me");
let sticky = header.offsetTop;

function stickyHeader() {
  if (header === null || header === undefined) {
    return;
  }

  if (content === null || content === undefined) {
    return;
  }

  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    content.classList.add("top-padding");
  } else {
    header.classList.remove("sticky");
    content.classList.remove("top-padding");
  }
}
