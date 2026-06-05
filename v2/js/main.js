/* =========================================================================
   Tudinous Kryos — main.js  (vanilla, no dependencies)
   - Mobile nav drawer (accessible: aria-expanded, Esc, outside click)
   - App-bar elevation on scroll
   - Scroll-reveal via IntersectionObserver (respects reduced motion)
   - Footer current year
   See plan/08-build-notes.md
   ========================================================================= */
(function () {
  "use strict";

  /* ---------- Mobile navigation drawer ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");

  function closeNav() {
    if (!toggle || !nav) return;
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    var icon = toggle.querySelector(".material-symbols-rounded");
    if (icon) icon.textContent = "menu";
  }

  function openNav() {
    if (!toggle || !nav) return;
    nav.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    var icon = toggle.querySelector(".material-symbols-rounded");
    if (icon) icon.textContent = "close";
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      open ? closeNav() : openNav();
    });

    // Close when a nav link is chosen
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeNav();
    });

    // Close on Escape and return focus to the toggle
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        closeNav();
        toggle.focus();
      }
    });

    // Close when clicking outside the open drawer
    document.addEventListener("click", function (e) {
      if (
        toggle.getAttribute("aria-expanded") === "true" &&
        !nav.contains(e.target) &&
        !toggle.contains(e.target)
      ) {
        closeNav();
      }
    });

    // Reset state if resized back to desktop (drawer only exists below 1200px)
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 1200) closeNav();
    });
  }

  /* ---------- Light / dark theme toggle ---------- */
  var themeToggles = document.querySelectorAll(".theme-toggle");
  var themeMeta = document.querySelector('meta[name="theme-color"]');

  function systemPrefersDark() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  // Effective theme = explicit attribute if set, else the OS preference.
  function currentTheme() {
    var attr = document.documentElement.getAttribute("data-theme");
    if (attr === "dark" || attr === "light") return attr;
    return systemPrefersDark() ? "dark" : "light";
  }

  function syncToggles(theme) {
    var next = theme === "dark" ? "light" : "dark";
    themeToggles.forEach(function (btn) {
      var icon = btn.querySelector(".material-symbols-rounded");
      if (icon) icon.textContent = theme === "dark" ? "light_mode" : "dark_mode";
      btn.setAttribute("aria-label", "Switch to " + next + " theme");
      btn.setAttribute("aria-pressed", String(theme === "dark"));
      btn.setAttribute("title", "Switch to " + next + " theme");
    });
    if (themeMeta) themeMeta.setAttribute("content", theme === "dark" ? "#101417" : "#00629e");
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("theme", theme); } catch (e) {}
    syncToggles(theme);
  }

  if (themeToggles.length) {
    syncToggles(currentTheme());
    themeToggles.forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyTheme(currentTheme() === "dark" ? "light" : "dark");
      });
    });
    // If the user never chose explicitly, follow live OS changes.
    if (window.matchMedia) {
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener
        && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
          var saved;
          try { saved = localStorage.getItem("theme"); } catch (e) {}
          if (saved !== "dark" && saved !== "light") syncToggles(currentTheme());
        });
    }
  }

  /* ---------- App-bar elevation on scroll ---------- */
  var appbar = document.querySelector(".appbar");
  if (appbar) {
    var onScroll = function () {
      appbar.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Scroll reveal ---------- */
  var reveals = document.querySelectorAll("[data-reveal]");
  var reduceMotion =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reveals.length) {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      reveals.forEach(function (el) { el.classList.add("is-visible"); });
    } else {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
      );
      reveals.forEach(function (el) { io.observe(el); });
    }
  }

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
