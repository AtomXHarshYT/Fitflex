document.addEventListener('DOMContentLoaded', function () {
  

  // Function to get query parameters from the URL
  function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
      name: params.get("name"),
      expiry: params.get("expiry"),
    };
  }

  // Retrieve user details from the URL
  const { name, expiry } = getQueryParams();

  // Update the content on the page
  if (name && expiry) {
    document.getElementById("welcomeMessage").textContent = `Welcome, ${name}!`;
    document.getElementById("expiryDetails").textContent = `Subscription Expiry: ${expiry}.`;
  } else {
    // Fallback if details are missing
    document.getElementById("welcomeMessage").textContent = "Welcome to FitFlex!";
    document.getElementById("expiryDetails").textContent = "Log in to view your account details.";
  }

  const contactButton = document.querySelector('.contact-button');
  const contactPopup = document.createElement('div');
  contactPopup.className = 'contact-popup';
  contactPopup.innerHTML = `
        <div class="contact-popup-content">
            <button class="close-popup">&times;</button>
            <h2>Contact Us</h2>
            <p>Call us at:</p>
            <a href="tel:+919737505508" class="phone-number">+91 97375 05508</a><br>
            <a href="tel:+919662825285" class="phone-number">+91 96628 25285</a>
        </div>
    `;
  document.body.appendChild(contactPopup);

  contactButton.addEventListener('click', function () {
    contactPopup.classList.add('show-popup');
    document.body.classList.add('show-overlay');
  });

  const closePopupButton = contactPopup.querySelector('.close-popup');
  closePopupButton.addEventListener('click', function () {
    closeContactPopup();
  });

  function closeContactPopup() {
    contactPopup.classList.remove('show-popup');
    document.body.classList.remove('show-overlay');
  }

  // Close pop-up when clicking outside
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('show-overlay')) {
      closePopup();
      closeContactPopup();
    }
  });
});