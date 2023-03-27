//hamburger menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav");

// hamburger.addEventListener("click", mobileMenu);

hamburger.onclick = function () {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
};

/*feature to close hamburger menu when u click outside of it. */

document.onclick = function (e) {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
};




// open modal

// var modal = document.getElementById('simpleModal');

// var modalBtn = document.getElementById('modalBtn');

// var closeBtn = document.getElementsByClassName('closeBtn')[0];


// // listen for click 

// modalBtn.addEventListener('click', openModal);
// closeBtn.addEventListener('click', closeModal);


// // function to open modal

// function openModal() {
//   modal.style.display = "block";
// }
// // function to close the modal

// function closeModal() {
//   modal.style.display = 'none';
// }





