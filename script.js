"use strict";

const menuToggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");
const navLinks = [...document.querySelectorAll(".chapter-nav a")];
const sections = [...document.querySelectorAll(".doc-section")];
const english = document.documentElement.lang.startsWith("en");
const openMenuLabel = english ? "Open chapters" : "打开章节目录";
const closeMenuLabel = english ? "Close chapters" : "关闭章节目录";

function closeMenu() {
  sidebar.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", openMenuLabel);
}

menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  sidebar.classList.toggle("is-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? closeMenuLabel : openMenuLabel);
});

navLinks.forEach(link => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && sidebar.classList.contains("is-open")) {
    closeMenu();
    menuToggle.focus();
  }
});

function updateChapter() {
  let current = sections[0].id;
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= 180) current = section.id;
  }
  for (const link of navLinks) {
    const active = link.hash === `#${current}`;
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  }
}

let scrollPending = false;
window.addEventListener("scroll", () => {
  if (scrollPending) return;
  scrollPending = true;
  requestAnimationFrame(() => {
    updateChapter();
    scrollPending = false;
  });
}, {passive: true});
updateChapter();

function dashboardOrigin(value) {
  try {
    const url = new URL(value);
    if (!["http:", "https:"].includes(url.protocol) || url.username || url.password) return null;
    return `${url.origin}/`;
  } catch {
    return null;
  }
}

const center = new URLSearchParams(window.location.search).get("center");
const destination = dashboardOrigin(center) || dashboardOrigin(window.EMS_GUIDE_CONFIG?.dashboardUrl);
if (destination) {
  document.querySelectorAll(".dashboard-link").forEach(link => { link.href = destination; });
}

const languageLink = document.querySelector(".language-link");
if (languageLink) {
  const languageUrl = new URL(languageLink.href);
  if (destination) languageUrl.searchParams.set("center", destination);
  languageLink.href = languageUrl.href;
  languageLink.addEventListener("click", () => {
    languageUrl.hash = window.location.hash;
    languageLink.href = languageUrl.href;
  });
}
