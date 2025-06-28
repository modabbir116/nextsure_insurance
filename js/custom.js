// Open the payment page when "Pay Now" is clicked
function openPayment() {
  window.location.href = "payment.html";
}
// function toggleMenu() {
//   document.querySelector('.nav-links').classList.toggle('show');
//   document.querySelector('.menu-btn').classList.toggle('active');
// }

// Optional: Close submenu on mobile tap (for better UX)
document.querySelectorAll(".nav-links .dropdown > a").forEach(link => {
  link.addEventListener("click", function (e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const submenu = this.nextElementSibling;
      submenu.style.display = submenu.style.display === "block" ? "none" : "block";
    }
  });
});