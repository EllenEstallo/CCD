function openOverlay() {
  document.getElementById("contactOverlay").style.display = "block";
}

function closeOverlay() {
  document.getElementById("contactOverlay").style.display = "none";
}

// Close the overlay when clicking outside of the content
window.onclick = function (event) {
  const overlay = document.getElementById("contactOverlay");
  if (event.target === overlay) {
    closeOverlay();
  }
};

// Prevent form submission for
