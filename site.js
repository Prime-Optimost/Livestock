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
    "Menu": "Menu",
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

  Object.assign(translations, {
    "Skip to content": "Aller au contenu",
    "Main": "Navigation principale",
    "All rights reserved.": "Tous droits reserves.",
    "Solar-powered water": "Eau alimentee par l'energie solaire",
    "Water for the animals runs on solar power.": "L'eau des animaux est alimentee par l'energie solaire.",
    "Raised housing": "Logements sureleves",
    "Slatted floors keep animals off the ground.": "Les planchers ajoures gardent les animaux eloignes du sol.",
    "Goats and sheep": "Chevres et moutons",
    "Small ruminants are what we raise and sell.": "Nous elevons et vendons des petits ruminants.",
    "Six women on the team": "Six femmes dans l'equipe",
    "Local women are employed on the ranch.": "Des femmes de la region travaillent au ranch.",
    "Tell us what you want and how many.": "Dites-nous ce que vous voulez et en quelle quantite.",
    "We call or message you on WhatsApp with a price.": "Nous vous appelons ou vous ecrivons sur WhatsApp avec un prix.",
    "Pay by mobile money or bank transfer once you agree.": "Payez par Mobile Money ou virement bancaire apres accord.",
    "How ordering works, step by step": "Comment commander, etape par etape",
    "News, photos and progress from Santasi.": "Nouvelles, photos et progres de Santasi.",
    "A black and white goat standing on grass": "Une chevre noire et blanche debout dans l'herbe",
    "A group of sheep resting together": "Un groupe de moutons se reposant ensemble",
    "A black and white horned goat on grass": "Une chevre noire et blanche a cornes dans l'herbe",
    "Organic manure collected at the ranch": "Fumier organique recueilli au ranch",
    "What we sell": "Ce que nous vendons",
    "Sold live, by the animal": "Vendus vivants, a l'unite",
    "Weights and prices confirmed before you pay": "Poids et prix confirmes avant le paiement",
    "Collection at the ranch, or delivery by arrangement": "Retrait au ranch ou livraison sur arrangement",
    "For new and expanding herds": "Pour les troupeaux nouveaux ou en expansion",
    "Availability depends on the breeding cycle": "La disponibilite depend du cycle d'elevage",
    "Talk to us early so we can plan the order": "Contactez-nous tot afin de planifier la commande",
    "Available year-round": "Disponible toute l'annee",
    "Bagged or loose, by arrangement": "En sac ou en vrac, sur arrangement",
    "Suitable for crop farms, vegetable gardens and lawns": "Convient aux cultures, potagers et pelouses",
    "How prices work": "Comment fonctionnent les prix",
    "Prices are quoted per order, based on current market rates, animal weights and the season.": "Les prix sont etablis par commande selon les tarifs du marche, le poids des animaux et la saison.",
    "Live animals depend on the ranch’s production and breeding cycles, so ask before you plan.": "Les animaux vivants dependent des cycles de production et d'elevage du ranch. Demandez avant de planifier.",
    "Manure is available year-round.": "Le fumier est disponible toute l'annee.",
    "Payment is by mobile money (MTN, Telecel, AT) or bank transfer, on delivery or once weights are confirmed.": "Le paiement se fait par Mobile Money (MTN, Telecel, AT) ou virement bancaire, a la livraison ou apres confirmation du poids.",
    "Need more than one product? Say so in the notes on your request and we will quote for the whole order.": "Besoin de plusieurs produits ? Indiquez-le dans les notes et nous etablirons un devis pour toute la commande.",
    "Prefer paper?": "Vous preferez le papier ?",
    "Open the printable Expression of Interest form": "Ouvrir le formulaire imprimable d'expression d'interet",
    "There is no online checkout. You send a request, we send a price, and you confirm. Here is what happens at each step.": "Il n'y a pas de paiement en ligne. Vous envoyez une demande, nous envoyons un prix et vous confirmez. Voici les etapes.",
    "Three steps, start to finish": "Trois etapes, du debut a la fin",
    "What to send us": "Ce qu'il faut nous envoyer",
    "The more you tell us up front, the faster we can come back with a price.": "Plus vous nous donnez d'informations, plus vite nous pourrons vous repondre avec un prix.",
    "Your order": "Votre commande",
    "Your details": "Vos coordonnees",
    "Paying and collecting": "Paiement et retrait",
    "see all downloads": "voir tous les telechargements",
    "A working farm in Santasi": "Une ferme active a Santasi",
    "How we farm": "Comment nous elevons nos animaux",
    "Simple practices, applied consistently.": "Des pratiques simples appliquees avec constance.",
    "Solar-powered water.": "Eau alimentee par l'energie solaire.",
    "Raised, slatted-floor housing.": "Logements sureleves a planchers ajoures.",
    "Small ruminants only.": "Uniquement des petits ruminants.",
    "Local employment.": "Emploi local.",
    "Who we sell to": "A qui nous vendons",
    "We sell to people buying for the home and to businesses buying in quantity.": "Nous vendons aux menages et aux entreprises qui achetent en quantite.",
    "The business": "L'entreprise",
    "Owner: Abraham Boakye": "Proprietaire : Abraham Boakye",
    "Location: Santasi, Kumasi, Ghana": "Lieu : Santasi, Kumasi, Ghana",
    "Registration No. BN118400826": "Numero d'enregistrement BN118400826",
    "Download the profile (Word)": "Telecharger le profil (Word)",
    "Open a file on your phone or computer, or print it at home.": "Ouvrez un fichier sur votre telephone ou ordinateur, ou imprimez-le chez vous.",
    "Company Profile": "Profil de l'entreprise",
    "Product 01": "Produit 01",
    "Product 02": "Produit 02",
    "Product 03": "Produit 03",
    "Product 04": "Produit 04",
    "They are raised on the ranch under a semi-intensive system, in raised housing with slatted floors, and they are sold straight to households, traders, butchers and caterers.": "Ils sont eleves au ranch selon un systeme semi-intensif, dans des logements sureleves a planchers ajoures, puis vendus directement aux menages, commercants, bouchers et traiteurs.",
    "Finisher sheep, sold live, raised the same way as the goats. Popular for family occasions, festivals and catering, and available to traders and bulk buyers as well as households.": "Moutons de finition vendus vivants et eleves comme les chevres. Apprecies pour les fetes familiales, festivals et services de restauration, ils sont disponibles pour les commercants, acheteurs en gros et menages.",
    "Chevres et moutons for starting or growing your own herd. Tell us the type and number you are looking for and we will tell you what is available from the current stock.": "Chevres et moutons pour demarrer ou agrandir votre troupeau. Dites-nous le type et le nombre recherches et nous vous indiquerons les disponibilites actuelles.",
    "for starting or growing your own herd.": "pour demarrer ou agrandir votre troupeau.",
    "Tell us the type and number you are looking for and we will tell you what is available from the current stock.": "Dites-nous le type et le nombre recherches et nous vous indiquerons les disponibilites actuelles.",
    "Manure collected from beneath the slatted housing floors, for farms, gardens and landscaping. It is available all year round, unlike the live animals.": "Fumier recueilli sous les planchers ajoures, pour les fermes, jardins et amenagements paysagers. Il est disponible toute l'annee, contrairement aux animaux vivants.",
    "Good for festive and catering orders, so order ahead": "Ideal pour les fetes et la restauration, commandez a l'avance",
    "Demander un devis for manure": "Demander un devis pour du fumier",
    "Request a quote for manure": "Demander un devis pour du fumier",
    "Print": "Imprimer",
    "Save as PDF": "Enregistrer en PDF",
    "Fields marked": "Les champs marques",
    "More than one (say which in the notes)": "Plusieurs (precisez lesquels dans les notes)",
    "For example, 10 goats": "Par exemple, 10 chevres",
    "For example, before Christmas": "Par exemple, avant Noel",
    "This opens WhatsApp or your email app with your request filled in. Press send there to finish.": "Cela ouvre WhatsApp ou votre application e-mail avec votre demande remplie. Appuyez sur envoyer pour terminer.",
    "Call": "Appeler",
    "Want to fill in a paper form?": "Vous voulez remplir un formulaire papier ?",
    "Open the printable form": "Ouvrir le formulaire imprimable",
    "Ranch Updates": "Nouvelles du ranch",
    "New housing, new stock, photos from the ranch. The newest posts come first.": "Nouveaux logements, nouveaux animaux et photos du ranch. Les publications recentes apparaissent en premier.",
    "No updates yet": "Aucune nouvelle pour le moment",
    "Page not found": "Page introuvable",
    "The page you were looking for is not here. It may have moved, or the link may be mistyped.": "La page que vous cherchez n'est pas ici. Elle a peut-etre ete deplacee ou le lien contient une erreur.",
    "Expression of Interest form": "Formulaire d'expression d'interet",
    "This sheet is sized for A4. Print it, fill it in by hand, and bring it to the ranch or send us a photo on WhatsApp.": "Cette feuille est au format A4. Imprimez-la, remplissez-la a la main et apportez-la au ranch ou envoyez-nous une photo sur WhatsApp.",
    "The Golden Shield Ranch is a livestock farm in Santasi, Kumasi, owned by Abraham Boakye. We raise goats and sheep with solar-powered water and raised, slatted-floor housing, and we sell directly to buyers.": "Le Golden Shield Ranch est une ferme d'elevage a Santasi, Kumasi, appartenant a Abraham Boakye. Nous elevons des chevres et des moutons avec une eau solaire et des logements sureleves a planchers ajoures, puis nous vendons directement aux acheteurs.",
    "Climate-Smart Small Ruminant Value Chain. Data-Driven Agribusiness for Economic Self-Reliance.": "Chaine de valeur durable des petits ruminants. Agrobusiness fonde sur les donnees pour l'autonomie economique.",
    "The ranch is in Santasi, Kumasi, in the Ashanti Region of Ghana. Collection is at the ranch, and delivery can be arranged when you order.": "Le ranch se trouve a Santasi, Kumasi, dans la region d'Ashanti au Ghana. Le retrait se fait au ranch et une livraison peut etre organisee lors de la commande.",
    "Live goats, live sheep, breeding stock and organic manure. Prices are quoted per order, so tell us what you need and we’ll come back with a price.": "Chevres vivantes, moutons vivants, reproducteurs et fumier organique. Les prix sont etablis par commande ; dites-nous ce dont vous avez besoin et nous vous repondrons avec un prix.",
    "The product, roughly how many you want, the date you need them, your name, a phone or WhatsApp number we can reach you on, and your town or region.": "Le produit, la quantite souhaitee, la date voulue, votre nom, un numero de telephone ou WhatsApp, ainsi que votre ville ou region.",
    "What happens to the details I send?": "Que faites-vous des informations que j'envoie ?",
    "This website has no accounts, no advertising and no tracking cookies.": "Ce site ne comporte ni comptes, ni publicite, ni cookies de suivi.",
    "You can ask us what we hold about you, and ask us to correct or delete it.": "Vous pouvez nous demander quelles informations nous detenons sur vous et demander leur correction ou leur suppression.",
    "You can reach us at": "Vous pouvez nous joindre a",
    "We receive it by WhatsApp, email, phone call or the printable form.": "Nous les recevons par WhatsApp, e-mail, appel telephonique ou formulaire imprimable.",
    "The quote form on this website does not store anything on the site. It prepares a message that opens in your WhatsApp or email app. Nothing reaches us unless you press send there.": "Le formulaire de devis ne stocke rien sur le site. Il prepare un message qui ouvre votre application WhatsApp ou e-mail. Nous ne recevons rien tant que vous n'appuyez pas sur envoyer.",
    "The Home page remembers, for the length of your visit only, that you have seen the welcome screen, so it does not show again. Your browser deletes this note when you close the tab.": "La page d'accueil se souvient uniquement pendant votre visite que vous avez vu l'ecran d'accueil, afin de ne pas l'afficher a nouveau. Votre navigateur supprime cette note lorsque vous fermez l'onglet.",
    "Like most websites, the company that hosts this site may keep basic technical records, such as your IP address, browser type and the pages requested, for security and to keep the site running.": "Comme la plupart des sites, l'entreprise qui heberge celui-ci peut conserver des donnees techniques de base, comme votre adresse IP, votre navigateur et les pages consultees, pour la securite et le fonctionnement du site.",
    "Google Fonts.": "Google Fonts.",
    "OpenStreetMap.": "OpenStreetMap.",
    "WhatsApp and email.": "WhatsApp et e-mail.",
    "Links to other websites are outside our control, and we are not responsible for how they handle your information.": "Les liens vers d'autres sites echappent a notre controle et nous ne sommes pas responsables de leur traitement de vos informations.",
    "To reply to your enquiry and give you a quote.": "Repondre a votre demande et vous fournir un devis.",
    "To agree and carry out your order, including payment, collection or delivery.": "Convenir et executer votre commande, y compris le paiement, le retrait ou la livraison.",
    "To keep ordinary business records of enquiries and orders.": "Conserver les registres courants des demandes et commandes.",
    "To contact you about your order if something changes.": "Vous contacter au sujet de votre commande en cas de changement.",
    "We will not add you to a mailing list or send you promotions without asking you first.": "Nous ne vous ajouterons pas a une liste de diffusion et ne vous enverrons pas de promotions sans votre accord.",
    "We do not sell or rent your information. We may share what is needed with:": "Nous ne vendons ni ne louons vos informations. Nous pouvons partager le necessaire avec :",
    "Someone helping us deliver your order, so they can find you.": "Une personne qui nous aide a livrer votre commande, afin qu'elle puisse vous trouver.",
    "Your bank or mobile money provider, when you pay us.": "Votre banque ou fournisseur de Mobile Money lorsque vous nous payez.",
    "The authorities, if the law requires it.": "Les autorites, si la loi l'exige.",
    "We keep enquiry and order details only as long as we need them to deal with your request and to keep ordinary business records. After that we delete them.": "Nous conservons les details des demandes et commandes uniquement le temps necessaire pour traiter votre demande et tenir nos registres courants. Nous les supprimons ensuite.",
    "The phones and email account that receive your details are protected by passcodes. We will never ask you for your mobile money PIN, a password or your card details. If someone asks for these in our name, do not give them, and call us.": "Les telephones et le compte e-mail qui recoivent vos informations sont proteges par des codes. Nous ne vous demanderons jamais votre code Mobile Money, votre mot de passe ou les informations de votre carte. Si quelqu'un les demande en notre nom, ne les donnez pas et appelez-nous.",
    "Ghana’s Data Protection Act, 2012 (Act 843) gives you rights over your personal information. You can ask us:": "La loi ghanenne sur la protection des donnees de 2012 (loi 843) vous donne des droits sur vos informations personnelles. Vous pouvez nous demander :",
    "what information we hold about you;": "quelles informations nous detenons sur vous ;",
    "to correct anything that is wrong;": "de corriger toute information incorrecte ;",
    "to delete your information when we no longer need it;": "de supprimer vos informations lorsque nous n'en avons plus besoin ;",
    "to stop contacting you.": "de cesser de vous contacter.",
    "To do any of these, email or call us using the details above. If you are not satisfied with how we handle your information, you can complain to Ghana’s Data Protection Commission.": "Pour exercer ces droits, ecrivez-nous ou appelez-nous avec les coordonnees ci-dessus. Si vous n'etes pas satisfait de notre traitement de vos informations, vous pouvez vous plaindre a la Commission ghanenne de protection des donnees.",
    "This website is for buyers and is not aimed at children. We do not knowingly collect information from children.": "Ce site s'adresse aux acheteurs et non aux enfants. Nous ne collectons pas sciemment d'informations aupres d'enfants.",
    "If we change how we handle your information, for example by adding a new tool to the website, we will update this page and the date at the top.": "Si nous modifions notre traitement de vos informations, par exemple en ajoutant un nouvel outil au site, nous mettrons a jour cette page et la date en haut."
    ,"We’ll post news and photos here as the ranch grows. In the meantime, get in touch and we’ll tell you what is available now.": "Nous publierons ici les nouvelles et photos du ranch. En attendant, contactez-nous et nous vous dirons ce qui est disponible.",
    "Please fill in the fields marked with a star.": "Veuillez remplir les champs marques d'une etoile.",
    "Tell us what you need. We’ll reply by phone or WhatsApp with a price.": "Dites-nous ce dont vous avez besoin. Nous vous repondrons par telephone ou WhatsApp avec un prix.",
    "are required.": "sont obligatoires.",
    "or": "ou",
    "Back to the online form": "Retour au formulaire en ligne",
    "The page title is not available": "Le titre de la page n'est pas disponible"
  });

  Object.assign(translations, {
    "A livestock farm in Santasi, Kumasi, raising goats and sheep and selling directly to buyers.": "Une ferme d'elevage a Santasi, Kumasi, qui eleve des chevres et des moutons et vend directement aux acheteurs.",
    "The Golden Shield Ranch is a livestock farm in Santasi, Kumasi, owned by Abraham Boakye. We raise goats and sheep, and we sell what we raise directly to households, traders, butchers and caterers.": "Le Golden Shield Ranch est une ferme d'elevage a Santasi, Kumasi, appartenant a Abraham Boakye. Nous elevons des chevres et des moutons et vendons directement aux menages, commercants, bouchers et traiteurs.",
    "Water for the animals runs on solar power, and the animals are kept in raised housing with slatted floors. We sell live animals, breeding stock for farmers who are starting or growing a herd, and manure from beneath the housing for farms and gardens.": "L'eau des animaux fonctionne a l'energie solaire et les animaux sont gardes dans des logements sureleves a planchers ajoures. Nous vendons des animaux vivants, des reproducteurs pour les eleveurs qui demarrent ou agrandissent un troupeau, ainsi que du fumier pour les fermes et jardins.",
    "The animals’ water supply runs on solar power.": "L'approvisionnement en eau des animaux fonctionne a l'energie solaire.",
    "Animals are kept off the ground, and manure is collected from beneath the floors.": "Les animaux restent eloignes du sol et le fumier est recueilli sous les planchers.",
    "Goats and sheep are what we raise and sell.": "Nous elevons et vendons des chevres et des moutons.",
    "Six women from the area work on the ranch.": "Six femmes de la region travaillent au ranch.",
    "Households buying live animals for the family": "Menages achetant des animaux vivants pour la famille",
    "Traders and bulk buyers": "Commercants et acheteurs en gros",
    "Butchers and caterers": "Bouchers et traiteurs",
    "Farmers starting or growing a herd, through our breeding stock": "Eleveurs qui demarrent ou agrandissent un troupeau grace a nos reproducteurs",
    "Farms, gardens and landscaping, through our manure": "Fermes, jardins et amenagements paysagers grace a notre fumier",
    "For buyers, partners and anyone who needs the ranch in writing, the company profile covers who we are, what we sell and how to buy.": "Pour les acheteurs, partenaires et toute personne qui souhaite des informations ecrites sur le ranch, le profil de l'entreprise presente qui nous sommes, ce que nous vendons et comment acheter.",
    "There is no online checkout. You send a request, we send a price, and you confirm. Here is what happens at each step.": "Il n'y a pas de paiement en ligne. Vous envoyez une demande, nous envoyons un prix et vous confirmez. Voici les etapes.",
    "Tell us the product, the number you want and the date you need it. Use the quote form, WhatsApp, a phone call or the printable form.": "Dites-nous le produit, la quantite souhaitee et la date voulue. Utilisez le formulaire de devis, WhatsApp, un appel telephonique ou le formulaire imprimable.",
    "We reply by phone or WhatsApp with a price. Prices are quoted per order and depend on market rates, animal weights and the season.": "Nous repondons par telephone ou WhatsApp avec un prix. Les prix sont etablis par commande et dependent des tarifs du marche, du poids des animaux et de la saison.",
    "Once you agree the price, confirm the order. Pay by mobile money or bank transfer, on delivery or once the weight is confirmed.": "Apres accord sur le prix, confirmez la commande. Payez par Mobile Money ou virement bancaire, a la livraison ou apres confirmation du poids.",
    "The more you tell us up front, the faster we can come back with a price.": "Plus vous nous donnez d'informations, plus vite nous pourrons vous repondre avec un prix.",
    "The product: live goats, live sheep, breeding stock or manure": "Le produit : chevres vivantes, moutons vivants, reproducteurs ou fumier",
    "How many you want, or roughly how many": "La quantite souhaitee, meme approximative",
    "The date you need them, especially for festivals and functions": "La date voulue, surtout pour les fetes et ceremonies",
    "Whether you will collect at the ranch or need delivery": "Si vous viendrez retirer la commande au ranch ou si vous avez besoin d'une livraison",
    "Your name": "Votre nom",
    "A phone number or WhatsApp number we can reach you on": "Un numero de telephone ou WhatsApp auquel nous pouvons vous joindre",
    "Your town or region": "Votre ville ou region",
    "Anything else we should know, such as the occasion or the size you are looking for": "Toute autre information utile, comme l'occasion ou la taille recherchee",
    "Payment is by mobile money (MTN, Telecel, AT) or bank transfer.": "Le paiement se fait par Mobile Money (MTN, Telecel, AT) ou virement bancaire.",
    "You pay on delivery, or once the animal’s weight is confirmed.": "Vous payez a la livraison ou apres confirmation du poids de l'animal.",
    "Collection is at the ranch in Santasi, Kumasi.": "Le retrait se fait au ranch a Santasi, Kumasi.",
    "Delivery can be arranged. Ask when you send your request.": "Une livraison peut etre organisee. Demandez-la dans votre demande.",
    "Live animals follow the ranch’s production and breeding cycles, so ask early. Manure is available all year round.": "Les animaux vivants suivent les cycles de production et d'elevage du ranch, demandez donc tot. Le fumier est disponible toute l'annee.",
    "Send a request and we’ll reply with a quote.": "Envoyez une demande et nous vous repondrons avec un devis.",
    "Map of Santasi, Kumasi, in the Ashanti Region of Ghana": "Carte de Santasi, Kumasi, dans la region d'Ashanti au Ghana",
    "Get directions": "Itineraire",
    "Call 024 346 8825": "Appeler le 024 346 8825",
    ", or": ", ou",
    "Download the profile (Word)": "Telecharger le profil (Word)"
  });

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
    ,"Products | The Golden Shield Ranch": "Produits | Le Golden Shield Ranch"
    ,"Page not found | The Golden Shield Ranch": "Page introuvable | Le Golden Shield Ranch",
    "Expression of Interest form | The Golden Shield Ranch": "Formulaire d'expression d'interet | Le Golden Shield Ranch"
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
          if (english.length < 4) return;
          if (node.nodeValue.indexOf(english) !== -1) node.nodeValue = node.nodeValue.split(english).join(translations[english]);
        });
      }
      if (!toFrench) {
        if (Object.keys(translations).some(function (english) { return translations[english] === trimmed; })) {
          Object.keys(translations).forEach(function (english) {
            if (translations[english] === trimmed) node.nodeValue = value.replace(trimmed, english);
          });
        } else Object.keys(translations).sort(function (a, b) { return translations[b].length - translations[a].length; }).forEach(function (english) {
          if (english.length < 4) return;
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
