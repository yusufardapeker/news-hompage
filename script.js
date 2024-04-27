const mobileMenuOpenIcon = document.querySelector(".hamburger-menu-open-icon");
const mobileMenuCloseIcon = document.querySelector(".hamburger-menu-close-icon");
const mobileMenuWrapper = document.querySelector(".mobile-menu-wrapper");

mobileMenuOpenIcon.addEventListener("click", () => {
	mobileMenuWrapper.classList.add("show");
});

mobileMenuCloseIcon.addEventListener("click", () => {
	mobileMenuWrapper.classList.remove("show");
});
