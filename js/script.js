const cookiePopup = document.getElementById("cookiePopup");
const acceptBtn = document.getElementById("acceptBtn");
const closeBtn = document.getElementById("closeBtn");

/* Accept Cookies */
acceptBtn.addEventListener("click", () => {
  cookiePopup.style.display = "none";

  localStorage.setItem("cookiesAccepted", "true");
});

/* Close Popup */
closeBtn.addEventListener("click", () => {
  cookiePopup.style.display = "none";
});

/* Check cookie status */
window.addEventListener("DOMContentLoaded", () => {
  const cookiesAccepted = localStorage.getItem("cookiesAccepted");

  if (cookiesAccepted === "true") {
    cookiePopup.style.display = "none";
  }
});