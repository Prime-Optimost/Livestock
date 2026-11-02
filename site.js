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
    "Send us a request and we will reply with a price.": "Envoyez-nous une demande et nous vous repondrons avec un prix.",
    "You can use the quote form": "Vous pouvez utiliser le formulaire de devis",
    "message us on WhatsApp, call us, or fill in the": "nous ecrire sur WhatsApp, nous appeler ou remplir le",
    "quote form": "formulaire de devis",
    "printable form": "formulaire imprimable",
    "page explains each step.": "page explique chaque etape.",
    "No. There is no online checkout and no card payment on this site. You deal with us directly, and we agree the order and the payment with you by phone or WhatsApp.": "Non. Ce site ne propose ni paiement en ligne ni paiement par carte. Vous traitez directement avec nous et nous convenons de la commande et du paiement par telephone ou WhatsApp.",
    "Prices are quoted per order. They depend on current market rates, the weight of the animals and the season, so a fixed list would soon be wrong. Send a request and we will give you a price for exactly what you need.": "Les prix sont etablis par commande. Ils dependent des tarifs du marche, du poids des animaux et de la saison. Une liste fixe serait vite depassee. Envoyez une demande et nous vous donnerons un prix adapte a vos besoins.",
    "The product, roughly how many you want, the date you need them, your name, a phone or WhatsApp number we can reach you on, and your town or region. It is also helpful to say if you plan to collect or need delivery.": "Le produit, la quantite souhaitee, la date voulue, votre nom, un numero de telephone ou WhatsApp, ainsi que votre ville ou region. Precisez aussi si vous viendrez retirer la commande ou si vous avez besoin d'une livraison.",
    "By mobile money (MTN, Telecel or AT) or by bank transfer. You pay on delivery, or once the animal’s weight has been confirmed.": "Par Mobile Money (MTN, Telecel ou AT) ou par virement bancaire. Vous payez a la livraison ou apres confirmation du poids de l'animal.",
    "Yes. Collection is at the ranch in Santasi, Kumasi. Tell us when you send your request so we can have everything ready.": "Oui. Le retrait se fait au ranch a Santasi, Kumasi. Precisez-le dans votre demande afin que nous preparions tout.",
    "Delivery can be arranged. Ask when you send your request and tell us where it should go, so we can confirm whether we can do it and what it involves.": "Une livraison peut etre organisee. Indiquez la destination dans votre demande afin que nous confirmions les possibilites et les conditions.",
    "Breeding stock, for starting or growing your own herd": "Reproducteurs pour demarrer ou agrandir votre troupeau",
    "Live animals follow the ranch’s production and breeding cycles, so it is best to ask early, especially before festivals and functions. Manure is available all year round.": "Les animaux vivants suivent les cycles de production et d'elevage du ranch. Il est donc preferable de demander tot, surtout avant les fetes et ceremonies. Le fumier est disponible toute l'annee.",
    "Both. We sell to households, traders, butchers and caterers, as well as to buyers who need larger numbers. Tell us how many you need and we will work from there.": "Les deux. Nous vendons aux menages, aux commercants, aux bouchers et aux traiteurs, ainsi qu'aux acheteurs en grande quantite. Dites-nous combien il vous en faut et nous vous conseillerons.",
    "It is collected from beneath the raised, slatted floors of the animal housing at the ranch.": "Il est recueilli sous les planchers sureleves et ajoures des logements des animaux au ranch.",
    "Goats and sheep are raised in a semi-intensive system, in raised housing with slatted floors that keeps them off the ground. The water supply runs on solar power.": "Les chevres et les moutons sont eleves selon un systeme semi-intensif, dans des logements sureleves a planchers ajoures qui les gardent eloignes du sol. L'approvisionnement en eau fonctionne a l'energie solaire.",
    "The ranch is owned by Abraham Boakye. It is a sole proprietorship registered with the Registrar General’s Department in Ghana, Registration No. BN118400826.": "Le ranch appartient a Abraham Boakye. C'est une entreprise individuelle enregistree aupres du Registrar General's Department au Ghana, sous le numero BN118400826.",
    "In Santasi, Kumasi, Ashanti Region, Ghana. The location is shown on a map on the": "A Santasi, Kumasi, dans la region d'Ashanti au Ghana. L'emplacement est indique sur la carte de la",
    "Home page": "page d'accueil",
    "Call 024 346 8825 or 053 872 8899, message us on WhatsApp, or email": "Appelez le 024 346 8825 ou le 053 872 8899, ecrivez-nous sur WhatsApp ou envoyez un e-mail a",
    "No. There are no accounts or logins on this site.": "Non. Ce site ne comporte ni compte ni connexion.",
    "We use them only to reply to you and deal with your order. We do not sell them. Read the full": "Nous les utilisons uniquement pour vous repondre et traiter votre commande. Nous ne les vendons pas. Consultez la",
    "privacy policy": "politique de confidentialite",
    "Never. We will not ask for your PIN, password or card details by phone, WhatsApp or email. If someone asks for them in our name, do not give them, and call us on a number from this page.": "Jamais. Nous ne vous demanderons jamais votre code PIN, votre mot de passe ou les informations de votre carte par telephone, WhatsApp ou e-mail. Si quelqu'un les demande en notre nom, ne les donnez pas et appelez-nous a un numero indique sur cette page.",
    "The Golden Shield Ranch. Registration No. BN118400826. Hero photo by Matthew Robin Dix on Unsplash; product photos are illustrative stock images.": "Le Golden Shield Ranch. Numero d'enregistrement BN118400826. Photo principale par Matthew Robin Dix sur Unsplash ; les photos des produits sont illustratives.",
    "This website belongs to The Golden Shield Ranch, a sole proprietorship owned by Abraham Boakye, based in Santasi, Kumasi, Ghana (Registration No. BN118400826). In this policy, “we” and “us” mean the ranch.": "Ce site appartient au Golden Shield Ranch, une entreprise individuelle appartenant a Abraham Boakye et basee a Santasi, Kumasi, au Ghana (numero BN118400826). Dans cette politique, « nous » designe le ranch.",
    "What you send us": "Ce que vous nous envoyez",
    "When you ask for a quote, we receive what you tell us. That is usually your name, phone number, town or region, the product and quantity you want, when you need it, and any notes you add.": "Lorsque vous demandez un devis, nous recevons les informations que vous fournissez. Il s'agit generalement de votre nom, numero de telephone, ville ou region, produit et quantite souhaites, date du besoin et notes ajoutees.",
    "What happens automatically": "Ce qui se passe automatiquement",
    "We do not use advertising, analytics or tracking cookies on this site.": "Nous n'utilisons pas de publicite, d'analytique ou de cookies de suivi sur ce site.",
    "Other services this site uses": "Autres services utilises par ce site",
    "How we use your information": "Comment nous utilisons vos informations",
    "Who we share it with": "Avec qui nous les partageons",
    "How long we keep it": "Combien de temps nous les conservons",
    "Keeping it safe": "Comment nous les protegeons",
    "Your rights": "Vos droits",
    "We do not sell or rent your information.": "Nous ne vendons ni ne louons vos informations.",
    "Children": "Enfants",
    "Changes to this policy": "Modifications de cette politique",
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
  var faqFrench = [
    "Envoyez-nous une demande et nous vous repondrons avec un prix. Vous pouvez utiliser le <a href=\"quote.html\">formulaire de devis</a>, nous ecrire sur WhatsApp, nous appeler ou remplir le <a href=\"eoi-sheet.html\">formulaire imprimable</a>. La page <a href=\"order.html\">Comment commander</a> explique chaque etape.",
    "Non. Ce site ne propose ni paiement en ligne ni paiement par carte. Vous traitez directement avec nous et nous convenons de la commande et du paiement par telephone ou WhatsApp.",
    "Les prix sont etablis par commande. Ils dependent des tarifs du marche, du poids des animaux et de la saison. Une liste fixe serait vite depassee. Envoyez une demande et nous vous donnerons un prix adapte a vos besoins.",
    "Le produit, la quantite souhaitee, la date voulue, votre nom, un numero de telephone ou WhatsApp, ainsi que votre ville ou region. Precisez aussi si vous viendrez retirer la commande ou si vous avez besoin d'une livraison.",
    "Par Mobile Money (MTN, Telecel ou AT) ou par virement bancaire. Vous payez a la livraison ou apres confirmation du poids de l'animal.",
    "Oui. Le retrait se fait au ranch a Santasi, Kumasi. Precisez-le dans votre demande afin que nous preparions tout.",
    "Une livraison peut etre organisee. Indiquez la destination dans votre demande afin que nous confirmions les possibilites et les conditions.",
    "Les animaux vivants suivent les cycles de production et d'elevage du ranch. Il est donc preferable de demander tot, surtout avant les fetes et ceremonies. Le fumier est disponible toute l'annee.",
    "Les deux. Nous vendons aux menages, aux commercants, aux bouchers et aux traiteurs, ainsi qu'aux acheteurs en grande quantite. Dites-nous combien il vous en faut et nous vous conseillerons.",
    "Il est recueilli sous les planchers sureleves et ajoures des logements des animaux au ranch.",
    "Les chevres et les moutons sont eleves selon un systeme semi-intensif, dans des logements sureleves a planchers ajoures qui les gardent eloignes du sol. L'approvisionnement en eau fonctionne a l'energie solaire.",
    "Le ranch appartient a Abraham Boakye. C'est une entreprise individuelle enregistree aupres du Registrar General's Department au Ghana, sous le numero BN118400826.",
    "A Santasi, Kumasi, dans la region d'Ashanti au Ghana. L'emplacement est indique sur la carte de la <a href=\"index.html#find\">page d'accueil</a>.",
    "Appelez le 024 346 8825 ou le 053 872 8899, ecrivez-nous sur WhatsApp ou envoyez un e-mail a <a href=\"mailto:thegoldenshieldranch@gmail.com\">thegoldenshieldranch@gmail.com</a>.",
    "Non. Ce site ne comporte ni compte ni connexion.",
    "Nous les utilisons uniquement pour vous repondre et traiter votre commande. Nous ne les vendons pas. Consultez la <a href=\"privacy.html\">politique de confidentialite</a> complete.",
    "Jamais. Nous ne vous demanderons jamais votre code PIN, votre mot de passe ou les informations de votre carte par telephone, WhatsApp ou e-mail. Si quelqu'un les demande en notre nom, ne les donnez pas et appelez-nous a un numero indique sur cette page."
  ];

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
      if (toFrench) {
        if (translations[trimmed]) node.nodeValue = value.replace(trimmed, translations[trimmed]);
        else Object.keys(translations).sort(function (a, b) { return b.length - a.length; }).forEach(function (english) {
          if (node.nodeValue.indexOf(english) !== -1) node.nodeValue = node.nodeValue.split(english).join(translations[english]);
        });
      }
      if (!toFrench) {
        if (Object.keys(translations).some(function (english) { return translations[english] === trimmed; })) {
          Object.keys(translations).forEach(function (english) {
            if (translations[english] === trimmed) node.nodeValue = value.replace(trimmed, english);
          });
        } else Object.keys(translations).sort(function (a, b) { return translations[b].length - translations[a].length; }).forEach(function (english) {
          if (node.nodeValue.indexOf(translations[english]) !== -1) node.nodeValue = node.nodeValue.split(translations[english]).join(english);
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
    document.querySelectorAll(".faq details p").forEach(function (el) {
      if (!el.dataset.gsrEnglish) el.dataset.gsrEnglish = el.innerHTML;
    });
    replaceText(document.body, language === "fr");
    document.querySelectorAll(".faq details p").forEach(function (el, index) {
      el.innerHTML = language === "fr" && faqFrench[index] ? faqFrench[index] : el.dataset.gsrEnglish;
    });
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
