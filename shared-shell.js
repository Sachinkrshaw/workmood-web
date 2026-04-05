(function () {
  const page = document.body.dataset.page || "home";
  const isHome = page === "home";
  const homeUrl = "workmood%20web.html";

  const route = {
    home: isHome ? "#home" : homeUrl,
    howItWorks: isHome ? "#how-it-works" : homeUrl + "#how-it-works",
    forHire: isHome ? "#for-hire" : homeUrl + "#for-hire",
    forWorker: isHome ? "#for-worker" : homeUrl + "#for-worker",
    faq: isHome ? "#faq" : homeUrl + "#faq",
    demo: isHome ? "#download" : homeUrl + "#download",
    contact: "contact%20page.html",
    privacy: "Privacy%20Policy.html",
    terms: "Terms&Condi.html"
  };

  const currentPage = {
    home: page === "home" ? route.home : null,
    contact: page === "contact" ? route.contact : null,
    privacy: page === "privacy" ? route.privacy : null,
    terms: page === "terms" ? route.terms : null
  };

  const headerMount = document.getElementById("site-header");
  const footerMount = document.getElementById("site-footer");

  if (headerMount) {
    headerMount.innerHTML = `
      <header class="site-header" id="header">
        <div class="container nav">
          <a href="${route.home}" class="brand" aria-label="WorkMood Home">
            <span class="brand-mark">W</span>
            <span>WorkMood</span>
          </a>

          <nav class="nav-links" aria-label="Primary navigation">
            <a href="${route.home}"${currentPage.home ? ' aria-current="page"' : ""}>Home</a>
            <a href="${route.howItWorks}">How it Works</a>
            <a href="${route.forHire}">For Hire</a>
            <a href="${route.forWorker}">For Worker</a>
            <a href="${route.faq}">FAQ</a>
            <a href="${route.contact}"${currentPage.contact ? ' aria-current="page"' : ""}>Contact</a>
          </nav>

          <div class="nav-actions">
            <a class="btn btn-secondary" href="${route.demo}">See Demo</a>
            <a class="btn btn-primary" href="${route.contact}">Contact Us</a>
            <button class="menu-toggle" id="menuToggle" aria-label="Open menu">&#9776;</button>
          </div>
        </div>

        <div class="container nav-panel" id="navPanel">
          <div class="mobile-links">
            <a href="${route.home}"${currentPage.home ? ' aria-current="page"' : ""}>Home</a>
            <a href="${route.howItWorks}">How it Works</a>
            <a href="${route.forHire}">For Hire</a>
            <a href="${route.forWorker}">For Worker</a>
            <a href="${route.faq}">FAQ</a>
            <a href="${route.contact}"${currentPage.contact ? ' aria-current="page"' : ""}>Contact</a>
            <a href="${route.demo}">See Demo</a>
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
                <span class="brand-mark">W</span>
                <span>WorkMood</span>
              </div>
              <p class="footer-copy">A modern workforce platform designed to help workers find local opportunities with more speed, trust, and transparency.</p>
            </div>

            <div class="footer-links">
              <h4>Navigation</h4>
              <a href="${route.home}">Home</a>
              <a href="${route.howItWorks}">How it Works</a>
              <a href="${route.forHire}">For Hire</a>
              <a href="${route.forWorker}">For Worker</a>
            </div>

            <div class="footer-links">
              <h4>Company</h4>
              <a href="${route.faq}">FAQ</a>
              <a href="${route.contact}">Contact</a>
              <a href="${route.privacy}"${currentPage.privacy ? ' aria-current="page"' : ""}>Privacy Policy</a>
              <a href="${route.terms}"${currentPage.terms ? ' aria-current="page"' : ""}>Terms &amp; Conditions</a>
            </div>

            <div class="footer-links">
              <h4>Contact</h4>
              <a href="mailto:hello@workmood.in">hello@workmood.in</a>
              <a href="tel:+919999999999">+91 99999 99999</a>
              <span>Kolkata, West Bengal, India</span>
            </div>
          </div>

          <div class="footer-bottom">
            <span>&copy; 2026 WorkMood. All rights reserved.</span>
            <span>Built for workers first.</span>
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
