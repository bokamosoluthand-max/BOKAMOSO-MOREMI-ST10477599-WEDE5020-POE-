
document.addEventListener("DOMContentLoaded", () => {
  // Mobile navigation
  const nav = document.querySelector("header nav");
  const navList = nav && nav.querySelector("ul");
  if (nav && navList) {
    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "nav-toggle";
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-controls", "primary-navigation");
    toggle.innerHTML = '<span aria-hidden="true">☰</span> Menu';
    navList.id = "primary-navigation";
    nav.insertBefore(toggle, navList);
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      navList.classList.toggle("nav-open", !expanded);
      toggle.innerHTML = expanded ? '<span aria-hidden="true">☰</span> Menu' : '<span aria-hidden="true">✕</span> Close';
    });
  }

  // Reveal content smoothly as it enters the viewport
  const revealItems = document.querySelectorAll(".card, .special-box, .about-grid, .gallery-grid img, .feature-panel");
  if ("IntersectionObserver" in window) {
    revealItems.forEach(item => item.classList.add("reveal"));
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  }

  // Menu search and category filtering
  const search = document.querySelector("#menu-search");
  const category = document.querySelector("#menu-category");
  const menuCards = [...document.querySelectorAll("#menu-items .card")];
  const count = document.querySelector("#menu-result-count");
  function filterMenu() {
    if (!menuCards.length) return;
    const term = (search?.value || "").trim().toLowerCase();
    const chosen = category?.value || "all";
    let shown = 0;
    menuCards.forEach(card => {
      const matchesText = card.textContent.toLowerCase().includes(term);
      const matchesCategory = chosen === "all" || card.dataset.category === chosen;
      const visible = matchesText && matchesCategory;
      card.hidden = !visible;
      if (visible) shown++;
    });
    if (count) count.textContent = `${shown} menu item${shown === 1 ? "" : "s"} found`;
  }
  search?.addEventListener("input", filterMenu);
  category?.addEventListener("change", filterMenu);
  filterMenu();

  // Accessible image lightbox
  const galleryImages = [...document.querySelectorAll(".gallery-grid img")];
  if (galleryImages.length) {
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.setAttribute("role", "dialog");
    lightbox.setAttribute("aria-modal", "true");
    lightbox.setAttribute("aria-label", "Expanded gallery image");
    lightbox.hidden = true;
    lightbox.innerHTML = '<button class="lightbox-close" type="button" aria-label="Close image">×</button><button class="lightbox-prev" type="button" aria-label="Previous image">‹</button><figure><img alt=""><figcaption></figcaption></figure><button class="lightbox-next" type="button" aria-label="Next image">›</button>';
    document.body.appendChild(lightbox);
    const large = lightbox.querySelector("figure img");
    const caption = lightbox.querySelector("figcaption");
    let current = 0, previousFocus = null;
    function showImage(index) {
      current = (index + galleryImages.length) % galleryImages.length;
      const thumb = galleryImages[current];
      large.src = thumb.src; large.alt = thumb.alt;
      caption.textContent = thumb.alt || "Fresh Brew Cafe gallery image";
    }
    function close() { lightbox.hidden = true; document.body.classList.remove("lightbox-open"); previousFocus?.focus(); }
    galleryImages.forEach((img, i) => {
      img.tabIndex = 0;
      img.setAttribute("role", "button");
      img.setAttribute("aria-label", `Enlarge image: ${img.alt}`);
      const open = () => { previousFocus = img; showImage(i); lightbox.hidden = false; document.body.classList.add("lightbox-open"); lightbox.querySelector(".lightbox-close").focus(); };
      img.addEventListener("click", open);
      img.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
    });
    lightbox.querySelector(".lightbox-close").addEventListener("click", close);
    lightbox.querySelector(".lightbox-prev").addEventListener("click", () => showImage(current - 1));
    lightbox.querySelector(".lightbox-next").addEventListener("click", () => showImage(current + 1));
    lightbox.addEventListener("click", e => { if (e.target === lightbox) close(); });
    document.addEventListener("keydown", e => {
      if (lightbox.hidden) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showImage(current - 1);
      if (e.key === "ArrowRight") showImage(current + 1);
    });
  }

  // Contact form: validate then open an email draft (static sites cannot send email themselves)
  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    const feedback = contactForm.querySelector(".form-feedback");
    contactForm.addEventListener("submit", event => {
      event.preventDefault();
      if (!contactForm.reportValidity()) return;
      const data = new FormData(contactForm);
      const phone = String(data.get("phone") || "").trim();
      if (phone && !/^[+]?[\d\s()\-]{7,20}$/.test(phone)) {
        feedback.textContent = "Please enter a valid phone number (7–20 characters using digits, spaces, +, brackets or hyphens).";
        feedback.className = "form-feedback error";
        contactForm.querySelector("#phone").focus();
        return;
      }
      const subject = `Fresh Brew Cafe website: ${data.get("messageType")}`;
      const body = [
        `Name: ${data.get("name")}`,
        `Email: ${data.get("email")}`,
        `Phone: ${phone || "Not provided"}`,
        `Message type: ${data.get("messageType")}`,
        "",
        "Message:",
        data.get("message")
      ].join("\n");
      feedback.textContent = "Your details are validated. Your email app should open with the message prepared; please review and press Send.";
      feedback.className = "form-feedback success";
      window.location.href = `mailto:hello@freshbrewcafe.co.za?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }

  // Enquiry form: calculate an indicative response from the selected enquiry
  const enquiryForm = document.querySelector("#enquiry-form");
  if (enquiryForm) {
    const result = enquiryForm.querySelector(".enquiry-result");
    enquiryForm.addEventListener("submit", event => {
      event.preventDefault();
      if (!enquiryForm.reportValidity()) return;
      const data = new FormData(enquiryForm);
      const type = data.get("enquiryType");
      const quantity = Math.max(1, Number(data.get("quantity") || 1));
      const options = {
        coffee: {name:"coffee order", price:35, note:"Classic cappuccino estimate"},
        breakfast: {name:"breakfast combo", price:55, note:"Morning combo estimate"},
        muffin: {name:"coffee and muffin combo", price:50, note:"Coffee & muffin special estimate"},
        catering: {name:"catering request", price:0, note:"Catering prices depend on menu, guest count and date. Please contact us for a tailored quote."},
        volunteer: {name:"volunteer enquiry", price:0, note:"Thank you for your interest. We will need to confirm any available opportunities directly."},
        sponsor: {name:"sponsorship enquiry", price:0, note:"Thank you for your interest. Sponsorship options must be discussed with the cafe team."}
      };
      const item = options[type];
      let message = `<h3>Enquiry summary</h3><p>Thank you, ${escapeText(data.get("name"))}. We received your enquiry about a ${item.name}.</p>`;
      if (item.price) message += `<p>Indicative estimate: <strong>R${item.price * quantity}</strong> (${quantity} × R${item.price}).</p>`;
      message += `<p>${item.note}</p><p>This is an estimate, not a confirmed booking or order. Please use the Contact Us page to confirm availability and final pricing.</p>`;
      result.innerHTML = message;
      result.hidden = false;
      result.scrollIntoView({behavior:"smooth", block:"nearest"});
    });
  }
  function escapeText(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
  }

  // Small FAQ accordion
  document.querySelectorAll(".accordion-trigger").forEach(button => {
    button.addEventListener("click", () => {
      const panel = document.getElementById(button.getAttribute("aria-controls"));
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      if (panel) panel.hidden = expanded;
    });
  });
});
