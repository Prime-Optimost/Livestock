/* Keep the copyright year current without editing each page. */
(function () {
  var year = String(new Date().getFullYear());
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = year;
  });
})();

(function () {
  var translations = {
    "The Golden Shield Ranch": "Le Golden Shield Ranch",
    "LIVESTOCK FARMING": "ELEVAGE DE BETAIL",
    "Products": "Produits",
    "How to order": "Comment commander",
    "About": "A propos",
    "Updates": "Actualites",
    "Contact": "Contact",
    "Request a quote": "Demander un devis",
    "Akwaba · welcome": "Akwaba · bienvenue",
    "Welcome to The Golden Shield Ranch": "Bienvenue au Golden Shield Ranch",
    "Skip intro": "Passer l'introduction",
    "Goats and sheep raised on a climate-smart ranch in Kumasi": "Chevres et moutons eleves dans un ranch durable a Kumasi",
    "The Golden Shield Ranch sells live goats, live sheep, breeding stock and organic manure. Tell us what you need and we’ll send you a quote.": "Le Golden Shield Ranch vend des chevres et moutons vivants, des reproducteurs et du fumier organique. Dites-nous ce dont vous avez besoin et nous vous enverrons un devis.",
    "Chat on WhatsApp": "Discuter sur WhatsApp",
    "Our products": "Nos produits",
    "Prices are quoted per order, so send a request and we’ll get back to you.": "Les prix sont etablis par commande. Envoyez une demande et nous vous repondrons.",
    "Live goats": "Chevres vivantes",
    "Live sheep": "Moutons vivants",
    "Breeding stock": "Reproducteurs",
    "Organic manure": "Fumier organique",
    "Finisher goats, sold live.": "Chevres de finition, vendues vivantes.",
    "Finisher sheep, sold live.": "Moutons de finition, vendus vivants.",
    "Goats and sheep to start or grow your own herd.": "Chevres et moutons pour demarrer ou agrandir votre troupeau.",
    "Manure from the ranch for farms and gardens.": "Fumier du ranch pour les fermes et les jardins.",
    "Request a quote for goats": "Demander un devis pour des chevres",
    "Request a quote for sheep": "Demander un devis pour des moutons",
    "Request a quote for breeding stock": "Demander un devis pour des reproducteurs",
    "Request a quote for organic manure": "Demander un devis pour du fumier organique",
    "See full details for each product": "Voir les details de chaque produit",
    "How to order": "Comment commander",
    "No online checkout. You deal with us directly.": "Pas de paiement en ligne. Vous traitez directement avec nous.",
    "Send a request": "Envoyer une demande",
    "Get your quote": "Recevoir votre devis",
    "Confirm and pay": "Confirmer et payer",
    "About the ranch": "A propos du ranch",
    "More about the ranch": "En savoir plus sur le ranch",
    "Latest from the ranch": "Les dernieres nouvelles du ranch",
    "See all updates": "Voir toutes les nouvelles",
    "Where we are": "Ou nous trouver",
    "Get directions": "Itineraire",
    "Call 024 346 8825": "Appeler le 024 346 8825",
    "Ready to buy?": "Pret a acheter ?",
    "Send a request and we’ll reply with a quote.": "Envoyez une demande et nous vous repondrons avec un devis.",
    "Call us": "Appelez-nous",
    "Email": "E-mail",
    "Find us": "Nous trouver",
    "More": "Plus",
    "Ranch updates": "Nouvelles du ranch",
    "FAQ": "FAQ",
    "Privacy policy": "Politique de confidentialite",
    "Page not found": "Page introuvable",
    "Go to the home page": "Retour a l'accueil",
    "See our products": "Voir nos produits",
    "Downloads": "Telechargements",
    "Documents": "Documents",
    "Open the printable form": "Ouvrir le formulaire imprimable",
    "Frequently asked questions": "Questions frequentes",
    "Quick answers about ordering, paying, collecting and what we sell. If yours is not here, ask us.": "Reponses rapides sur les commandes, le paiement, le retrait et nos produits. Votre question ne figure pas ici ? Posez-la-nous.",
    "Ordering and prices": "Commandes et prix",
    "Payment, collection and delivery": "Paiement, retrait et livraison",
    "Animals and products": "Animaux et produits",
    "This website and your information": "Ce site et vos informations",
    "How do I order?": "Comment commander ?",
    "Can I buy online and pay on the website?": "Puis-je acheter et payer en ligne ?",
    "Why are there no prices on the website?": "Pourquoi les prix ne sont-ils pas affiches sur le site ?",
    "What should I include in my request?": "Que dois-je inclure dans ma demande ?",
    "How do I pay?": "Comment payer ?",
    "Can I collect from the ranch?": "Puis-je retirer ma commande au ranch ?",
    "Do you deliver?": "Livrez-vous ?",
    "What do you sell?": "Que vendez-vous ?",
    "Are animals always available?": "Les animaux sont-ils toujours disponibles ?",
    "Do you sell to households, or only in bulk?": "Vendez-vous aux menages ou seulement en gros ?",
    "Where does the manure come from?": "D'ou vient le fumier ?",
    "How are the animals kept?": "Comment les animaux sont-ils eleves ?",
    "Who owns The Golden Shield Ranch?": "A qui appartient le Golden Shield Ranch ?",
    "Where are you?": "Ou etes-vous situes ?",
    "How do I contact you?": "Comment vous contacter ?",
    "Do I need an account?": "Ai-je besoin d'un compte ?",
    "What happens to the details I send?": "Que faites-vous des informations que j'envoie ?",
    "Will you ask for my card number or mobile money PIN?": "Me demanderez-vous mon numero de carte ou mon code Mobile Money ?",
    "Still have a question?": "Vous avez encore une question ?",
    "Ask us directly and we will answer.": "Posez-nous directement votre question et nous vous repondrons.",
    "What we collect, why we collect it, and what you can ask us to do with it.": "Ce que nous collectons, pourquoi nous le collectons et ce que vous pouvez nous demander d'en faire.",
    "In short": "En bref",
    "Who we are": "Qui sommes-nous ?",
    "What information we collect": "Quelles informations collectons-nous ?",
    "What you send us": "Ce que vous nous envoyez",
    "What happens automatically": "Ce qui se passe automatiquement",
    "Other services this site uses": "Autres services utilises par ce site",
    "How we use your information": "Comment nous utilisons vos informations",
    "Who we share it with": "Avec qui les partageons-nous ?",
    "How long we keep it": "Combien de temps les conservons-nous ?",
    "Keeping it safe": "Comment nous les protegeons",
    "Your rights": "Vos droits",
    "Children": "Enfants",
    "Changes to this policy": "Modifications de cette politique",
    "Request a quote": "Demander un devis",
    "Your name": "Votre nom",
    "Phone number": "Numero de telephone",
    "Town or region": "Ville ou region",
    "What do you need?": "De quoi avez-vous besoin ?",
    "Choose one": "Choisissez une option",
    "How many?": "Combien ?",
    "When do you need them?": "Quand vous les faut-il ?",
    "Notes": "Notes",
    "Optional. Add anything we should know.": "Facultatif. Ajoutez toute information utile.",
    "Send on WhatsApp": "Envoyer sur WhatsApp",
    "Send by email": "Envoyer par e-mail",
    "Prefer to talk?": "Vous preferez parler ?",
    "Print this form": "Imprimer ce formulaire",
    "Back to the online form": "Retour au formulaire en ligne",
    "Home": "Accueil",
    "Expression of Interest form": "Formulaire d'expression d'interet",
    "Your details": "Vos coordonnees",
    "Full name": "Nom complet",
    "Date": "Date",
    "What do you need?": "De quoi avez-vous besoin ?",
    "Needed by": "Necessaire pour le",
    "For ranch use:": "Reserve au ranch :",
    "Last updated: 2 November 2026": "Derniere mise a jour : 2 novembre 2026",
    "English": "Anglais",
    "French": "Francais",
    "Language": "Langue"
  };

  var titles = {
    "The Golden Shield Ranch | Goats and sheep, Kumasi": "Le Golden Shield Ranch | Chevres et moutons, Kumasi",
    "FAQ | The Golden Shield Ranch": "FAQ | Le Golden Shield Ranch",
    "Privacy policy | The Golden Shield Ranch": "Politique de confidentialite | Le Golden Shield Ranch",
    "What we sell | The Golden Shield Ranch": "Ce que nous vendons | Le Golden Shield Ranch",
    "How to order | The Golden Shield Ranch": "Comment commander | Le Golden Shield Ranch",
    "About the ranch | The Golden Shield Ranch": "A propos du ranch | Le Golden Shield Ranch",
    "Ranch Updates | The Golden Shield Ranch": "Nouvelles du ranch | Le Golden Shield Ranch",
    "Request a quote | The Golden Shield Ranch": "Demander un devis | Le Golden Shield Ranch",
    "Downloads | The Golden Shield Ranch": "Telechargements | Le Golden Shield Ranch"
  };
  var language = "en";

  function getLanguage() {
    try { return localStorage.getItem("gsr-language") === "fr" ? "fr" : "en"; } catch (e) { return "en"; }
  }

  function addSelector() {
    var wrap = document.querySelector("header .wrap");
    var existing = document.querySelector("[data-language-selector] select");
    if (existing) {
      existing.addEventListener("change", function () { setLanguage(this.value); });
      return;
    }
    if (!wrap) return;
    var label = document.createElement("label");
    label.className = "language-switcher";
    label.setAttribute("data-language-selector", "true");
    label.innerHTML = "<span>Language</span><select aria-label=\"Language\"><option value=\"en\">English</option><option value=\"fr\">Francais</option></select>";
    wrap.appendChild(label);
    label.querySelector("select").addEventListener("change", function () { setLanguage(this.value); });
  }

  function replaceText(root, toFrench) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (node) {
      var value = node.nodeValue;
      var trimmed = value.trim();
      if (!trimmed) return;
      if (toFrench && translations[trimmed]) node.nodeValue = value.replace(trimmed, translations[trimmed]);
      if (!toFrench) {
        Object.keys(translations).forEach(function (english) {
          if (translations[english] === trimmed) node.nodeValue = value.replace(trimmed, english);
        });
      }
    });
    document.querySelectorAll("input[placeholder], img[alt], [aria-label], option").forEach(function (el) {
      ["placeholder", "alt", "aria-label"].forEach(function (attr) {
        var value = el.getAttribute(attr);
        if (!value) return;
        if (toFrench && translations[value]) el.setAttribute(attr, translations[value]);
        if (!toFrench) Object.keys(translations).forEach(function (english) { if (translations[english] === value) el.setAttribute(attr, english); });
      });
      if (el.tagName === "OPTION") {
        var value = el.textContent.trim();
        if (toFrench && translations[value]) el.textContent = translations[value];
        if (!toFrench) Object.keys(translations).forEach(function (english) { if (translations[english] === value) el.textContent = english; });
      }
    });
  }

  function setLanguage(next) {
    language = next === "fr" ? "fr" : "en";
    document.documentElement.lang = language;
    replaceText(document.body, language === "fr");
    if (language === "fr" && titles[document.title]) document.title = titles[document.title];
    if (language === "en") Object.keys(titles).forEach(function (english) { if (titles[english] === document.title) document.title = english; });
    var select = document.querySelector("[data-language-selector] select");
    if (select) select.value = language;
    try { localStorage.setItem("gsr-language", language); } catch (e) {}
  }

  addSelector();
  setLanguage(getLanguage());
  window.gsrSetLanguage = setLanguage;
  window.gsrLanguage = function () { return language; };
  if (window.MutationObserver) {
    new MutationObserver(function (records) {
      if (language !== "fr") return;
      records.forEach(function (record) {
        Array.prototype.forEach.call(record.addedNodes, function (node) {
          if (node.nodeType === 1) replaceText(node, true);
        });
      });
    }).observe(document.body, { childList: true, subtree: true });
  }
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
