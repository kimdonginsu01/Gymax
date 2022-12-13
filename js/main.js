// Slick config

$(document).ready(function () {
  $(".testimonials-content").slick({
    arrows: false,
    dots: true,
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
  };
});

function showModalMenu() {
  $(".modal-nav").style.display = "block";
}

function hideModalMenu() {
  $(".modal-nav").style.display = "none";
}

const modalNav = $(".modal-nav");
const modalContainer = $(".modal-container");

$(".mobile-menu").onclick = showModalMenu;

modalContainer.onclick = (e) => e.stopPropagation();
modalNav.onclick = hideModalMenu;
$(".modal-close").onclick = hideModalMenu;
