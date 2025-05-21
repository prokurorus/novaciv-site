const DEFAULT_LANG = localStorage.getItem("lang") || "ru";

function setLang(lang) {
  localStorage.setItem("lang", lang);
  fetch("translations.json")
    .then(res => res.json())
    .then(data => {
      document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        if (data[key] && data[key][lang]) {
          el.textContent = data[key][lang];
        }
      });
    });
}

window.addEventListener("DOMContentLoaded", () => setLang(DEFAULT_LANG));
