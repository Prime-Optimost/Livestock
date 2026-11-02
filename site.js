/* Keep the copyright year current without editing each page. */
(function () {
  var year = String(new Date().getFullYear());
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = year;
  });
})();

(function () {
  var btn = document.querySelector(".navtoggle");
  var nav = document.getElementById("mainnav");
  if (!btn || !nav) return;

  function setOpen(open) {
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    nav.classList.toggle("open", open);
    document.body.classList.toggle("menu-open", open);
  }

  function close() {
    setOpen(false);
  }

  btn.addEventListener("click", function () {
    setOpen(btn.getAttribute("aria-expanded") !== "true");
  });

  nav.addEventListener("click", function (e) {
    if (e.target.closest("a")) close();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      close();
      btn.focus();
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 900) close();
  });
})();
