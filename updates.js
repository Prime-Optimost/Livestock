/* Home page: latest three. Updates page: data-updates="all". */
var UPDATES = [
  // Copy this block for each new post, remove the // marks, and fill it in.
  // Put the photo in images/ and use its path, for example "images/shelter.jpg".
  // {
  //   date: "2026-11-01",
  //   title: "A second raised house is finished",
  //   text: "We finished the second raised, slatted-floor unit this week. The young stock moved in on Friday.",
  //   image: "images/goats.jpg"
  // }
];

(function () {
  function escapeHtml(value) {
    return String(value == null ? "" : value).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function formatDate(value) {
    var d = new Date(String(value) + "T00:00:00");
    if (isNaN(d.getTime())) return String(value);
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  }

  function render(container, limit) {
    var posts = (typeof UPDATES === "undefined" ? [] : UPDATES).slice();
    posts.sort(function (a, b) {
      return String(b.date).localeCompare(String(a.date));
    });
    if (limit) posts = posts.slice(0, limit);

    var level = container.getAttribute("data-updates") === "all" ? "h2" : "h3";

    container.textContent = "";
    posts.forEach(function (post) {
      var article = document.createElement("article");
      article.className = "update";
      var media = post.image
        ? '<img src="' + escapeHtml(post.image) + '" alt="" loading="lazy">'
        : '<div class="ph" aria-hidden="true">GS</div>';
      article.innerHTML =
        media +
        "<div><time datetime=\"" + escapeHtml(post.date) + "\">" + escapeHtml(formatDate(post.date)) + "</time>" +
        "<" + level + ">" + escapeHtml(post.title) + "</" + level + ">" +
        "<p>" + escapeHtml(post.text) + "</p></div>";
      container.appendChild(article);
    });

    var section = container.closest("[data-updates-section]");
    if (section) section.hidden = posts.length === 0;

    var empty = document.querySelector("[data-updates-empty]");
    if (empty) empty.hidden = posts.length > 0;
  }

  document.querySelectorAll("[data-updates]").forEach(function (el) {
    var value = el.getAttribute("data-updates");
    render(el, value === "all" ? 0 : parseInt(value, 10) || 0);
  });
})();
