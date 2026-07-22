(function () {
  const page = document.body.dataset.page || "home";
  const isHome = page === "home";
  const homeUrl = "index.html";
  const phoneHref = "tel:+916291822133";
  const phoneLabel = "+91 6291822133";

  const route = {
    home: homeUrl,
    howItWorks: "how-it-works.html",
    forHire: isHome ? "#for-hire" : "index.html#for-hire",
    forWorker: isHome ? "#for-worker" : "index.html#for-worker",
    faq: isHome ? "#faq" : "index.html#faq",
    demo: "workmood-app.html",
    contact: "contact-us.html",
    about: "about-us.html",
    accountDeletion: "account-deletion.html",
    privacy: "privacy-policy.html",
    payments: "payments-refund-policy.html",
    terms: "terms-and-conditions.html"
  };

  const currentPage = {
    home: page === "home" ? route.home : null,
    howItWorks: page === "how-it-works" ? route.howItWorks : null,
    contact: page === "contact" ? route.contact : null,
    about: page === "about" ? route.about : null,
    accountDeletion: page === "account-deletion" ? route.accountDeletion : null,
    privacy: page === "privacy" ? route.privacy : null,
    payments: page === "payments" ? route.payments : null,
    terms: page === "terms" ? route.terms : null,
    app: page === "app" ? route.demo : null
  };

  const headerMount = document.getElementById("site-header");
  const footerMount = document.getElementById("site-footer");

  if (headerMount) {
    headerMount.innerHTML = `
      <header class="site-header" id="header">
        <div class="container nav">
          <a href="${route.home}" class="brand" aria-label="WorkMood Home">
            <img class="brand-logo" src="assets/workmood-logo.png" alt="" aria-hidden="true" />
            <span>WorkMood</span>
          </a>

          <nav class="nav-links" aria-label="Primary navigation">
            <a href="${route.home}"${currentPage.home ? ' aria-current="page"' : ""}>Home</a>
            <a href="${route.howItWorks}"${currentPage.howItWorks ? ' aria-current="page"' : ""}>How it Works</a>
            <a href="${route.forHire}">For Hire</a>
            <a href="${route.forWorker}">For Worker</a>
            <a href="${route.about}"${currentPage.about ? ' aria-current="page"' : ""}>About Us</a>
            <a href="${route.contact}"${currentPage.contact ? ' aria-current="page"' : ""}>Contact</a>
          </nav>

          <div class="nav-actions">
            <a class="btn btn-secondary" href="${route.demo}"${currentPage.app ? ' aria-current="page"' : ""}>Get Started</a>
            <a class="btn btn-primary" href="${phoneHref}">Chat Now</a>
            <button class="menu-toggle" id="menuToggle" aria-label="Open menu">&#9776;</button>
          </div>
        </div>

        <div class="container nav-panel" id="navPanel">
          <div class="mobile-links">
            <a href="${route.home}"${currentPage.home ? ' aria-current="page"' : ""}>Home</a>
            <a href="${route.howItWorks}"${currentPage.howItWorks ? ' aria-current="page"' : ""}>How it Works</a>
            <a href="${route.forHire}">For Hire</a>
            <a href="${route.forWorker}">For Worker</a>
            <a href="${route.about}"${currentPage.about ? ' aria-current="page"' : ""}>About Us</a>
            <a href="${route.contact}"${currentPage.contact ? ' aria-current="page"' : ""}>Contact</a>
            <a href="${route.demo}"${currentPage.app ? ' aria-current="page"' : ""}>Get Started</a>
            <a href="${phoneHref}">Call Us</a>
          </div>
        </div>
      </header>
    `;
  }

  if (footerMount) {
    footerMount.innerHTML = `
      <footer class="site-footer">
        <div class="container">
          <div class="footer-grid">
            <div>
              <div class="brand" style="margin-bottom: 16px;">
                <img class="brand-logo" src="assets/workmood-logo.png" alt="" aria-hidden="true" />
                <span>WorkMood</span>
              </div>
              <p class="footer-copy">A modern workforce platform designed to help workers find local opportunities with more speed, trust, and transparency.</p>
              <div class="footer-social" aria-label="Social media links">
                <a href="https://www.facebook.com/share/1JCP3UqHPh/" target="_blank" rel="noopener noreferrer" aria-label="WorkMood on Facebook">
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M14.2 8.6V6.9c0-.8.5-1 1.1-1h1.5V3.2c-.7-.1-1.5-.2-2.2-.2-2.3 0-3.9 1.4-3.9 4v1.6H8.2v3h2.5V21h3.1v-9.4h2.6l.4-3h-3Z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/workmood.in?igsh=dWpybGlsanY3djF0" target="_blank" rel="noopener noreferrer" aria-label="WorkMood on Instagram">
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M8 3h8c2.8 0 5 2.2 5 5v8c0 2.8-2.2 5-5 5H8c-2.8 0-5-2.2-5-5V8c0-2.8 2.2-5 5-5Zm0 2.2C6.4 5.2 5.2 6.4 5.2 8v8c0 1.6 1.2 2.8 2.8 2.8h8c1.6 0 2.8-1.2 2.8-2.8V8c0-1.6-1.2-2.8-2.8-2.8H8Zm4 3.1a3.7 3.7 0 1 1 0 7.4 3.7 3.7 0 0 1 0-7.4Zm0 2.2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm4.1-2.6a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
                  </svg>
                </a>
                <a href="https://youtube.com/@workmoodindia?si=C14_oqrMHCdIGpP8" target="_blank" rel="noopener noreferrer" aria-label="WorkMood on YouTube">
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M21.6 7.2s-.2-1.5-.8-2.1c-.8-.8-1.7-.8-2.1-.9C15.8 4 12 4 12 4s-3.8 0-6.7.2c-.4.1-1.3.1-2.1.9-.6.6-.8 2.1-.8 2.1S2 9 2 10.9v1.8c0 1.9.4 3.7.4 3.7s.2 1.5.8 2.1c.8.8 1.9.8 2.4.9 1.7.2 6.4.2 6.4.2s3.8 0 6.7-.2c.4-.1 1.3-.1 2.1-.9.6-.6.8-2.1.8-2.1s.4-1.8.4-3.7v-1.8c0-1.9-.4-3.7-.4-3.7ZM10 15.1V8.8l5.8 3.2-5.8 3.1Z" />
                  </svg>
                </a>
              </div>
            </div>

            <div class="footer-links">
              <h4>Navigation</h4>
              <a href="${route.home}">Home</a>
              <a href="${route.howItWorks}"${currentPage.howItWorks ? ' aria-current="page"' : ""}>How it Works</a>
              <a href="${route.forHire}">For Hire</a>
              <a href="${route.forWorker}">For Worker</a>
            </div>

            <div class="footer-links">
              <h4>Quick Links</h4>
              <a href="${route.faq}">FAQ</a>
              <a href="${route.about}"${currentPage.about ? ' aria-current="page"' : ""}>About Us</a>
              <a href="${route.contact}">Contact</a>
              <a href="${route.accountDeletion}"${currentPage.accountDeletion ? ' aria-current="page"' : ""}>Account Deletion</a>
              <a href="${route.privacy}"${currentPage.privacy ? ' aria-current="page"' : ""}>Privacy Policy</a>
              <a href="${route.payments}"${currentPage.payments ? ' aria-current="page"' : ""}>Payments &amp; Refund Policy</a>
              <a href="${route.terms}"${currentPage.terms ? ' aria-current="page"' : ""}>Terms &amp; Conditions</a>
            </div>

            <div class="footer-links">
              <h4>Contact</h4>
              <a href="mailto:workmood26@gmail.com">workmood26@gmail.com</a>
              <a href="${phoneHref}">${phoneLabel}</a>
              <span>Kolkata, West Bengal, India</span>
            </div>
          </div>

          <div class="footer-bottom">
            <span>&copy; 2026 WorkMood. All rights reserved.</span>
            <span></span>
          </div>
        </div>
      </footer>
    `;
  }

  const header = document.getElementById("header");
  const toggle = document.getElementById("menuToggle");
  const navPanel = document.getElementById("navPanel");
  const mobileLinks = navPanel ? navPanel.querySelectorAll("a") : [];

  if (toggle && header) {
    toggle.addEventListener("click", function () {
      header.classList.toggle("open");
    });
  }

  mobileLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (header) {
        header.classList.remove("open");
      }
    });
  });
})();
