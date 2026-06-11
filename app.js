/* ============================================================
   BLUE SALON — STOREFRONT HOMEPAGE (vanilla JS port of the React kit)
   Data comes from ui_kits/website/data.js (window.BS_DATA).
   ============================================================ */
(function () {
  "use strict";

  var data = window.BS_DATA;

  /* ── Helpers ────────────────────────────────────────────── */

  function formatQAR(amount) {
    return "QAR " + Number(amount).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  function pill(variant, text) {
    return '<span class="pill ' + variant + '">' + text + "</span>";
  }

  /* Edit card: ec(tag, title, meta[, variant]) */
  function ec(tag, title, meta, variant) {
    return (
      '<div class="bs-edit-card' + (variant ? " " + variant : "") + '">' +
        '<div class="tag">' + tag + "</div>" +
        '<div class="title">' + title + "</div>" +
        '<div class="meta">' + meta + "</div>" +
      "</div>"
    );
  }

  /* ── Mega menus ─────────────────────────────────────────── */

  var MEGA_MENUS = {
    new:
      '<div class="bs-mega cols-5">' +
        '<div class="bs-col"><h4>Just landed</h4><ul>' +
          '<li class="featured">Shop all new arrivals →</li>' +
          "<li>Last 7 days " + pill("new", "NEW") + "</li>" +
          "<li>This month</li><li>Pre-order</li><li>Restocked</li><li>Coming soon</li>" +
        "</ul></div>" +
        '<div class="bs-col"><h4>For her</h4><ul>' +
          "<li>Clothing</li><li>Bags</li><li>Footwear</li>" +
          "<li>Lingerie</li><li>Fine jewellery</li><li>Abayas &amp; kaftans</li>" +
        "</ul></div>" +
        '<div class="bs-col"><h4>For him</h4><ul>' +
          "<li>Clothing</li><li>Footwear</li><li>Bags</li>" +
          "<li>Watches</li><li>Fragrances</li><li>Traditional wear</li>" +
        "</ul></div>" +
        '<div class="bs-col"><h4>Beyond fashion</h4><ul>' +
          "<li>Beauty &amp; fragrance</li><li>Newborn essentials</li>" +
          "<li>Home &amp; linen</li><li>Luggage</li><li>Gourmet</li><li>Gift boxes</li>" +
        "</ul></div>" +
        '<div class="bs-edit"><div class="bs-edit-label">THE EDIT</div>' +
          ec("THIS WEEK", "42 new arrivals", "From Creed, MCM, Aigner & more", "feature") +
          ec("EXCLUSIVE", "SS26 capsule launch", "Only at Blue Salon Qatar") +
        "</div>" +
      "</div>",

    women:
      '<div class="bs-mega cols-6">' +
        '<div class="bs-col"><h4>Clothing</h4><ul>' +
          '<li class="featured">Shop all clothing →</li>' +
          "<li>Dresses</li><li>Gowns</li><li>Tops &amp; blouses</li>" +
          "<li>Knitwear</li><li>Pants &amp; trousers</li><li>Skirts</li>" +
          "<li>Denim</li><li>Coats &amp; jackets</li>" +
          "<li>Jumpsuits &amp; sets</li><li>Activewear</li>" +
        "</ul></div>" +
        '<div class="bs-col"><h4>Lingerie &amp; intimates</h4><ul>' +
          '<li class="featured">All lingerie →</li>' +
          "<li>Bras</li><li>Panties</li><li>Shapewear</li>" +
          "<li>Hosiery &amp; daywear</li><li>Sports bras</li>" +
          "<li>Blushing brides " + pill("gift", "GIFT") + "</li>" +
          "<li>Maternity</li>" +
        "</ul>" +
        '<h4 class="sub">Sleep &amp; lounge</h4><ul>' +
          "<li>Nightdress</li><li>Pyjamas &amp; loungewear</li>" +
          "<li>Dressing gowns</li><li>Swimwear</li>" +
        "</ul></div>" +
        '<div class="bs-col"><h4>Modest &amp; occasion</h4><ul>' +
          '<li class="featured">Abayas &amp; kaftans ' + pill("eid", "EID") + "</li>" +
          "<li>Eid collection</li><li>Wedding guest</li>" +
          "<li>Bridal</li><li>Evening &amp; gowns</li><li>Resort wear</li>" +
        "</ul>" +
        '<h4 class="sub">Footwear</h4><ul>' +
          "<li>Heels</li><li>Sandals &amp; flats</li>" +
          "<li>Sneakers &amp; trainers</li><li>Boots</li><li>Loafers</li>" +
        "</ul></div>" +
        '<div class="bs-col"><h4>Bags</h4><ul>' +
          "<li>Shoulder bags</li><li>Hand bags</li><li>Tote bags</li>" +
          "<li>Crossbody</li><li>Clutch &amp; mini</li>" +
          "<li>Backpacks</li><li>Wallets &amp; card cases</li>" +
        "</ul>" +
        '<h4 class="sub">Accessories</h4><ul>' +
          "<li>Scarves &amp; belts</li><li>Sunglasses</li><li>Hair accessories</li>" +
        "</ul></div>" +
        '<div class="bs-col"><h4>Watches &amp; jewellery</h4><ul>' +
          "<li>Luxury timepieces " + pill("signature", "PREMIUM") + "</li>" +
          "<li>Fashion timepieces</li><li>Fine jewellery</li>" +
          "<li>Fashion jewellery</li><li>Necklaces &amp; sets</li>" +
          "<li>Earrings &amp; rings</li><li>Bracelets</li>" +
        "</ul>" +
        '<h4 class="sub">Top brands</h4><ul>' +
          "<li>La Perla</li><li>MCM</li><li>Aigner</li><li>Swarovski</li>" +
          '<li class="featured">View all A–Z →</li>' +
        "</ul></div>" +
        '<div class="bs-edit"><div class="bs-edit-label">THE EDIT</div>' +
          ec("EID 2026", "Abaya & kaftan edit", "42 pieces · from QAR 1,200", "feature") +
          ec("BRIDAL", "Trousseau by La Perla", "Hand-wrapped · gift ready") +
          ec("CONCIERGE", "Personal styling", "Complimentary · in-store") +
        "</div>" +
      "</div>",

    men:
      '<div class="bs-mega cols-6">' +
        '<div class="bs-col"><h4>Clothing</h4><ul>' +
          '<li class="featured">Shop all clothing →</li>' +
          "<li>T-shirts</li><li>Polo shirts</li><li>Shirts</li>" +
          "<li>Sweatshirts &amp; hoodies</li><li>Sweaters &amp; cardigans</li>" +
          "<li>Blazers</li><li>Coats &amp; jackets</li>" +
          "<li>Jeans</li><li>Trousers &amp; shorts</li><li>Sportswear</li>" +
        "</ul></div>" +
        '<div class="bs-col"><h4>Basics &amp; lounge</h4><ul>' +
          "<li>Underwear</li><li>Nightwear &amp; loungewear</li>" +
          "<li>Socks</li><li>Belts</li><li>Ties &amp; cufflinks</li>" +
          "<li>Caps &amp; hats</li><li>Scarves</li>" +
        "</ul>" +
        '<h4 class="sub">Traditional</h4><ul>' +
          '<li class="featured">Traditional wear ' + pill("signature", "QATAR") + "</li>" +
          "<li>Traditional footwear</li>" +
        "</ul></div>" +
        '<div class="bs-col"><h4>Footwear</h4><ul>' +
          '<li class="featured">All footwear →</li>' +
          "<li>Sneakers</li><li>Trainers</li>" +
          "<li>Loafers &amp; drivers</li><li>Oxford shoes</li>" +
          "<li>Boots</li><li>Slides &amp; sandals</li>" +
        "</ul>" +
        '<h4 class="sub">Bags</h4><ul>' +
          "<li>Backpacks</li><li>Crossbody bags</li><li>Wallets &amp; cardholders</li>" +
        "</ul></div>" +
        '<div class="bs-col"><h4>Watches</h4><ul>' +
          '<li class="featured">Luxury timepieces ' + pill("signature", "PREMIUM") + "</li>" +
          "<li>Breitling</li><li>Fashion timepieces</li><li>Smart watches</li>" +
        "</ul>" +
        '<h4 class="sub">Accessories</h4><ul>' +
          "<li>Sunglasses</li><li>Bracelets</li>" +
          "<li>Rings</li><li>Pens</li><li>Cufflinks</li>" +
        "</ul></div>" +
        '<div class="bs-col"><h4>Grooming &amp; scent</h4><ul>' +
          "<li>Men's fragrance</li><li>Skincare</li><li>Haircare</li>" +
        "</ul>" +
        '<h4 class="sub">Top brands</h4><ul>' +
          "<li>Creed</li><li>Tom Ford</li><li>Cole Haan</li>" +
          "<li>Corneliani</li><li>Jacob Cohen</li>" +
          '<li class="featured">View all A–Z →</li>' +
        "</ul></div>" +
        '<div class="bs-edit"><div class="bs-edit-label">THE EDIT</div>' +
          ec("SIGNATURE", "Breitling timepieces", "Swiss heritage · from QAR 18,500", "feature") +
          ec("SUMMER", "Linen & lightweight", "Built for Doha heat") +
          ec("GIFT GUIDE", "For him under QAR 2,500", "28 curated picks") +
        "</div>" +
      "</div>",

    kids:
      '<div class="bs-mega cols-6">' +
        '<div class="bs-col"><h4>Newborn</h4><ul>' +
          '<li class="featured">Boys · 0–9 months →</li>' +
          '<li class="featured">Girls · 0–9 months →</li>' +
          "<li>Babysuits</li><li>Baby nest</li><li>Blankets</li>" +
          "<li>Sets</li><li>Changing bags</li><li>Accessories</li>" +
        "</ul>" +
        '<h4 class="sub">Essentials</h4><ul>' +
          "<li>Strollers</li><li>Car seats</li><li>Feeding</li><li>Toys</li>" +
        "</ul></div>" +
        '<div class="bs-col"><h4>Baby · 9–36 months</h4><ul>' +
          '<li class="featured">All baby →</li>' +
          "<li>Baby boys</li><li>Baby girls</li>" +
          "<li>Tops &amp; bottoms</li><li>Dresses</li>" +
          "<li>Coats &amp; jackets</li><li>Jogging suits</li>" +
          "<li>Sets</li><li>Nightwear</li>" +
        "</ul></div>" +
        '<div class="bs-col"><h4>Kids &amp; teens · 3–16y</h4><ul>' +
          '<li class="featured">All kids &amp; teens →</li>' +
          "<li>Boys</li><li>Girls</li>" +
          "<li>Tops &amp; bottoms</li><li>Dresses</li>" +
          "<li>Jogging suits</li><li>Coats &amp; jackets</li>" +
          "<li>Swimwear</li>" +
          "<li>Eid outfits " + pill("eid", "EID") + "</li>" +
        "</ul></div>" +
        '<div class="bs-col"><h4>Footwear</h4><ul>' +
          '<li class="featured">All kids shoes →</li>' +
          "<li>Trainers</li><li>Ballerinas</li>" +
          "<li>Sandals &amp; slippers</li><li>School shoes</li>" +
        "</ul>" +
        '<h4 class="sub">Shop by age</h4><ul>' +
          "<li>Newborn (0–9m)</li><li>Baby (9–36m)</li>" +
          "<li>Kids (3–10y)</li><li>Teens (10–16y)</li>" +
        "</ul></div>" +
        '<div class="bs-col"><h4>Top brands</h4><ul>' +
          "<li>Aigner Kids</li><li>Missoni Kids</li><li>Moschino Kids</li>" +
          "<li>Polo Ralph Lauren</li><li>Tommy Hilfiger</li>" +
          "<li>Roberto Cavalli</li><li>Kissy Kissy</li>" +
          "<li>Emporio Armani</li>" +
          '<li class="featured">View all →</li>' +
        "</ul></div>" +
        '<div class="bs-edit"><div class="bs-edit-label">THE EDIT</div>' +
          ec("NEWBORN", "Welcome baby box", "Hand-wrapped · from QAR 450", "feature") +
          ec("EID 2026", "Mini-me looks", "Mother & daughter sets") +
          ec("SCHOOL", "Back to school edit", "Backpacks · shoes · essentials") +
        "</div>" +
      "</div>",

    beauty:
      '<div class="bs-mega cols-6">' +
        '<div class="bs-col"><h4>Fragrances</h4><ul>' +
          '<li class="featured">All fragrances →</li>' +
          "<li>Women's fragrance</li><li>Men's fragrance</li>" +
          "<li>Bathline</li><li>Extracts &amp; oils</li>" +
          "<li>Home fragrance</li><li>Gift sets</li>" +
        "</ul>" +
        '<h4 class="sub">Niche fragrance</h4><ul>' +
          '<li class="featured">Niche house ' + pill("signature", "RARE") + "</li>" +
          "<li>Creed</li><li>Tom Ford</li><li>Floris London</li>" +
        "</ul></div>" +
        '<div class="bs-col"><h4>Make-up · face</h4><ul>' +
          "<li>Foundation</li><li>Concealer</li><li>Powder</li>" +
          "<li>Blusher</li><li>Bronzer &amp; highlighter</li><li>Primer &amp; fixing</li>" +
        "</ul>" +
        '<h4 class="sub">Make-up · eyes</h4><ul>' +
          "<li>Eyeshadow</li><li>Mascara</li><li>Eyeliner</li><li>Eyebrows</li>" +
        "</ul></div>" +
        '<div class="bs-col"><h4>Make-up · lips</h4><ul>' +
          "<li>Lipsticks</li><li>Lip gloss &amp; tint</li>" +
          "<li>Lip liner</li><li>Lip balm</li><li>Lip care</li>" +
        "</ul>" +
        '<h4 class="sub">Nails &amp; tools</h4><ul>' +
          "<li>Nails</li><li>Tools &amp; brushes</li><li>Accessories</li>" +
        "</ul></div>" +
        '<div class="bs-col"><h4>Skincare &amp; self-care</h4><ul>' +
          '<li class="featured">All self-care →</li>' +
          "<li>Skincare</li><li>Face masks</li><li>Bodycare</li>" +
          "<li>Haircare</li><li>Bathing</li><li>Oral care</li>" +
        "</ul>" +
        '<h4 class="sub">For him</h4><ul>' +
          "<li>Men's skincare</li><li>Men's haircare</li>" +
        "</ul></div>" +
        '<div class="bs-col"><h4>Top beauty brands</h4><ul>' +
          "<li>Creed</li><li>Tom Ford</li><li>Sensai</li>" +
          "<li>Floris London</li><li>Acqua di Parma</li>" +
          "<li>Aigner Perfume</li>" +
          '<li class="featured">View all brands →</li>' +
        "</ul>" +
        '<h4 class="sub">Shop by</h4><ul>' +
          "<li>Gift sets</li><li>Best sellers</li><li>New arrivals</li>" +
        "</ul></div>" +
        '<div class="bs-edit"><div class="bs-edit-label">THE EDIT</div>' +
          ec("SIGNATURE", "The Creed house", "Wild Vetiver · QAR 1,635", "feature") +
          ec("SERVICE", "Free engraving", "On select fragrances") +
          ec("CONSULTATION", "Fragrance discovery", "Book in-store · free") +
        "</div>" +
      "</div>",

    luggage:
      '<div class="bs-mega cols-5">' +
        '<div class="bs-col"><h4>Luggage</h4><ul>' +
          '<li class="featured">All luggage →</li>' +
          "<li>Hard luggage</li><li>Soft luggage</li>" +
          "<li>Cabin size</li><li>Check-in size</li><li>Luggage sets</li>" +
        "</ul></div>" +
        '<div class="bs-col"><h4>Bags</h4><ul>' +
          '<li class="featured">All travel bags →</li>' +
          "<li>Backpacks</li><li>School backpacks</li>" +
          "<li>Crossbody</li><li>Bailhandle</li><li>Other bags</li>" +
        "</ul></div>" +
        '<div class="bs-col"><h4>Travel accessories</h4><ul>' +
          '<li class="featured">All accessories →</li>' +
          "<li>Wallets · men</li><li>Wallets · women</li>" +
          "<li>Charger &amp; USB</li><li>Notebook covers</li>" +
          "<li>Toiletries</li><li>Health &amp; safety</li>" +
          "<li>School accessories</li>" +
        "</ul></div>" +
        '<div class="bs-col"><h4>Top brands</h4><ul>' +
          "<li>Samsonite</li><li>American Tourister</li>" +
          "<li>MCM</li><li>Aigner</li><li>Alviero Martini</li>" +
          '<li class="featured">View all brands →</li>' +
        "</ul></div>" +
        '<div class="bs-edit"><div class="bs-edit-label">THE EDIT</div>' +
          ec("SUMMER", "Holiday-ready luggage", "From QAR 650", "feature") +
          ec("SERVICE", "Free monogramming", "On luggage purchases") +
          ec("BACK TO SCHOOL", "School backpack edit", "All ages · all brands") +
        "</div>" +
      "</div>",

    home:
      '<div class="bs-mega cols-6">' +
        '<div class="bs-col"><h4>Tableware</h4><ul>' +
          '<li class="featured">All tableware →</li>' +
          "<li>Dinnerware</li><li>Glassware</li><li>Drinkware</li>" +
          "<li>Cutlery</li><li>Trays</li><li>Bowls</li>" +
          "<li>Stands</li><li>Centerpieces</li>" +
        "</ul></div>" +
        '<div class="bs-col"><h4>Décor</h4><ul>' +
          '<li class="featured">All home décor →</li>' +
          "<li>Vases</li><li>Mirrors</li><li>Wall art</li>" +
          "<li>Candle holders</li><li>Candles</li>" +
          "<li>Candy boxes</li><li>Jewelry cabinets</li>" +
          "<li>Desk accessories</li><li>Trolleys</li>" +
        "</ul></div>" +
        '<div class="bs-col"><h4>Bedding &amp; bath</h4><ul>' +
          '<li class="featured">All bedding →</li>' +
          "<li>Beddings</li><li>Towels</li><li>Bath rugs</li>" +
          "<li>Bathrobes</li><li>Cushions</li><li>Slippers</li>" +
        "</ul></div>" +
        '<div class="bs-col"><h4>Home fragrance</h4><ul>' +
          '<li class="featured">All home fragrance →</li>' +
          "<li>Diffusers</li><li>Candles</li>" +
          "<li>Bakhoor &amp; oud " + pill("signature", "QATAR") + "</li>" +
          "<li>Linen fragrance</li>" +
        "</ul>" +
        '<h4 class="sub">Food warmers &amp; serving</h4><ul>' +
          "<li>Food warmers</li><li>Majlis serving</li>" +
        "</ul></div>" +
        '<div class="bs-col"><h4>Top home brands</h4><ul>' +
          "<li>Christofle</li><li>Baccarat</li>" +
          "<li>Lalique</li><li>Versace Home</li>" +
          '<li class="featured">View all →</li>' +
        "</ul>" +
        '<h4 class="sub">Occasion</h4><ul>' +
          "<li>Ramadan &amp; majlis " + pill("eid", "EID") + "</li>" +
          "<li>Wedding registry</li><li>Housewarming</li>" +
        "</ul></div>" +
        '<div class="bs-edit"><div class="bs-edit-label">THE EDIT</div>' +
          ec("RAMADAN 2026", "Majlis & entertaining", "Serveware · décor · bakhoor", "feature") +
          ec("SERVICE", "Wedding gift registry", "Curate & share") +
          ec("DELIVERY", "White-glove setup", "On furniture orders") +
        "</div>" +
      "</div>",

    gourmet:
      '<div class="bs-mega cols-6">' +
        '<div class="bs-col"><h4>Chocolates &amp; biscuits</h4><ul>' +
          '<li class="featured">All chocolates →</li>' +
          "<li>Chocolates</li><li>Biscuits</li>" +
          "<li>Truffles &amp; pralines</li><li>Boxed assortments</li>" +
          "<li>Hampers &amp; gifts</li>" +
        "</ul></div>" +
        '<div class="bs-col"><h4>Arabic &amp; regional</h4><ul>' +
          '<li class="featured">Arabic sweets ' + pill("signature", "QATAR") + "</li>" +
          "<li>Premium dates</li><li>Baklava</li>" +
          "<li>Maamoul</li><li>Honey</li><li>Oil &amp; spices</li>" +
        "</ul></div>" +
        '<div class="bs-col"><h4>Coffee &amp; tea</h4><ul>' +
          '<li class="featured">All coffee &amp; tea →</li>' +
          "<li>Coffee</li><li>Tea</li>" +
          "<li>Nespresso machines</li><li>Accessories</li>" +
        "</ul>" +
        '<h4 class="sub">Food essentials</h4><ul>' +
          "<li>Seafood</li><li>Sugar</li><li>Chips</li><li>Gums &amp; candies</li>" +
        "</ul></div>" +
        '<div class="bs-col"><h4>Gift hampers</h4><ul>' +
          '<li class="featured">All hampers →</li>' +
          "<li>Eid hampers " + pill("eid", "EID") + "</li>" +
          "<li>Ramadan hampers</li><li>Welcome baby</li><li>Build your own</li>" +
        "</ul>" +
        '<h4 class="sub">Shop by price</h4><ul>' +
          "<li>Under QAR 500</li><li>QAR 500–1,500</li><li>QAR 1,500+</li>" +
        "</ul></div>" +
        '<div class="bs-col"><h4>Top brands</h4><ul>' +
          "<li>Godiva</li><li>Pierre Marcolini</li>" +
          "<li>Nespresso</li><li>TWG Tea</li>" +
          '<li class="featured">View all →</li>' +
        "</ul>" +
        '<h4 class="sub">Corporate</h4><ul>' +
          "<li>Corporate gifting</li><li>Bulk orders</li><li>Custom branding</li>" +
        "</ul></div>" +
        '<div class="bs-edit"><div class="bs-edit-label">THE EDIT</div>' +
          ec("EID 2026", "Premium date hampers", "From QAR 350 · gift-wrapped", "feature") +
          ec("CONCEPT", "Gold Gourmet boutique", "In-store experience") +
          ec("B2B", "Corporate gifting concierge", "Dedicated account manager") +
        "</div>" +
      "</div>",

    brands: (function () {
      var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0–9"];
      return (
        '<div class="bs-mega cols-5">' +
          '<div class="bs-col"><h4>Browse</h4><ul>' +
            '<li class="featured">All 500+ brands →</li>' +
            "<li>Women's brands</li><li>Men's brands</li><li>Kids' brands</li>" +
            "<li>Beauty brands</li><li>Watch brands</li>" +
            "<li>Luggage brands</li><li>Home brands</li><li>Gourmet brands</li>" +
          "</ul></div>" +
          '<div class="bs-col"><h4>Trending now</h4><ul>' +
            "<li>Creed " + pill("hot", "HOT") + "</li>" +
            "<li>MCM</li><li>Fossil</li><li>Cole Haan</li>" +
            "<li>Breitling</li><li>Aigner</li>" +
            "<li>Swarovski</li><li>Tom Ford</li>" +
          "</ul></div>" +
          '<div class="bs-col"><h4>Luxury houses</h4><ul>' +
            "<li>La Perla</li><li>Breitling</li><li>Tom Ford</li>" +
            "<li>Floris London</li><li>Sensai</li>" +
            "<li>Acqua di Parma</li><li>Christofle</li><li>Baccarat</li>" +
          "</ul></div>" +
          '<div class="bs-col"><h4>Browse A–Z</h4>' +
            '<ul class="bs-az">' +
              letters.map(function (l) { return "<li>" + l + "</li>"; }).join("") +
            "</ul>" +
          '<h4 class="sub">By region</h4><ul>' +
            "<li>Italian</li><li>French</li><li>Qatari designers</li>" +
          "</ul></div>" +
          '<div class="bs-edit"><div class="bs-edit-label">THE EDIT</div>' +
            ec("EXCLUSIVE", "Only at Blue Salon", "28 brands not found elsewhere in Qatar", "feature") +
            ec("HERITAGE", "Founders' picks", "Since 1981 · curated by Abu Issa") +
          "</div>" +
        "</div>"
      );
    })(),

    gift:
      '<div class="bs-mega cols-5">' +
        '<div class="bs-col"><h4>Build a gift</h4><ul>' +
          '<li class="featured">Build your Blue Salon box →</li>' +
          "<li>Choose products</li><li>Choose packaging</li>" +
          "<li>Add message card</li><li>Schedule delivery</li>" +
        "</ul>" +
        '<h4 class="sub">Shop by recipient</h4><ul>' +
          "<li>For her</li><li>For him</li><li>For mum &amp; dad</li>" +
          "<li>For kids</li><li>For baby</li>" +
        "</ul></div>" +
        '<div class="bs-col"><h4>Shop by occasion</h4><ul>' +
          "<li>Eid " + pill("eid", "EID") + "</li>" +
          "<li>Ramadan</li><li>Wedding</li><li>Anniversary</li>" +
          "<li>Birthday</li><li>Newborn</li><li>Graduation</li>" +
          "<li>Housewarming</li><li>Corporate</li>" +
        "</ul></div>" +
        '<div class="bs-col"><h4>Shop by price</h4><ul>' +
          "<li>Under QAR 250</li><li>QAR 250–500</li>" +
          "<li>QAR 500–1,500</li><li>QAR 1,500–5,000</li><li>QAR 5,000+</li>" +
        "</ul>" +
        '<h4 class="sub">Top gift categories</h4><ul>' +
          "<li>Fragrance gifts</li><li>Chocolate hampers</li>" +
          "<li>Date boxes</li><li>Jewellery</li><li>Watches</li>" +
        "</ul></div>" +
        '<div class="bs-col"><h4>Services</h4><ul>' +
          '<li class="featured">Free gift wrapping</li>' +
          "<li>Engraving &amp; monogramming</li><li>Personalised card</li>" +
          "<li>Scheduled delivery</li><li>Gift receipt option</li>" +
          "<li>Corporate gifting</li>" +
        "</ul></div>" +
        '<div class="bs-edit"><div class="bs-edit-label">THE EDIT</div>' +
          ec("SIGNATURE", "The Blue Salon box", "Iconic blue · hand-wrapped", "feature") +
          ec("EID 2026", "Most-gifted hampers", "Top picks · from QAR 350") +
          ec("B2B", "Corporate concierge", "For 50+ recipients") +
        "</div>" +
      "</div>",

    sale:
      '<div class="bs-mega cols-5">' +
        '<div class="bs-col"><h4>Sale by category</h4><ul>' +
          '<li class="featured" style="color: var(--sale)">Shop all sale →</li>' +
          "<li>Women</li><li>Men</li><li>Kids</li>" +
          "<li>Beauty &amp; fragrance</li><li>Luggage</li>" +
          "<li>Home &amp; linen</li><li>Watches &amp; jewellery</li>" +
        "</ul></div>" +
        '<div class="bs-col"><h4>By discount</h4><ul>' +
          "<li>Up to 30% off</li><li>30–50% off</li><li>50–70% off</li>" +
          "<li>Over 70% off " + pill("hot", "HOT") + "</li>" +
        "</ul>" +
        '<h4 class="sub">By price</h4><ul>' +
          "<li>Under QAR 250</li><li>QAR 250–500</li>" +
          "<li>QAR 500–1,500</li><li>QAR 1,500+</li>" +
        "</ul></div>" +
        '<div class="bs-col"><h4>Exceptional offers</h4><ul>' +
          '<li class="featured">Exceptional offers →</li>' +
          "<li>Last chance</li><li>Final cuts</li>" +
          "<li>Last sizes</li><li>Re-stocked sale</li><li>Just reduced today</li>" +
        "</ul></div>" +
        '<div class="bs-col"><h4>Top brands on sale</h4><ul>' +
          "<li>MCM</li><li>Aigner</li><li>Corneliani</li>" +
          "<li>Jacob Cohen</li><li>Cole Haan</li><li>Leo Lin</li>" +
          '<li class="featured">View all →</li>' +
        "</ul></div>" +
        '<div class="bs-edit"><div class="bs-edit-label" style="color: var(--sale)">END OF SEASON</div>' +
          ec("UP TO 70% OFF", "Mid-season sale live", "Across 8 departments", "sale-feature") +
          ec("PAYLATER", "Split into 4 payments", "Available on all orders") +
          ec("LAST CHANCE", "Final markdowns", "When they're gone, they're gone") +
        "</div>" +
      "</div>",
  };

  /* ── Nav: open mega menu on hover, close on leaving the zone ── */

  var navZone = document.getElementById("navZone");
  var megaHolder = document.getElementById("megaHolder");
  var navItems = document.querySelectorAll(".bs-nav-item");

  function closeMenu() {
    megaHolder.classList.remove("is-open");
    megaHolder.innerHTML = "";
    navItems.forEach(function (el) { el.classList.remove("active"); });
  }

  navItems.forEach(function (el) {
    el.addEventListener("mouseenter", function () {
      navItems.forEach(function (other) { other.classList.remove("active"); });
      el.classList.add("active");
      megaHolder.innerHTML = MEGA_MENUS[el.dataset.menu] || "";
      megaHolder.classList.add("is-open");
    });
  });

  navZone.addEventListener("mouseleave", closeMenu);

  /* ── Hero carousel ──────────────────────────────────────── */

  var SLIDES = [
    {
      heading: "Spring time",
      sub: "Fresh picks for the season ahead.",
      cta: "Shop men's",
      img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=80",
    },
    {
      heading: "New in Women's",
      sub: "The latest arrivals from the world's defining maisons.",
      cta: "Shop women's",
      img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    },
    {
      heading: "The Fragrance Edit",
      sub: "Discover niche and luxury scents, only at Blue Salon.",
      cta: "Shop beauty",
      img: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80",
    },
  ];

  var heroTitle = document.getElementById("heroTitle");
  var heroSub = document.getElementById("heroSub");
  var heroCta = document.getElementById("heroCta");
  var heroImg = document.getElementById("heroImg");
  var heroDots = document.getElementById("heroDots");

  function setSlide(i) {
    var s = SLIDES[i];
    heroTitle.textContent = s.heading;
    heroSub.textContent = s.sub;
    heroCta.textContent = s.cta;
    heroImg.src = s.img;
    heroDots.querySelectorAll(".bs-hero-dot").forEach(function (dot, j) {
      dot.classList.toggle("is-active", j === i);
    });
  }

  SLIDES.forEach(function (_, i) {
    var dot = document.createElement("button");
    dot.type = "button";
    dot.className = "bs-hero-dot" + (i === 0 ? " is-active" : "");
    dot.setAttribute("aria-label", "Slide " + (i + 1));
    dot.addEventListener("click", function () { setSlide(i); });
    heroDots.appendChild(dot);
  });

  /* ── Categories ─────────────────────────────────────────── */

  document.getElementById("catsGrid").innerHTML = data.categories.map(function (c) {
    return (
      '<a class="bs-cat-link" href="#">' +
        '<div class="bs-cat-card">' +
          '<img src="' + c.img + '" alt="' + c.label + '">' +
          '<div class="bs-cat-grad"></div>' +
          '<span class="bs-cat-label">' + c.label + "</span>" +
        "</div>" +
      "</a>"
    );
  }).join("");

  /* ── Trending products + wishlist ───────────────────────── */

  var wishlist = ["breitling-navitimer"];
  var trendingGrid = document.getElementById("trendingGrid");
  var wishCountEl = document.getElementById("wishCount");

  var HEART_SVG =
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/>' +
    "</svg>";

  function cardHTML(p) {
    var wished = wishlist.indexOf(p.id) !== -1;
    var onSale = p.compareAt != null && p.compareAt > p.price;

    var badge = "";
    if (p.soldOut) {
      badge = '<div class="bs-card-badge"><span class="bs-badge bs-badge-soldout">Sold out</span></div>';
    } else if (p.badge) {
      badge = '<div class="bs-card-badge"><span class="bs-badge bs-badge-' + (p.badgeTone || "neutral") + '">' + p.badge + "</span></div>";
    }

    return (
      '<article class="bs-card' + (p.hover ? " has-hover" : "") + '" data-id="' + p.id + '">' +
        '<div class="bs-card-media">' +
          '<img class="bs-card-img-main" src="' + p.image + '" alt="">' +
          (p.hover ? '<img class="bs-card-img-hover" src="' + p.hover + '" alt="" aria-hidden="true">' : "") +
          badge +
          '<button class="bs-iconbtn bs-card-wish' + (wished ? " is-wishlisted" : "") + '" type="button" ' +
            'aria-label="' + (wished ? "Remove from wishlist" : "Add to wishlist") + '" data-wish="' + p.id + '">' +
            HEART_SVG +
          "</button>" +
        "</div>" +
        '<div class="bs-card-body">' +
          '<span class="bs-eyebrow bs-card-vendor">' + p.vendor + "</span>" +
          '<span class="bs-card-name">' + p.name + "</span>" +
          '<span class="bs-price' + (onSale ? " on-sale" : "") + '">' +
            '<span class="bs-price-current">' + formatQAR(p.price) + "</span>" +
            (onSale ? '<span class="bs-price-compare">' + formatQAR(p.compareAt) + "</span>" : "") +
          "</span>" +
        "</div>" +
      "</article>"
    );
  }

  function renderTrending() {
    trendingGrid.innerHTML = data.products.slice(0, 4).map(cardHTML).join("");
    wishCountEl.textContent = wishlist.length;
    wishCountEl.hidden = wishlist.length === 0;
  }

  trendingGrid.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-wish]");
    if (!btn) return;
    e.stopPropagation();
    var id = btn.dataset.wish;
    var i = wishlist.indexOf(id);
    if (i === -1) wishlist.push(id); else wishlist.splice(i, 1);
    renderTrending();
  });

  renderTrending();

  /* ── Footer columns ─────────────────────────────────────── */

  var SHOP_COLS = [
    { heading: "Women's",      links: ["Clothing", "Footwear", "Bags", "Accessories", "Brands A–Z"] },
    { heading: "Men's",        links: ["Clothing", "Footwear", "Bags", "Watches", "Brands A–Z"] },
    { heading: "Kids & Baby",  links: ["Baby", "Girls", "Boys", "Footwear", "Brands A–Z"] },
    { heading: "Beauty",       links: ["Skincare", "Make-up", "Fragrance", "Gift sets", "Brands A–Z"] },
    { heading: "Home & Linen", links: ["Home décor", "Tableware", "Bedding", "Home fragrance", "Brands A–Z"] },
    { heading: "Gourmet",      links: ["Chocolates", "Arabic sweets", "Coffee & tea", "Hampers", "Brands A–Z"] },
  ];

  document.getElementById("shopMoreGrid").innerHTML = SHOP_COLS.map(function (col) {
    return (
      "<div>" +
        '<div class="bs-shopmore-col-h">' + col.heading + "</div>" +
        "<ul>" +
          col.links.map(function (link) {
            return '<li><a href="#"' + (link === "Brands A–Z" ? ' class="is-strong"' : "") + ">" + link + "</a></li>";
          }).join("") +
        "</ul>" +
      "</div>"
    );
  }).join("");

  var FOOTER_COLS = [
    { h: "Customer Care",    links: ["Track your order", "Shipping & delivery", "Returns & exchanges", "Contact us", "FAQ"] },
    { h: "About Blue Salon", links: ["Our story", "Boutiques in Qatar", "Careers", "Press", "Sustainability"] },
    { h: "Shop",             links: ["Women", "Men", "Beauty", "Watches & Jewellery", "Gourmet", "Gift cards"] },
  ];

  document.getElementById("footerCols").innerHTML = FOOTER_COLS.map(function (c) {
    return (
      "<div>" +
        "<h4>" + c.h + "</h4>" +
        "<ul>" +
          c.links.map(function (l) { return '<li><a href="#">' + l + "</a></li>"; }).join("") +
        "</ul>" +
      "</div>"
    );
  }).join("");

  /* Keep placeholder links from jumping the page */
  document.addEventListener("click", function (e) {
    var a = e.target.closest('a[href="#"]');
    if (a) e.preventDefault();
  });
})();
