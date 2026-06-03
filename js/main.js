(function () {
  "use strict";

  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.querySelector(".site-nav");
  const navLinks = document.querySelectorAll(".site-nav a, .site-footer__top");
  const faqItems = document.querySelectorAll(".faq-item");

  if (!navToggle || !siteNav) return;

  function setNavOpen(open) {
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
    siteNav.classList.toggle("is-open", open);
    document.body.style.overflow = open ? "hidden" : "";
  }

  function closeNav() {
    setNavOpen(false);
  }

  navToggle.addEventListener("click", function () {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    setNavOpen(!isOpen);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeNav();
    }
  });

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.matchMedia("(max-width: 767px)").matches) {
        closeNav();
      }
    });
  });

  window.addEventListener("resize", function () {
    if (window.matchMedia("(min-width: 768px)").matches) {
      closeNav();
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;

      const target = document.querySelector(id);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", id);
    });
  });

  faqItems.forEach(function (item) {
    item.addEventListener("toggle", function () {
      if (!item.open) return;

      faqItems.forEach(function (other) {
        if (other !== item && other.open) {
          other.open = false;
        }
      });
    });
  });
})();
