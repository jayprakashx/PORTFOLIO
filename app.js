// app.js
const tabLinks = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll(".tab-contents");

function opentab(e, tabname) {
  // remove active styles
  tabLinks.forEach(link => link.classList.remove("active-link"));
  tabContents.forEach(content => content.classList.remove("active-tab"));

  // add active styles
  e.currentTarget.classList.add("active-link");
  const activeContent = document.getElementById(tabname);

  if (activeContent) {
    activeContent.classList.add("active-tab");
  } else {
    console.error("Tab content not found for:", tabname);
  }
}

// make sure first tab always shows on load
window.addEventListener("DOMContentLoaded", () => {
  const defaultTab = document.getElementById("skills");
  if (defaultTab) defaultTab.classList.add("active-tab");
});