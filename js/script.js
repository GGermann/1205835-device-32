
let link = document.querySelectorAll(".customer-navigation-link");
let popup = document.querySelector(".popup");
let button = document.querySelector(".submenu-plus");
let catalog = document.querySelector(".catalog-submenu");
let modal = document.querySelector(".modal-wrapper");
let closeModal = document.querySelector(".modal-form-close");
let next = document.getElementById("button-letter");
let info = document.querySelector(".info");
let infoShow = document.querySelector (".info-description-open");
let form = modal.querySelector("form");
let login = modal.querySelector("[name=arrival-date]");
let password = modal.querySelector("[name=date-of-departure]");

let slideOne = document.querySelector(".terms-item-one");
let slideTwo = document.querySelector(".terms-item-two");
let slideThree = document.querySelector(".terms-item-three");
let tabOne = document.querySelector(".tab-one");
let tabTwo = document.querySelector(".tab-two");
let tabThree = document.querySelector(".tab-three");
let tabactive = document.querySelector(".tab-active");

let slides = document.getElementsByClassName('product-slide');
let dots = document.getElementsByClassName('dot');
let activeSlideNum = 0;

function setSlide(slideIndex) {
  for ( let i = 0; i < slides.length; i++){
    slides[i].style.display= "none";
    dots[i].className = dots[i].className.replace("active", "");
  };

  if (typeof slideIndex == 'string'){
    if (slideIndex === 'prev'){
      activeSlideNum = activeSlideNum === 0 ? 2 : activeSlideNum - 1;
    }
    if (slideIndex === 'next'){
      activeSlideNum = activeSlideNum === 2 ? 0 : activeSlideNum + 1;
    }
    slides[activeSlideNum].style.display = "flex";
    dots[activeSlideNum].className += " active";
  } else {
    slides[slideIndex].style.display = "flex";
    dots[slideIndex].className += " active";
  }
}

slideOne.addEventListener("click", function (e) {
  e.preventDefault ();
  slideOne.classList.add ("purchase-terms-active");
  slideTwo.classList.remove ("purchase-terms-active");
  slideThree.classList.remove ("purchase-terms-active");
  tabOne.classList.remove ("tab-active");
  tabTwo.classList.add ("tab-active");
  tabThree.classList.add ("tab-active");
});

slideTwo.addEventListener("click", function (e) {
  e.preventDefault ();
  slideOne.classList.remove ("purchase-terms-active");
  slideTwo.classList.add ("purchase-terms-active");
  slideThree.classList.remove ("purchase-terms-active");
  tabOne.classList.add ("tab-active");
  tabTwo.classList.remove ("tab-active");
  tabThree.classList.add ("tab-active");
});

slideThree.addEventListener("click", function (e) {
  e.preventDefault ();
  slideOne.classList.remove ("purchase-terms-active");
  slideTwo.classList.remove ("purchase-terms-active");
  slideThree.classList.add ("purchase-terms-active");
  tabOne.classList.add ("tab-active");
  tabTwo.classList.add ("tab-active");
  tabThree.classList.remove ("tab-active");
});

form.addEventListener("submit", function (wef) {
wef.preventDefault ();
console.log(login.value);
console.log(password.value);
});

info.addEventListener("mouseout", function (wer) {
  wer.preventDefault();
  infoShow.classList.toggle("additional-info-wrapper");

});

link[2].addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("popup-open");
});

next.addEventListener("click", function (eve) {
  eve.preventDefault();
  modal.classList.remove("modal-close");
  login.focus();
});

button.addEventListener("click", function (tre) {
  tre.preventDefault();
  catalog.classList.toggle("catalog-submenu-open");
  button.classList.toggle("submenu-minus");
});

closeModal.addEventListener("click", function (ret) {
  ret.preventDefault();
  modal.classList.add("modal-close");
});


