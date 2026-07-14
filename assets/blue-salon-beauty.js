/* ============================================================
   BLUE SALON BEAUTY — landing page interactions
   Renders the single product grid + brand row, and wires the
   mobile drawer. Deliberately lightweight, no dependencies.
   ============================================================ */
(function () {
  "use strict";

  /* -------- data: max 8 products, one grid only -------- */
  var PRODUCTS = [
    { brand: "Blue Salon", name: "Radiance Vitamin C Serum", rating: 4, price: "QAR 285", was: "", badge: "New",
      img: "images/beauty/prod-1.jpg" },
    { brand: "Atelier", name: "Precision Liquid Liner", rating: 5, price: "QAR 145", was: "", badge: "",
      img: "images/beauty/prod-2.jpg" },
    { brand: "Maison Rose", name: "Eau de Parfum 50ml", rating: 4, price: "QAR 420", was: "QAR 480", badge: "Exclusive",
      img: "images/beauty/prod-3.jpg" },
    { brand: "Lumière", name: "Hydrating Day Cream", rating: 5, price: "QAR 210", was: "", badge: "",
      img: "images/beauty/prod-4.jpg" },
    { brand: "Blue Salon", name: "Silk Foundation Fluid", rating: 4, price: "QAR 175", was: "", badge: "",
      img: "images/beauty/prod-5.jpg" },
    { brand: "Atelier", name: "Revitalising Face Oil", rating: 5, price: "QAR 130", was: "", badge: "New",
      img: "images/beauty/prod-6.jpg" },
    { brand: "Clarelle", name: "Nourishing Hair Oil", rating: 4, price: "QAR 165", was: "QAR 195", badge: "",
      img: "images/beauty/prod-7.jpg" },
    { brand: "Lumière", name: "Restorative Hair Mask", rating: 5, price: "QAR 155", was: "", badge: "",
      img: "images/beauty/prod-8.jpg" }
  ];

  // brand logos from the Blue Salon CDN — mirrors the homepage Featured Brands strip
  var BRANDS = [
    { name: "Floris London", img: "//www.bluesalon.com/cdn/shop/files/floris_250x_a3e21544-7a23-4a0a-bc28-8e1734e3fd54_250x.avif?v=1771916867" },
    { name: "La Perla", img: "//www.bluesalon.com/cdn/shop/files/la-perla_250x_fb3e3d61-b391-436c-8b52-e1792a457f80_250x.avif?v=1771916867" },
    { name: "Sensai", img: "//www.bluesalon.com/cdn/shop/files/Untitled-2_250x_db6c3e68-8632-4d58-83fa-78317400f90c_250x.avif?v=1771916863" },
    { name: "Tom Ford", img: "//www.bluesalon.com/cdn/shop/files/tomford_250x_5d1e944a-5c1b-4604-b294-ab9ff1bb8351_250x.avif?v=1771402650" },
    { name: "MCM", img: "//www.bluesalon.com/cdn/shop/files/mcm_logo_250x_1_250x.avif?v=1771916863" },
    { name: "Aigner", img: "//www.bluesalon.com/cdn/shop/files/aigner_250x_65346155-e057-4adb-aae5-ddc4a61f9a72_250x.webp?v=1771916863" },
    { name: "Creed", img: "//www.bluesalon.com/cdn/shop/files/creed_250x_868053a3-0460-4a8d-9f00-9b2df02d3474_250x.avif?v=1771916863" },
    { name: "Swarovski", img: "//www.bluesalon.com/cdn/shop/files/swarovski_250x_8ae97c0e-56d0-4cfb-b2e2-70120be6819e_250x.avif?v=1771916863" }
  ];

  function stars(n) {
    var full = "";
    for (var i = 0; i < 5; i++) full += i < n ? "★" : '<span>★</span>';
    return full;
  }

  function productCard(p) {
    var badge = p.badge
      ? '<span class="bsb-badge' + (p.badge === "Exclusive" ? " bsb-badge--nav" : "") + '">' + p.badge + "</span>"
      : "";
    var was = p.was ? "<del>" + p.was + "</del>" : "";
    return (
      '<a class="bsb-card" href="#">' +
        '<div class="bsb-card__stage">' + badge +
          '<img src="' + p.img + '" alt="' + p.name + '" loading="lazy">' +
        "</div>" +
        '<div class="bsb-card__info">' +
          '<span class="bsb-card__brand">' + p.brand + "</span>" +
          '<span class="bsb-card__name">' + p.name + "</span>" +
          '<span class="bsb-card__rating" aria-label="' + p.rating + ' out of 5">' + stars(p.rating) + "</span>" +
          '<span class="bsb-card__price">' + p.price + was + "</span>" +
          '<span class="bsb-card__link">View product</span>' +
        "</div>" +
      "</a>"
    );
  }

  function render() {
    var grid = document.getElementById("bsbProducts");
    if (grid) grid.innerHTML = PRODUCTS.slice(0, 8).map(productCard).join("");

    var brands = document.getElementById("bsbBrands");
    if (brands) {
      var tile = function (b) {
        return '<a class="bsb-brand" href="#" title="' + b.name + '" aria-label="' + b.name + '">' +
               '<span class="bsb-brand__logo"><img src="' + b.img + '" alt="' + b.name + '" loading="lazy"></span></a>';
      };
      // duplicate the set so the -50% marquee loops seamlessly
      var tiles = BRANDS.concat(BRANDS).map(tile).join("");
      brands.innerHTML = '<div class="bsb-brands__track">' + tiles + "</div>";
    }
  }

  /* -------- three-panel hero slider --------
     Each slide swaps the left model image, the middle content + colour,
     and the right product image. On change a colour curtain (matching the
     incoming middle colour) sweeps out from the centre to cover both side
     images, the images/content swap while hidden, then the curtain retracts
     to reveal the new images. */
  var SLIDES = [
    {
      color: "#F7EFE8",
      left: "images/beauty/hero-1-left.jpg",
      leftAlt: "Beauty ritual close-up with radiant complexion",
      right: "images/beauty/hero-1-right.jpg",
      rightAlt: "Flat-lay of makeup brushes, powder and lipstick",
      eyebrow: "Blue Salon Beauty",
      title: "Discover Beauty,<br>Curated for You",
      text: "Explore skincare, makeup, fragrance and beauty essentials from the world's most admired beauty houses.",
      cta: "Shop Beauty"
    },
    {
      color: "#EFD9D0",
      left: "images/beauty/hero-2-left.jpg",
      leftAlt: "Model receiving a luminous skincare facial",
      right: "images/beauty/hero-2-right.jpg",
      rightAlt: "Skincare bottles arranged on a soft surface",
      eyebrow: "The Skincare Edit",
      title: "Radiance,<br>Rediscovered",
      text: "Serums, creams and rituals formulated to reveal your most luminous, healthy-looking complexion.",
      cta: "Shop Skincare"
    },
    {
      color: "#F2C7B3",
      left: "images/beauty/hero-3-left.jpg",
      leftAlt: "Portrait celebrating beauty for every skin tone",
      right: "images/beauty/hero-3-right.jpg",
      rightAlt: "Luxury fragrance bottle in warm light",
      eyebrow: "Colour & Fragrance",
      title: "Express<br>Yourself",
      text: "Bold makeup and signature scents from the houses that define modern beauty.",
      cta: "Shop Makeup"
    }
  ];

  function initHero() {
    var hero = document.getElementById("bsbHero");
    var leftImg = document.getElementById("bsbHeroLeft");
    var rightImg = document.getElementById("bsbHeroRight");
    var content = document.getElementById("bsbHeroContent");
    var dots = document.getElementById("bsbHeroDots");
    if (!hero || !leftImg || !rightImg || !content || !dots) return;

    var index = 0, busy = false, timer = null;
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // set the starting colour and build dots
    hero.style.setProperty("--hero-color", SLIDES[0].color);
    SLIDES.forEach(function (_, i) {
      var b = document.createElement("button");
      b.type = "button";
      b.setAttribute("role", "tab");
      b.setAttribute("aria-label", "Go to slide " + (i + 1));
      if (i === 0) b.className = "is-active";
      b.addEventListener("click", function () { go(i); });
      dots.appendChild(b);
    });
    var dotEls = dots.querySelectorAll("button");

    function paint(s) {
      leftImg.src = s.left; leftImg.alt = s.leftAlt;
      rightImg.src = s.right; rightImg.alt = s.rightAlt;
      content.innerHTML =
        '<p class="bsb-eyebrow">' + s.eyebrow + "</p>" +
        '<h1 class="bsb-hero__title">' + s.title + "</h1>" +
        '<p class="bsb-hero__text">' + s.text + "</p>" +
        '<a class="bsb-btn bsb-btn--dark" href="#">' + s.cta + "</a>";
    }

    function go(next) {
      if (busy || next === index) return;
      var s = SLIDES[next];

      dotEls[index].classList.remove("is-active");
      dotEls[next].classList.add("is-active");
      index = next;

      if (reduce) { hero.style.setProperty("--hero-color", s.color); paint(s); return; }

      busy = true;
      // curtain colour = incoming slide colour, so the sweep introduces the new palette
      hero.style.setProperty("--hero-color", s.color);
      hero.classList.add("is-covering");             // curtains grow out, content fades

      setTimeout(function () { paint(s); }, 620);     // swap while fully covered
      setTimeout(function () {
        hero.classList.remove("is-covering");         // curtains retract, revealing new images
        busy = false;
      }, 780);
    }

    function schedule() {
      clearTimeout(timer);
      timer = setTimeout(function () { go((index + 1) % SLIDES.length); }, 6000);
    }
    // advance on its own; reset the clock after any manual change
    var _go = go;
    go = function (n) { _go(n); schedule(); };
    if (!reduce) schedule();
    hero.addEventListener("mouseenter", function () { clearTimeout(timer); });
    hero.addEventListener("mouseleave", function () { if (!reduce) schedule(); });
  }

  /* -------- featured product carousel (Editor's Picks) -------- */
  var FEATURED = [
    { img: "images/beauty/prod-1.jpg", model: "images/beauty/feature-model.jpg",  name: "Radiance Vitamin C Serum", price: "QAR 285" },
    { img: "images/beauty/prod-lipstick.jpg", model: "images/beauty/feature-model2.jpg", name: "Velvet Matte Lipstick", price: "QAR 120 – QAR 180" },
    { img: "images/beauty/prod-8.jpg", model: "images/beauty/hero-3-left.jpg", name: "Restorative Hair Mask", price: "QAR 155" }
  ];

  function initFeature() {
    var root = document.getElementById("bsbFeature");
    if (!root) return;
    var img = document.getElementById("bsbFeatImg");
    var model = document.getElementById("bsbFeatModel");
    var name = document.getElementById("bsbFeatName");
    var price = document.getElementById("bsbFeatPrice");
    var dots = document.getElementById("bsbFeatDots");
    var prev = root.querySelector(".bsb-feature__arrow--prev");
    var next = root.querySelector(".bsb-feature__arrow--next");
    var i = 0;

    FEATURED.forEach(function (_, n) {
      var b = document.createElement("button");
      b.type = "button";
      b.setAttribute("role", "tab");
      b.setAttribute("aria-label", "Featured product " + (n + 1));
      if (n === 0) b.className = "is-active";
      b.addEventListener("click", function () { show(n); });
      dots.appendChild(b);
    });
    var dotEls = dots.querySelectorAll("button");

    function show(n) {
      i = (n + FEATURED.length) % FEATURED.length;
      var f = FEATURED[i];
      img.style.opacity = "0";
      if (model) model.style.opacity = "0";
      setTimeout(function () {
        img.src = f.img; img.alt = f.name;
        if (model && f.model) { model.src = f.model; model.style.opacity = "1"; }
        name.textContent = f.name; price.textContent = f.price;
        img.style.opacity = "1";
      }, 180);
      dotEls.forEach(function (d, k) { d.classList.toggle("is-active", k === i); });
    }
    prev && prev.addEventListener("click", function () { show(i - 1); });
    next && next.addEventListener("click", function () { show(i + 1); });
  }

  /* -------- instagram gallery -------- */
  var INSTA = [
    "images/beauty/edit-makeup.jpg", "images/beauty/hero-1-right.jpg", "images/beauty/edit-eyes.jpg",
    "images/beauty/cat-fragrance.jpg", "images/beauty/hero-3-left.jpg", "images/beauty/campaign.jpg"
  ];
  function initInsta() {
    var grid = document.getElementById("bsbInsta");
    if (!grid) return;
    var icon = '<span class="bsb-insta__icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.7">' +
               '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/>' +
               '<circle cx="17.2" cy="6.8" r="1.15" fill="#fff" stroke="none"/></svg></span>';
    grid.innerHTML = INSTA.map(function (src, n) {
      return '<a href="#" aria-label="Instagram post ' + (n + 1) + '">' +
             '<img src="' + src + '" alt="Blue Salon Beauty on Instagram" loading="lazy">' + icon + '</a>';
    }).join("");
  }

  /* -------- mobile drawer -------- */
  function initDrawer() {
    var burger = document.getElementById("bsbBurger");
    var drawer = document.getElementById("bsbDrawer");
    var scrim = document.getElementById("bsbScrim");
    var close = document.getElementById("bsbDrawerClose");
    if (!burger || !drawer || !scrim) return;

    function open() {
      drawer.hidden = false; scrim.hidden = false;
      requestAnimationFrame(function () { drawer.classList.add("is-open"); });
      drawer.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }
    function shut() {
      drawer.classList.remove("is-open");
      drawer.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      setTimeout(function () { drawer.hidden = true; scrim.hidden = true; }, 300);
    }
    burger.addEventListener("click", open);
    close && close.addEventListener("click", shut);
    scrim.addEventListener("click", shut);
    drawer.addEventListener("click", function (e) { if (e.target.tagName === "A") shut(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") shut(); });
  }

  function boot() { render(); initHero(); initFeature(); initInsta(); initDrawer(); }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
