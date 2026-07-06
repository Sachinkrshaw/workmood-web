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
