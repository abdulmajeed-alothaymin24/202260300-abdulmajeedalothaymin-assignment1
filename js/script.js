// Select the theme toggle button from the DOM
const themeToggleBtn = document.getElementById("theme-toggle");

// Check if the user previously saved a theme preference
const savedTheme = localStorage.getItem("theme");

// If dark mode was saved, apply it on page load
if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

// Listen for toggle button click
themeToggleBtn.addEventListener("click", () => {

  // Switch between light and dark mode
  document.body.classList.toggle("dark");

  // Save the selected theme to localStorage
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

