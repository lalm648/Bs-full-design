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
      img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=500&q=80" },
    { brand: "Atelier", name: "Soft Matte Lip Colour", rating: 5, price: "QAR 145", was: "", badge: "",
      img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=500&q=80" },
    { brand: "Maison Rose", name: "Eau de Parfum 50ml", rating: 4, price: "QAR 420", was: "QAR 480", badge: "Exclusive",
      img: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=500&q=80" },
    { brand: "Lumière", name: "Hydrating Day Cream", rating: 5, price: "QAR 210", was: "", badge: "",
      img: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=500&q=80" },
    { brand: "Blue Salon", name: "Silk Foundation Fluid", rating: 4, price: "QAR 175", was: "", badge: "",
      img: "https://images.unsplash.com/photo-1631730359585-38a4935cbec4?auto=format&fit=crop&w=500&q=80" },
    { brand: "Atelier", name: "Volumising Mascara", rating: 5, price: "QAR 130", was: "", badge: "New",
      img: "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?auto=format&fit=crop&w=500&q=80" },
    { brand: "Clarelle", name: "Nourishing Hair Oil", rating: 4, price: "QAR 165", was: "QAR 195", badge: "",
      img: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=500&q=80" },
    { brand: "Lumière", name: "Gentle Cleansing Balm", rating: 5, price: "QAR 155", was: "", badge: "",
      img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=500&q=80" }
  ];

  var BRANDS = ["Chanel", "Dior", "Guerlain", "Clarins", "Lancôme", "Yves Saint Laurent", "Tom Ford"];

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
      brands.innerHTML = BRANDS.map(function (b) {
        return '<li><a href="#"><span>' + b + "</span></a></li>";
      }).join("");
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
      left: "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=900&q=80",
      leftAlt: "Close-up of a model with radiant, natural complexion",
      right: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80",
      rightAlt: "Flat-lay of makeup brushes, powder and lipstick",
      eyebrow: "Blue Salon Beauty",
      title: "Discover Beauty,<br>Curated for You",
      text: "Explore skincare, makeup, fragrance and beauty essentials from the world's most admired beauty houses.",
      cta: "Shop Beauty"
    },
    {
      color: "#EFD9D0",
      left: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=900&q=80",
      leftAlt: "Model with luminous skin and soft makeup",
      right: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=80",
      rightAlt: "Skincare bottles arranged on a soft surface",
      eyebrow: "The Skincare Edit",
      title: "Radiance,<br>Rediscovered",
      text: "Serums, creams and rituals formulated to reveal your most luminous, healthy-looking complexion.",
      cta: "Shop Skincare"
    },
    {
      color: "#F2C7B3",
      left: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
      leftAlt: "Close-up of expressive eye makeup",
      right: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80",
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

  function boot() { render(); initHero(); initDrawer(); }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
