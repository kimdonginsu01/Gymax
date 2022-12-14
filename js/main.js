// Slick config

$(document).ready(function () {
  $(".testimonials-content").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
  });

  $(".testimonials .slick-dots li button").html("");
});

// Main

const $$ = document.querySelectorAll.bind(document);

$$(".listing-item").forEach((item) => {
  item.onclick = (e) => {
    e.preventDefault();
    $$(".listing-item").forEach((item) =>
      item.classList.remove("listing-item--active")
    );
    item.classList.add("listing-item--active");

    showList(item);
  };
});

function showList(item) {
  let cateName = item.innerHTML;
  cateName = cateName.toLowerCase().replaceAll(" ", "-");
  $(".home-products").css("display", "none");
  $(`.${cateName}`).css("display", "block");
}

function showModalMenu() {
  document.querySelector(".modal-nav").style.display = "block";
}

function hideModalMenu() {
  document.querySelector(".modal-nav").style.display = "none";
}

const modalNav = document.querySelector(".modal-nav");
const modalContainer = document.querySelector(".modal-container");

document.querySelector(".mobile-menu").onclick = showModalMenu;

modalContainer.onclick = (e) => e.stopPropagation();
modalNav.onclick = hideModalMenu;
document.querySelector(".modal-close").onclick = hideModalMenu;

// Accordion

const accordionElems = document.querySelectorAll(".accordion");
accordionElems.forEach((item) => {
  item.onclick = () => {
    item.classList.toggle("accordion--active");
    var panel = item.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };
});
