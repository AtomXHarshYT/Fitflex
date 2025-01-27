document.addEventListener('DOMContentLoaded', function () {
  const journeyButton = document.querySelector('.journey-button');
  const begin_Gym = document.querySelector('#begin-button');
  const inter_Gym = document.querySelector('#inter-button');
  const weight_Gain = document.querySelector('#weight-gain-button');
  const weight_Loss = document.querySelector('#weight-loss-button');

  begin_Gym.addEventListener('click', function () {
    window.location.href = 'begin_Gym.html';
  });
  inter_Gym.addEventListener('click', function () {
    window.location.href = 'inter_Gym.html';
  });
  weight_Gain.addEventListener('click', function () {
    window.location.href = 'weight_Gain.html';
  });
  weight_Loss.addEventListener('click', function () {
    window.location.href = 'weight_Loss.html';
  });

  function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
      name: params.get("name"),
      expiry: params.get("expiry"),
    };
  }

  const { name, expiry } = getQueryParams();

  if (name && expiry) {
    document.getElementById("welcomeMessage").textContent = `Welcome, ${name}!`;
    document.getElementById("expiryDetails").textContent = `Subscription Expiry: ${expiry}.`;
  } else {
    document.getElementById("welcomeMessage").textContent = "Welcome to FitFlex!";
    document.getElementById("expiryDetails").textContent = "Log in to view your account details.";
  }

  journeyButton.addEventListener('click', function () {
    if (window.innerWidth <= 768) {
      document.body.classList.add('show-overlay');
    }
  });

  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('show-overlay')) {
      closePopup();
    }
  });

  function closePopup() {
    document.body.classList.remove('show-overlay');
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

  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('show-overlay')) {
      closePopup();
      closeContactPopup();
    }
  });
});