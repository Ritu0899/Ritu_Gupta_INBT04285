var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

// for sidemenu
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

function openTab(currentTab) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  event.target.classList.add("active-link");
  let tabName = document.getElementById(currentTab);
  tabName.classList.add("active-tab");
}

var typeData = new Typed(".role", {
  strings: [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Web Developer",
    "Software Developer",
    "Coder",
  ],
  loop: true,
  typeSpeed: 80,
  backSpeed: 80,
  backDelay: 1000,
});